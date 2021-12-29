import { Factory } from "../../typechain/Factory";
import { Fixture } from "ethereum-waffle";
import { TestVAMM } from "../../typechain/TestVAMM";
import { TestAMM } from "../../typechain/TestAMM";
import { TestMarginEngine } from "../../typechain/TestMarginEngine";
import { TestVAMMCallee } from "../../typechain/TestVAMMCallee";
import { TestMarginEngineCallee } from "../../typechain/TestMarginEngineCallee";
// import { TestERC20 } from '../../typechain/TestERC20'
import { TestDeployer } from "../../typechain/TestDeployer";
import { BigNumber } from "@ethersproject/bignumber";
import { FixedAndVariableMath, MockAaveLendingPool } from "../../typechain";
import { consts } from "../helpers/constants";
import { ethers, waffle } from "hardhat";
import { getCurrentTimestamp } from "../helpers/time";
import {
  APY_UPPER_MULTIPLIER,
  APY_LOWER_MULTIPLIER,
  MIN_DELTA_LM,
  MIN_DELTA_IM,
  MAX_LEVERAGE,
  SIGMA_SQUARED,
  ALPHA,
  BETA,
  XI_UPPER,
  XI_LOWER,
  RATE_ORACLE_ID,
} from "./utilities";
import { toBn } from "evm-bn";
import { aave_lending_pool_addr } from "./constants";
const { provider } = waffle;

interface FactoryFixture {
  factory: Factory;
}

async function marginCalculatorFixture(fixedAndVariableMath: any, time: any, factory: any) {

  // const { fixedAndVariableMath } = await fixedAndVariableMathFixture();
  // const { time } = await timeFixture();

  const TestMarginCalculatorFactory = await ethers.getContractFactory(
    "TestMarginCalculator",
    {
      libraries: {
        FixedAndVariableMath: fixedAndVariableMath.address,
        Time: time.address,
      },
    }
  );

  const testMarginCalculator = await TestMarginCalculatorFactory.deploy(factory);

  return { testMarginCalculator };
}

export async function mockERC20Fixture() {
  const MockERC20Factory = await ethers.getContractFactory("ERC20Mock");

  const token = await MockERC20Factory.deploy("Voltz USD", "VUSD", 6);

  return { token };
}

export async function mockAaveLendingPoolFixture() {
  const MockAaveLendingPoolFactory = await ethers.getContractFactory(
    "MockAaveLendingPool"
  );

  const aaveLendingPool = await MockAaveLendingPoolFactory.deploy();

  return { aaveLendingPool };
}

export async function rateOracleFixture(fixedAndVariableMathAddress: string, timeAddress: string, tokenAddress: string, aaveLendingPoolAddress: string) {

  const TestRateOracleFactory = await ethers.getContractFactory(
    "TestRateOracle",
    {
      libraries: {
        FixedAndVariableMath: fixedAndVariableMathAddress,
        Time: timeAddress
      },
    }
  );

  console.log("Test TS: Aave lending pool address is: ", aaveLendingPoolAddress);

  const testRateOracle = await TestRateOracleFactory.deploy(
    aaveLendingPoolAddress,
    RATE_ORACLE_ID,
    tokenAddress
  );

  return { testRateOracle };
}

async function vammHelpersFixture(fixedAndVariableMath: any) {
  // const { fixedAndVariableMath } = await fixedAndVariableMathFixture();

  const VAMMHelpersFactory = await ethers.getContractFactory("VAMMHelpers", {
    libraries: {
      FixedAndVariableMath: fixedAndVariableMath.address,
    },
  });

  const vammHelpers = await VAMMHelpersFactory.deploy();

  return { vammHelpers };
}

// async function positionFixture() {
//   // : Promise<PositionFixture> {

//   const PositionFactory = await ethers.getContractFactory("Position");

//   const position = await PositionFactory.deploy();

//   return { position };
// }

async function tickFixture() {
  const TickFactory = await ethers.getContractFactory("Tick");

  const tick = await TickFactory.deploy();

  return { tick };
}

async function unwindTraderUnwinPositionFixture() {
  const UnwindTraderUnwindPositionFactory = await ethers.getContractFactory(
    "UnwindTraderUnwindPosition"
  );

  const unwindTraderUnwindPosition =
    await UnwindTraderUnwindPositionFactory.deploy();

  return { unwindTraderUnwindPosition };
}

export async function timeFixture() {
  const TimeFactory = await ethers.getContractFactory("Time");

  const time = await TimeFactory.deploy();

  return { time };
}

export async function fixedAndVariableMathFixture(time: any) {
  // const { time } = await timeFixture();

  const fixedAndVariableMathFactory = await ethers.getContractFactory(
    "FixedAndVariableMath",
    {
      libraries: {
        Time: time.address,
      },
    }
  );

  const fixedAndVariableMath =
    (await fixedAndVariableMathFactory.deploy()) as FixedAndVariableMath;

  return { fixedAndVariableMath };
}

async function factoryFixture(time: any): Promise<FactoryFixture> {

  const factoryFactory = await ethers.getContractFactory("Factory", {
    libraries: {
      Time: time.address
    },
  });
  const factory = (await factoryFactory.deploy()) as Factory;
  return { factory };
}

interface VAMMFixture extends FactoryFixture {
  vammCalleeTest: TestVAMMCallee;
  createVAMM(ammAddress: string): Promise<TestVAMM>;
}

interface MarginEngineFixture extends FactoryFixture {
  marginEngineCalleeTest: TestMarginEngineCallee;
  createMarginEngine(ammAddress: string): Promise<TestMarginEngine>;
}


// one fixture for everything amm/vamm/marginEngine
// the fixture needs to properly set everything
// just use onlyFactory auth for all amm, vamm and margin engine
// callees now work
// convert the amm fixture into a composite one and use it for all the tests amm, vamm and margin engine

interface MetaFixture {
  factory: Factory;
  ammTest: TestAMM;
  vammTest: TestVAMM;
  marginEngineTest: TestMarginEngine;
  vammCalleeTest: TestVAMMCallee;
  marginEngineCalleeTest: TestMarginEngineCallee;
}

export const metaFixture = async function (): Promise<MetaFixture> {
  // deploy the amm
  // deploy the vamm
  // deploy the margin engine
  // set the margin engine in the amm, set the vamm in the amm

  // todo: need dummy token so we can test token transfers
  const termStartTimestamp: number = await getCurrentTimestamp(provider);
  const termEndTimestamp: number =
    termStartTimestamp + consts.ONE_DAY.toNumber();
  const termStartTimestampBN: BigNumber = toBn(termStartTimestamp.toString());
  const termEndTimestampBN: BigNumber = toBn(termEndTimestamp.toString());

  console.log(
    "Test: Term Start Timestamp is: ",
    termStartTimestampBN.toString()
  );
  console.log("Test: Term End Timestamp is: ", termEndTimestampBN.toString());

  // create a mock token and mint some to our wallet
  const { token } = await mockERC20Fixture();

  const { aaveLendingPool } = await mockAaveLendingPoolFixture();
  await aaveLendingPool.setReserveNormalizedIncome(
    token.address,
    BigNumber.from(10).pow(27)
  );

  const { time } = await timeFixture();
  const { factory } = await factoryFixture(time);
  const { tick } = await tickFixture();
  const { fixedAndVariableMath } = await fixedAndVariableMathFixture(time);
  const { unwindTraderUnwindPosition } =
    await unwindTraderUnwinPositionFixture();
  const { vammHelpers } = await vammHelpersFixture(fixedAndVariableMath);
  const { testRateOracle } = await rateOracleFixture(fixedAndVariableMath.address, time.address, token.address, aaveLendingPool.address);
  const { testMarginCalculator } = await marginCalculatorFixture(fixedAndVariableMath, time, factory);

  // set the rate for termStartTimestamp
  // await testRateOracle.setTermStartTimestampRate(
  //   token.address,
  //   termStartTimestampBN
  // );

  // set the rate for sigmaSquared
  await testMarginCalculator.setMarginCalculatorParametersTest(
    RATE_ORACLE_ID,
    APY_UPPER_MULTIPLIER,
    APY_LOWER_MULTIPLIER,
    MIN_DELTA_LM,
    MIN_DELTA_IM,
    MAX_LEVERAGE,
    SIGMA_SQUARED,
    ALPHA,
    BETA,
    XI_UPPER,
    XI_LOWER
  );

  // add a mock rate oracle to the factory
  await factory.addRateOracle(RATE_ORACLE_ID, testRateOracle.address);

  // set the margin calculator
  await factory.setCalculator(testMarginCalculator.address);

  // set the rate for termStartTimestamp in the test rate oracle

  const deployerTestFactory = await ethers.getContractFactory("TestDeployer", {
    libraries: {
      FixedAndVariableMath: fixedAndVariableMath.address,
      Tick: tick.address,
      Time: time.address,
      UnwindTraderUnwindPosition: unwindTraderUnwindPosition.address,
      VAMMHelpers: vammHelpers.address,
    },
  });

  const ammTestFactory = await ethers.getContractFactory("TestAMM");

  // create the amm

  const deployerTest = (await deployerTestFactory.deploy()) as TestDeployer;
  let tx = await deployerTest.deployAMM(
    factory.address,
    token.address,
    RATE_ORACLE_ID,
    termStartTimestampBN,
    termEndTimestampBN
  );

  let receipt = await tx.wait();

  const ammAddress = receipt.events?.[0].args?.ammAddress as string;
  console.log("The AMM address is ", ammAddress);
  const ammTest = ammTestFactory.attach(ammAddress) as TestAMM;

  // create the margin engine

  const marginEngineTestFactory = await ethers.getContractFactory(
    "TestMarginEngine",
    {
      libraries: {
        FixedAndVariableMath: fixedAndVariableMath.address,
        Time: time.address,
        UnwindTraderUnwindPosition: unwindTraderUnwindPosition.address,
      },
    }
  );

  const testMarginEngineCalleeFactory = await ethers.getContractFactory(
    "TestMarginEngineCallee"
  );

  const marginEngineCalleeTest =
    (await testMarginEngineCalleeFactory.deploy()) as TestMarginEngineCallee;

  tx = await deployerTest.deployMarginEngine(
    // factory.address,
    ammAddress
  );

  receipt = await tx.wait();

  const marginEngineAddress = receipt.events?.[0].args
    ?.marginEngineAddress as string;

  const marginEngineTest = marginEngineTestFactory.attach(
    marginEngineAddress
  ) as TestMarginEngine;

  // Grant an allowance to the MarginEngine
  await token.approve(marginEngineTest.address, BigNumber.from(10).pow(27));

  // link the margin engine to the AMM
  await ammTest.setMarginEngine(marginEngineAddress);

  // create the vamm
  const vammTestFactory = await ethers.getContractFactory("TestVAMM", {
    libraries: {
      FixedAndVariableMath: fixedAndVariableMath.address,
      Tick: tick.address,
      Time: time.address,
      VAMMHelpers: vammHelpers.address,
    },
  });

  const testVAMMCalleeFactory = await ethers.getContractFactory(
    "TestVAMMCallee"
  );

  const vammCalleeTest =
    (await testVAMMCalleeFactory.deploy()) as TestVAMMCallee;

  tx = await deployerTest.deployVAMM(
    // factory.address,
    ammAddress
  );

  receipt = await tx.wait();

  const vammAddress = receipt.events?.[0].args?.vammAddress as string;

  const vammTest = vammTestFactory.attach(vammAddress) as TestVAMM;

  // link the vamm to the amm
  await ammTest.setVAMM(vammAddress);

  return {
    factory,
    ammTest,
    vammTest,
    marginEngineTest,
    vammCalleeTest,
    marginEngineCalleeTest,
  };
};
