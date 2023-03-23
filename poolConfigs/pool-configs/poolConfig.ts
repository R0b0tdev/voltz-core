import { defaultConfig, gaps } from "./defaultConfig";
import {
  SinglePoolConfiguration,
  NetworkPoolConfigurations,
  PoolConfigurations,
} from "./types";

const poolConfigs: PoolConfigurations = {
  mainnet: {
    // aUSDC pools
    aUSDC_v5: {
      rateOracle: "AaveRateOracle_USDC",
      tickSpacing: 60,
      cacheMaxAgeInSeconds: 21600,
      lookbackWindowInSeconds: 11 * 24 * 60 * 60,
      feeWad: "1000000000000000",
      liquidatorRewardWad: "50000000000000000",
      vammFeeProtocolWad: "0",
      isAlpha: false,
      lpMarginCap: "0",
      termStartTimestamp: 1672311600,
      termEndTimestamp: 1680264000,
      marginCalculatorParams: {
        apyUpperMultiplierWad: "1961509192811945728",
        apyLowerMultiplierWad: "839562149274473984",
        sigmaSquaredWad: "2502012155004",
        alphaWad: "108853457951948",
        betaWad: "9190145037034650",
        xiUpperWad: "20000000000000000000",
        xiLowerWad: "54000000000000000000",
        tMaxWad: "31536000000000000000000000",
        etaIMWad: "9979206586261602",
        etaLMWad: "3975809974130872",
        ...gaps,
        minMarginToIncentiviseLiquidators: "0",
      },
    },

    aUSDC_v9: {
      rateOracle: "AaveRateOracle_USDC",
      tickSpacing: 60,
      cacheMaxAgeInSeconds: 21600,
      lookbackWindowInSeconds: 10 * 24 * 60 * 60,
      feeWad: "1000000000000000",
      liquidatorRewardWad: "50000000000000000",
      vammFeeProtocolWad: "0",
      isAlpha: false,
      lpMarginCap: "0",
      termStartTimestamp: 1677522287,
      termEndTimestamp: 1680264000,
      marginCalculatorParams: {
        apyUpperMultiplierWad: "1091579257039114496",
        apyLowerMultiplierWad: "639081725111729280",
        sigmaSquaredWad: "2198668847702",
        alphaWad: "1260710341159515",
        betaWad: "64229648025961800",
        xiUpperWad: "78000000000000000000",
        xiLowerWad: "63000000000000000000",
        tMaxWad: "31536000000000000000000000",
        etaIMWad: "2672632676306984",
        etaLMWad: "504611564843844",
        ...gaps,
        minMarginToIncentiviseLiquidators: "0",
      },
    },

    aUSDC_v11: {
      rateOracle: "AaveV3RateOracle_USDC",
      tickSpacing: 60,
      cacheMaxAgeInSeconds: 21600,
      lookbackWindowInSeconds: 15 * 24 * 60 * 60,
      feeWad: "1000000000000000", // 0.1% LP Fees
      liquidatorRewardWad: "50000000000000000", // 5%
      vammFeeProtocolWad: "0",
      isAlpha: false,
      lpMarginCap: "0",
      termStartTimestamp: 1678874687,
      termEndTimestamp: 1680264000,
      marginCalculatorParams: {
        apyUpperMultiplierWad: "1997732578350006784",
        apyLowerMultiplierWad: "503942403715130240",
        sigmaSquaredWad: "2051031620732",
        alphaWad: "1347882503833347",
        betaWad: "70423844977260704",
        xiUpperWad: "31000000000000000000",
        xiLowerWad: "59000000000000000000",
        tMaxWad: "31536000000000000000000000",
        etaIMWad: "4613508282033912",
        etaLMWad: "2687360151041984",
        ...gaps,
        minMarginToIncentiviseLiquidators: "0",
      },
    },

    // new aUSDC lend v2
    aUSDC_v12: {
      rateOracle: "AaveRateOracle_USDC",
      tickSpacing: 60,
      cacheMaxAgeInSeconds: 21600,
      lookbackWindowInSeconds: 0 * 24 * 60 * 60, // todo: change
      feeWad: "1000000000000000",
      liquidatorRewardWad: "50000000000000000",
      vammFeeProtocolWad: "0",
      isAlpha: false,
      lpMarginCap: "0",
      termStartTimestamp: 1680264000,
      termEndTimestamp: 1682856000,
      marginCalculatorParams: {
        apyUpperMultiplierWad: "0", // todo: change
        apyLowerMultiplierWad: "0", // todo: change
        sigmaSquaredWad: "0", // todo: change
        alphaWad: "0", // todo: change
        betaWad: "0", // todo: change
        xiUpperWad: "0", // todo: change
        xiLowerWad: "0", // todo: change
        tMaxWad: "31536000000000000000000000",
        etaIMWad: "0", // todo: change
        etaLMWad: "0", // todo: change
        ...gaps,
        minMarginToIncentiviseLiquidators: "0",
      },
    },

    // new aUSDC lend v3 - 2 weeks
    aUSDC_v13: {
      rateOracle: "AaveV3RateOracle_USDC",
      tickSpacing: 60,
      cacheMaxAgeInSeconds: 21600,
      lookbackWindowInSeconds: 0 * 24 * 60 * 60, // todo: change
      feeWad: "1000000000000000", // 0.1% LP Fees
      liquidatorRewardWad: "50000000000000000", // 5%
      vammFeeProtocolWad: "0",
      isAlpha: false,
      lpMarginCap: "0",
      termStartTimestamp: 1680264000,
      termEndTimestamp: 1681473600,
      marginCalculatorParams: {
        apyUpperMultiplierWad: "0", // todo: change
        apyLowerMultiplierWad: "0", // todo: change
        sigmaSquaredWad: "0", // todo: change
        alphaWad: "0", // todo: change
        betaWad: "0", // todo: change
        xiUpperWad: "0", // todo: change
        xiLowerWad: "0", // todo: change
        tMaxWad: "31536000000000000000000000",
        etaIMWad: "0", // todo: change
        etaLMWad: "0", // todo: change
        ...gaps,
        minMarginToIncentiviseLiquidators: "0",
      },
    },

    // borrow aUSDC pools
    borrow_aUSDC_v1: {
      rateOracle: "AaveBorrowRateOracle_USDC",
      tickSpacing: 60,
      cacheMaxAgeInSeconds: 21600,
      lookbackWindowInSeconds: 11 * 24 * 60 * 60,
      feeWad: "1000000000000000",
      liquidatorRewardWad: "50000000000000000",
      vammFeeProtocolWad: "0",
      isAlpha: false,
      lpMarginCap: "0",
      termStartTimestamp: 1661155200,
      termEndTimestamp: 1680264000,
      marginCalculatorParams: {
        apyUpperMultiplierWad: "1335271526375451392",
        apyLowerMultiplierWad: "509107441213905856",
        sigmaSquaredWad: "1365227274285",
        alphaWad: "1949152506199",
        betaWad: "37796318750091",
        xiUpperWad: "49000000000000000000",
        xiLowerWad: "86000000000000000000",
        tMaxWad: "31536000000000000000000000",
        etaIMWad: "2913059813811162",
        etaLMWad: "887007499577303",
        ...gaps,
        minMarginToIncentiviseLiquidators: "0",
      },
    },

    // new aUSDC borrow v2
    borrow_aUSDC_v2: {
      rateOracle: "AaveBorrowRateOracle_USDC",
      tickSpacing: 60,
      cacheMaxAgeInSeconds: 21600,
      lookbackWindowInSeconds: 0 * 24 * 60 * 60, // todo: change
      feeWad: "1000000000000000",
      liquidatorRewardWad: "50000000000000000",
      vammFeeProtocolWad: "0",
      isAlpha: false,
      lpMarginCap: "0",
      termStartTimestamp: 1680264000,
      termEndTimestamp: 1682856000,
      marginCalculatorParams: {
        apyUpperMultiplierWad: "0", // todo: change
        apyLowerMultiplierWad: "0", // todo: change
        sigmaSquaredWad: "0", // todo: change
        alphaWad: "0", // todo: change
        betaWad: "0", // todo: change
        xiUpperWad: "0", // todo: change
        xiLowerWad: "0", // todo: change
        tMaxWad: "31536000000000000000000000",
        etaIMWad: "0", // todo: change
        etaLMWad: "0", // todo: change
        ...gaps,
        minMarginToIncentiviseLiquidators: "0",
      },
    },

    // aDAI pools
    aDAI_v4: {
      rateOracle: "AaveRateOracle_DAI",
      tickSpacing: 60,
      cacheMaxAgeInSeconds: 21600,
      lookbackWindowInSeconds: 10 * 24 * 60 * 60,
      feeWad: "1000000000000000",
      liquidatorRewardWad: "50000000000000000",
      vammFeeProtocolWad: "0",
      isAlpha: false,
      lpMarginCap: "0",
      termStartTimestamp: 1672311600,
      termEndTimestamp: 1680264000,
      marginCalculatorParams: {
        apyUpperMultiplierWad: "1541503860988607488",
        apyLowerMultiplierWad: "735787843918297600",
        sigmaSquaredWad: "81635222416914",
        alphaWad: "214799717958168",
        betaWad: "44312601385786520",
        xiUpperWad: "19000000000000000000",
        xiLowerWad: "44000000000000000000",
        tMaxWad: "31536000000000000000000000",
        etaIMWad: "46137616100938272",
        etaLMWad: "1313798210842592",
        ...gaps,
        minMarginToIncentiviseLiquidators: "0",
      },
    },

    // cDAI pools
    cDAI_v4: {
      rateOracle: "CompoundRateOracle_cDAI",
      tickSpacing: 60,
      cacheMaxAgeInSeconds: 21600,
      lookbackWindowInSeconds: 13 * 24 * 60 * 60,
      feeWad: "1000000000000000",
      liquidatorRewardWad: "50000000000000000",
      vammFeeProtocolWad: "0",
      isAlpha: false,
      lpMarginCap: "0",
      termStartTimestamp: 1672311600,
      termEndTimestamp: 1680264000,
      marginCalculatorParams: {
        apyUpperMultiplierWad: "1524558286851522816",
        apyLowerMultiplierWad: "904438053912618880",
        sigmaSquaredWad: "1929249302440",
        alphaWad: "694645363719575",
        betaWad: "64223628602943280",
        xiUpperWad: "20000000000000000000",
        xiLowerWad: "44000000000000000000",
        tMaxWad: "31536000000000000000000000",
        etaIMWad: "17246365331523530",
        etaLMWad: "2535653598757592",
        ...gaps,
        minMarginToIncentiviseLiquidators: "0",
      },
    },

    // stETH pools
    stETH_v2: {
      rateOracle: "LidoRateOracle",
      tickSpacing: 60,
      cacheMaxAgeInSeconds: 21600,
      lookbackWindowInSeconds: 12 * 24 * 60 * 60,
      feeWad: "3000000000000000",
      liquidatorRewardWad: "50000000000000000",
      vammFeeProtocolWad: "0",
      isAlpha: false,
      lpMarginCap: "0",
      termStartTimestamp: 1672311600,
      termEndTimestamp: 1680264000,
      marginCalculatorParams: {
        apyUpperMultiplierWad: "1244805770720191488",
        apyLowerMultiplierWad: "519968303078757824",
        sigmaSquaredWad: "3592155261761",
        alphaWad: "1517604245389938",
        betaWad: "22240869196170240",
        xiUpperWad: "39000000000000000000",
        xiLowerWad: "53000000000000000000",
        tMaxWad: "31536000000000000000000000",
        etaIMWad: "49574867037792664",
        etaLMWad: "1934665498470372",
        ...gaps,
        minMarginToIncentiviseLiquidators: "0",
      },
    },

    // new stETH
    stETH_v3: {
      rateOracle: "LidoRateOracle",
      tickSpacing: 60,
      cacheMaxAgeInSeconds: 21600,
      lookbackWindowInSeconds: 0 * 24 * 60 * 60, // todo: change
      feeWad: "1000000000000000",
      liquidatorRewardWad: "50000000000000000",
      vammFeeProtocolWad: "0",
      isAlpha: false,
      lpMarginCap: "0",
      termStartTimestamp: 1680264000,
      termEndTimestamp: 1682856000,
      marginCalculatorParams: {
        apyUpperMultiplierWad: "0", // todo: change
        apyLowerMultiplierWad: "0", // todo: change
        sigmaSquaredWad: "0", // todo: change
        alphaWad: "0", // todo: change
        betaWad: "0", // todo: change
        xiUpperWad: "0", // todo: change
        xiLowerWad: "0", // todo: change
        tMaxWad: "31536000000000000000000000",
        etaIMWad: "0", // todo: change
        etaLMWad: "0", // todo: change
        ...gaps,
        minMarginToIncentiviseLiquidators: "0",
      },
    },

    // rETH pools
    rETH_v2: {
      rateOracle: "RocketPoolRateOracle",
      tickSpacing: 60,
      cacheMaxAgeInSeconds: 21600,
      lookbackWindowInSeconds: 15 * 24 * 60 * 60,
      feeWad: "3000000000000000",
      liquidatorRewardWad: "50000000000000000",
      vammFeeProtocolWad: "0",
      isAlpha: false,
      lpMarginCap: "0",
      termStartTimestamp: 1672311600,
      termEndTimestamp: 1680264000,
      marginCalculatorParams: {
        apyUpperMultiplierWad: "1294448551566335488",
        apyLowerMultiplierWad: "684989793245359616",
        sigmaSquaredWad: "33860675436429",
        alphaWad: "1270083610681356",
        betaWad: "56116612616284352",
        xiUpperWad: "19000000000000000000",
        xiLowerWad: "28000000000000000000",
        tMaxWad: "31536000000000000000000000",
        etaIMWad: "66398733965684952",
        etaLMWad: "1597943440019691",
        ...gaps,
        minMarginToIncentiviseLiquidators: "0",
      },
    },

    // new rETH
    rETH_v3: {
      rateOracle: "RocketPoolRateOracle",
      tickSpacing: 60,
      cacheMaxAgeInSeconds: 21600,
      lookbackWindowInSeconds: 0 * 24 * 60 * 60, // todo: change
      feeWad: "1000000000000000",
      liquidatorRewardWad: "50000000000000000",
      vammFeeProtocolWad: "0",
      isAlpha: false,
      lpMarginCap: "0",
      termStartTimestamp: 1680264000,
      termEndTimestamp: 1682856000,
      marginCalculatorParams: {
        apyUpperMultiplierWad: "0", // todo: change
        apyLowerMultiplierWad: "0", // todo: change
        sigmaSquaredWad: "0", // todo: change
        alphaWad: "0", // todo: change
        betaWad: "0", // todo: change
        xiUpperWad: "0", // todo: change
        xiLowerWad: "0", // todo: change
        tMaxWad: "31536000000000000000000000",
        etaIMWad: "0", // todo: change
        etaLMWad: "0", // todo: change
        ...gaps,
        minMarginToIncentiviseLiquidators: "0",
      },
    },

    // aETH pools

    // borrow aETH pools
    borrow_aETH_v2: {
      rateOracle: "AaveBorrowRateOracle_WETH",
      tickSpacing: 60,
      cacheMaxAgeInSeconds: 21600,
      lookbackWindowInSeconds: 11 * 24 * 60 * 60,
      feeWad: "3000000000000000",
      liquidatorRewardWad: "50000000000000000",
      vammFeeProtocolWad: "0",
      isAlpha: false,
      lpMarginCap: "0",
      termStartTimestamp: 1664539200,
      termEndTimestamp: 1680264000,
      marginCalculatorParams: {
        apyUpperMultiplierWad: "1997843654128647680",
        apyLowerMultiplierWad: "589110018839187200",
        sigmaSquaredWad: "6480932651016",
        alphaWad: "102154960649235",
        betaWad: "7540852606328997",
        xiUpperWad: "20000000000000000000",
        xiLowerWad: "45000000000000000000",
        tMaxWad: "31536000000000000000000000",
        etaIMWad: "14973774199803030",
        etaLMWad: "3979382670642640",
        ...gaps,
        minMarginToIncentiviseLiquidators: "0",
      },
    },

    // new aETH borrow v2
    borrow_aETH_v3: {
      rateOracle: "AaveBorrowRateOracle_WETH",
      tickSpacing: 60,
      cacheMaxAgeInSeconds: 21600,
      lookbackWindowInSeconds: 0 * 24 * 60 * 60, // todo: change
      feeWad: "1000000000000000", // todo: change
      liquidatorRewardWad: "50000000000000000",
      vammFeeProtocolWad: "0",
      isAlpha: false,
      lpMarginCap: "0",
      termStartTimestamp: 1680264000,
      termEndTimestamp: 1682856000,
      marginCalculatorParams: {
        apyUpperMultiplierWad: "0", // todo: change
        apyLowerMultiplierWad: "0", // todo: change
        sigmaSquaredWad: "0", // todo: change
        alphaWad: "0", // todo: change
        betaWad: "0", // todo: change
        xiUpperWad: "0", // todo: change
        xiLowerWad: "0", // todo: change
        tMaxWad: "31536000000000000000000000",
        etaIMWad: "0", // todo: change
        etaLMWad: "0", // todo: change
        ...gaps,
        minMarginToIncentiviseLiquidators: "0",
      },
    },

    // borrow cUSDT pools
    borrow_cUSDT_v1: {
      rateOracle: "CompoundBorrowRateOracle_cUSDT",
      tickSpacing: 60,
      cacheMaxAgeInSeconds: 21600,
      lookbackWindowInSeconds: 10 * 24 * 60 * 60,
      feeWad: "1000000000000000",
      liquidatorRewardWad: "50000000000000000",
      vammFeeProtocolWad: "0",
      isAlpha: false,
      lpMarginCap: "0",
      termStartTimestamp: 1661155200,
      termEndTimestamp: 1680264000,
      marginCalculatorParams: {
        apyUpperMultiplierWad: "1349916020965325824",
        apyLowerMultiplierWad: "532711169308407232",
        sigmaSquaredWad: "2725848167335",
        alphaWad: "166692599648233",
        betaWad: "6758584070518913",
        xiUpperWad: "25000000000000000000",
        xiLowerWad: "70000000000000000000",
        tMaxWad: "31536000000000000000000000",
        etaIMWad: "3736643999597247",
        etaLMWad: "522548241306638",
        ...gaps,
        minMarginToIncentiviseLiquidators: "0",
      },
    },

    // new cUSDT borrow
    borrow_cUSDT_v2: {
      rateOracle: "CompoundBorrowRateOracle_cUSDT",
      tickSpacing: 60,
      cacheMaxAgeInSeconds: 21600,
      lookbackWindowInSeconds: 0 * 24 * 60 * 60, // todo: change
      feeWad: "1000000000000000",
      liquidatorRewardWad: "50000000000000000",
      vammFeeProtocolWad: "0",
      isAlpha: false,
      lpMarginCap: "0",
      termStartTimestamp: 1680264000,
      termEndTimestamp: 1682856000,
      marginCalculatorParams: {
        apyUpperMultiplierWad: "0", // todo: change
        apyLowerMultiplierWad: "0", // todo: change
        sigmaSquaredWad: "0", // todo: change
        alphaWad: "0", // todo: change
        betaWad: "0", // todo: change
        xiUpperWad: "0", // todo: change
        xiLowerWad: "0", // todo: change
        tMaxWad: "31536000000000000000000000",
        etaIMWad: "0", // todo: change
        etaLMWad: "0", // todo: change
        ...gaps,
        minMarginToIncentiviseLiquidators: "0",
      },
    },

    // borrow aUSDT pools
    borrow_aUSDT_v1: {
      rateOracle: "AaveBorrowRateOracle_USDT",
      tickSpacing: 60,
      cacheMaxAgeInSeconds: 21600,
      lookbackWindowInSeconds: 13 * 24 * 60 * 60,
      feeWad: "1000000000000000",
      liquidatorRewardWad: "50000000000000000",
      vammFeeProtocolWad: "0",
      isAlpha: false,
      lpMarginCap: "0",
      termStartTimestamp: 1672311600,
      termEndTimestamp: 1680264000,
      marginCalculatorParams: {
        apyUpperMultiplierWad: "1268646339904882432",
        apyLowerMultiplierWad: "368362724500037120",
        sigmaSquaredWad: "50365320301383",
        alphaWad: "312506752749364",
        betaWad: "11398227281356854",
        xiUpperWad: "19000000000000000000",
        xiLowerWad: "31000000000000000000",
        tMaxWad: "31536000000000000000000000",
        etaIMWad: "66396123082606328",
        etaLMWad: "1001531166535309",
        ...gaps,
        minMarginToIncentiviseLiquidators: "0",
      },
    },

    // new aUSDT borrow v2
    borrow_aUSDT_v2: {
      rateOracle: "AaveBorrowRateOracle_USDT",
      tickSpacing: 60,
      cacheMaxAgeInSeconds: 21600,
      lookbackWindowInSeconds: 0 * 24 * 60 * 60, // todo: change
      feeWad: "1000000000000000",
      liquidatorRewardWad: "50000000000000000",
      vammFeeProtocolWad: "0",
      isAlpha: false,
      lpMarginCap: "0",
      termStartTimestamp: 1680264000,
      termEndTimestamp: 1682856000,
      marginCalculatorParams: {
        apyUpperMultiplierWad: "0", // todo: change
        apyLowerMultiplierWad: "0", // todo: change
        sigmaSquaredWad: "0", // todo: change
        alphaWad: "0", // todo: change
        betaWad: "0", // todo: change
        xiUpperWad: "0", // todo: change
        xiLowerWad: "0", // todo: change
        tMaxWad: "31536000000000000000000000",
        etaIMWad: "0", // todo: change
        etaLMWad: "0", // todo: change
        ...gaps,
        minMarginToIncentiviseLiquidators: "0",
      },
    },
  },

  arbitrum: {
    aUSDC_v1: {
      rateOracle: "AaveV3RateOracle_USDC",
      tickSpacing: 60,
      cacheMaxAgeInSeconds: 21600,
      lookbackWindowInSeconds: 10 * 24 * 60 * 60,
      feeWad: "1000000000000000", // 0.1% LP Fees
      liquidatorRewardWad: "50000000000000000", // 5%
      vammFeeProtocolWad: "0",
      isAlpha: false,
      lpMarginCap: "0",
      termStartTimestamp: 1676995012,
      termEndTimestamp: 1680264000,
      marginCalculatorParams: {
        apyUpperMultiplierWad: "1192463954583689984",
        apyLowerMultiplierWad: "626177954097487488",
        sigmaSquaredWad: "873241327462",
        alphaWad: "235588846362514",
        betaWad: "33579608178211732",
        xiUpperWad: "19000000000000000000",
        xiLowerWad: "50000000000000000000",
        tMaxWad: "31536000000000000000000000",
        etaIMWad: "24932053398198104",
        etaLMWad: "3959638123311051",
        ...gaps,
        minMarginToIncentiviseLiquidators: "0",
      },
    },

    // new aUSDC lend v3 -- 2 weeks
    aUSDC_v2: {
      rateOracle: "AaveV3RateOracle_USDC",
      tickSpacing: 60,
      cacheMaxAgeInSeconds: 21600,
      lookbackWindowInSeconds: 0 * 24 * 60 * 60, // todo: change
      feeWad: "1000000000000000", // 0.1% LP Fees
      liquidatorRewardWad: "50000000000000000", // 5%
      vammFeeProtocolWad: "0",
      isAlpha: false,
      lpMarginCap: "0",
      termStartTimestamp: 1680264000,
      termEndTimestamp: 1681473600,
      marginCalculatorParams: {
        apyUpperMultiplierWad: "0", // todo: change
        apyLowerMultiplierWad: "0", // todo: change
        sigmaSquaredWad: "0", // todo: change
        alphaWad: "0", // todo: change
        betaWad: "0", // todo: change
        xiUpperWad: "0", // todo: change
        xiLowerWad: "0", // todo: change
        tMaxWad: "31536000000000000000000000",
        etaIMWad: "0", // todo: change
        etaLMWad: "0", // todo: change
        ...gaps,
        minMarginToIncentiviseLiquidators: "0",
      },
    },

    // new aUSDC borrow v2
    borrow_aUSDC_v2: {
      rateOracle: "AaveV3BorrowRateOracle_USDC",
      tickSpacing: 60,
      cacheMaxAgeInSeconds: 21600,
      lookbackWindowInSeconds: 0 * 24 * 60 * 60, // todo: change
      feeWad: "1000000000000000",
      liquidatorRewardWad: "50000000000000000",
      vammFeeProtocolWad: "0",
      isAlpha: false,
      lpMarginCap: "0",
      termStartTimestamp: 1680264000,
      termEndTimestamp: 1682856000,
      marginCalculatorParams: {
        apyUpperMultiplierWad: "0", // todo: change
        apyLowerMultiplierWad: "0", // todo: change
        sigmaSquaredWad: "0", // todo: change
        alphaWad: "0", // todo: change
        betaWad: "0", // todo: change
        xiUpperWad: "0", // todo: change
        xiLowerWad: "0", // todo: change
        tMaxWad: "31536000000000000000000000",
        etaIMWad: "0", // todo: change
        etaLMWad: "0", // todo: change
        ...gaps,
        minMarginToIncentiviseLiquidators: "0",
      },
    },

    // GLP pools
    glpETH_v2: {
      rateOracle: "GlpRateOracle",
      tickSpacing: 60,
      cacheMaxAgeInSeconds: 21600,
      lookbackWindowInSeconds: 13 * 24 * 60 * 60,
      feeWad: "1000000000000000", // 0.1% LP Fees
      liquidatorRewardWad: "50000000000000000", // 5%
      vammFeeProtocolWad: "0",
      isAlpha: false,
      lpMarginCap: "0",
      termStartTimestamp: 1678874727,
      termEndTimestamp: 1681300800,
      marginCalculatorParams: {
        apyUpperMultiplierWad: "1644304481377574400",
        apyLowerMultiplierWad: "536407239345220288",
        sigmaSquaredWad: "476558919253020",
        alphaWad: "2675039466674356",
        betaWad: "26408681566976212",
        xiUpperWad: "30000000000000000000",
        xiLowerWad: "50000000000000000000",
        tMaxWad: "31536000000000000000000000",
        etaIMWad: "4313818054680082",
        etaLMWad: "2729134122607352",
        ...gaps,
        minMarginToIncentiviseLiquidators: "0",
      },
    },
  },

  goerli: {
    // Goerli pools
    Goerli_cETH: {
      rateOracle: "CompoundRateOracle_cETH",
      // Keep timestamps 0 but change on local machine on-demand
      termStartTimestamp: 0,
      termEndTimestamp: 0,
      ...defaultConfig,
    },

    Goerli_cUSDC: {
      rateOracle: "CompoundRateOracle_cUSDC",
      // Keep timestamps 0 but change on local machine on-demand
      termStartTimestamp: 0,
      termEndTimestamp: 0,
      ...defaultConfig,
    },

    Goerli_borrow_cUSDT: {
      rateOracle: "CompoundBorrowRateOracle_cUSDT",
      // Keep timestamps 0 but change on local machine on-demand
      termStartTimestamp: 0,
      termEndTimestamp: 0,
      ...defaultConfig,
    },
  },
};

export const getNetworkPoolConfigs = (
  networkName: string
): NetworkPoolConfigurations => {
  const tmp = poolConfigs[networkName as keyof typeof poolConfigs];
  if (tmp) {
    return tmp;
  }

  throw new Error("Network not found");
};

export const getPoolConfig = (
  networkName: string,
  poolName: string
): SinglePoolConfiguration => {
  const networkConfigs = getNetworkPoolConfigs(networkName);

  const tmp = networkConfigs[poolName as keyof typeof networkConfigs];
  if (tmp) {
    return tmp;
  }

  throw new Error("Pool not found");
};
