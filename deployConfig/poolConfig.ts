import { BigNumberish } from "ethers";
import { toBn } from "../test/helpers/toBn";

export interface poolConfig {
  // The name or address of the rate oracle as defined in deployments/<network> (e.g. 'AaveRateOracle_USDT')
  rateOracle: string;

  // Tick spacing of vAMM (NOT wad)
  tickSpacing: number;

  // Historical apy refresh period (NOT wad)
  cacheMaxAgeInSeconds: number;

  // Lookback window in seconds (NOT wad)
  lookbackWindowInSeconds: number;

  // Percentage of LP fees (wad)
  feeWad: BigNumberish;

  // Percentage of liquidator reward (wad)
  liquidatorRewardWad: BigNumberish;

  // Fraction of fee protocol (wad)
  vammFeeProtocolWad: BigNumberish;

  // alpha state
  isAlpha: boolean;

  // Scaled margin cap
  lpMarginCap: BigNumberish;

  // Margin Calculator parameters
  marginCalculatorParams: {
    apyUpperMultiplierWad: BigNumberish;
    apyLowerMultiplierWad: BigNumberish;
    sigmaSquaredWad: BigNumberish;
    alphaWad: BigNumberish;
    betaWad: BigNumberish;
    xiUpperWad: BigNumberish;
    xiLowerWad: BigNumberish;
    tMaxWad: BigNumberish;
    etaIMWad: BigNumberish;
    etaLMWad: BigNumberish;
    gap1: BigNumberish;
    gap2: BigNumberish;
    gap3: BigNumberish;
    gap4: BigNumberish;
    gap5: BigNumberish;
    gap6: BigNumberish;
    gap7: BigNumberish;
    minMarginToIncentiviseLiquidators: BigNumberish;
  };
}

export const poolConfigs: { [name: string]: poolConfig } = {
  borrow_aETH_v1: {
    rateOracle: "AaveBorrowRateOracle_WETH",
    tickSpacing: 60,
    cacheMaxAgeInSeconds: 21600,
    lookbackWindowInSeconds: 12 * 24 * 60 * 60,
    feeWad: "3000000000000000",
    liquidatorRewardWad: "50000000000000000",
    vammFeeProtocolWad: "0",
    isAlpha: false,
    lpMarginCap: toBn("0"),
    marginCalculatorParams: {
      apyUpperMultiplierWad: "2020995081059354112",
      apyLowerMultiplierWad: "130795812543698432",
      sigmaSquaredWad: "4753455391293",
      alphaWad: "326444791607040",
      betaWad: "36024629947560684",
      xiUpperWad: "19000000000000000000",
      xiLowerWad: "35000000000000000000",
      tMaxWad: "31536000000000000000000000",
      etaIMWad: "2131103986271450",
      etaLMWad: "1080162721237868",
      gap1: toBn("0"),
      gap2: toBn("0"),
      gap3: toBn("0"),
      gap4: toBn("0"),
      gap5: toBn("0"),
      gap6: toBn("0"),
      gap7: toBn("0"),
      minMarginToIncentiviseLiquidators: "0",
    },
  },

  borrow_aUSDC_v1: {
    rateOracle: "AaveBorrowRateOracle_USDC",
    tickSpacing: 60,
    cacheMaxAgeInSeconds: 21600,
    lookbackWindowInSeconds: 11 * 24 * 60 * 60,
    feeWad: "1000000000000000",
    liquidatorRewardWad: "50000000000000000",
    vammFeeProtocolWad: "0",
    isAlpha: false,
    lpMarginCap: "0", // note USDC uses 6 decimals
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
      gap1: toBn("0"),
      gap2: toBn("0"),
      gap3: toBn("0"),
      gap4: toBn("0"),
      gap5: toBn("0"),
      gap6: toBn("0"),
      gap7: toBn("0"),
      minMarginToIncentiviseLiquidators: "0",
    },
  },

  borrow_cUSDT_v1: {
    rateOracle: "CompoundBorrowRateOracle_cUSDT",
    tickSpacing: 60,
    cacheMaxAgeInSeconds: 21600,
    lookbackWindowInSeconds: 10 * 24 * 60 * 60,
    feeWad: "1000000000000000",
    liquidatorRewardWad: "50000000000000000",
    vammFeeProtocolWad: "0",
    isAlpha: false,
    lpMarginCap: "0", // note USDT uses 6 decimals
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
      gap1: toBn("0"),
      gap2: toBn("0"),
      gap3: toBn("0"),
      gap4: toBn("0"),
      gap5: toBn("0"),
      gap6: toBn("0"),
      gap7: toBn("0"),
      minMarginToIncentiviseLiquidators: "0",
    },
  },

  rETH_v1: {
    rateOracle: "RocketPoolRateOracle",
    tickSpacing: 60,
    cacheMaxAgeInSeconds: 21600,
    lookbackWindowInSeconds: 10 * 24 * 60 * 60,
    feeWad: "3000000000000000",
    liquidatorRewardWad: "50000000000000000",
    vammFeeProtocolWad: "0",
    isAlpha: false,
    lpMarginCap: "0",
    marginCalculatorParams: {
      apyUpperMultiplierWad: "1330403972580154880",
      apyLowerMultiplierWad: "695323126856589696",
      sigmaSquaredWad: "4911361273220",
      alphaWad: "884125694186116",
      betaWad: "29639680817469288",
      xiUpperWad: "19000000000000000000",
      xiLowerWad: "50000000000000000000",
      tMaxWad: "31536000000000000000000000",
      etaIMWad: "8339679487565499",
      etaLMWad: "2235643406201386",
      gap1: toBn("0"),
      gap2: toBn("0"),
      gap3: toBn("0"),
      gap4: toBn("0"),
      gap5: toBn("0"),
      gap6: toBn("0"),
      gap7: toBn("0"),
      minMarginToIncentiviseLiquidators: "0",
    },
  },

  stETH_v1: {
    rateOracle: "LidoRateOracle",
    tickSpacing: 60,
    cacheMaxAgeInSeconds: 21600,
    lookbackWindowInSeconds: 12 * 24 * 60 * 60,
    feeWad: "3000000000000000",
    liquidatorRewardWad: "50000000000000000",
    vammFeeProtocolWad: "0",
    isAlpha: false,
    lpMarginCap: "0",
    marginCalculatorParams: {
      apyUpperMultiplierWad: "1227061120286234880",
      apyLowerMultiplierWad: "741946561695063680",
      sigmaSquaredWad: "261925496417",
      alphaWad: "102986849448533",
      betaWad: "3065026034617912",
      xiUpperWad: "24000000000000000000",
      xiLowerWad: "68000000000000000000",
      tMaxWad: "31536000000000000000000000",
      etaIMWad: "8936275037363058",
      etaLMWad: "1682503506608616",
      gap1: toBn("0"),
      gap2: toBn("0"),
      gap3: toBn("0"),
      gap4: toBn("0"),
      gap5: toBn("0"),
      gap6: toBn("0"),
      gap7: toBn("0"),
      minMarginToIncentiviseLiquidators: "0",
    },
  },

  aDAI_v3: {
    rateOracle: "AaveRateOracle_DAI",
    tickSpacing: 60,
    cacheMaxAgeInSeconds: 21600,
    lookbackWindowInSeconds: 15 * 24 * 60 * 60,
    feeWad: "1000000000000000",
    liquidatorRewardWad: "50000000000000000",
    vammFeeProtocolWad: "0",
    isAlpha: false,
    lpMarginCap: "0",
    marginCalculatorParams: {
      apyUpperMultiplierWad: "1355385962586063360",
      apyLowerMultiplierWad: "569832947086631552",
      sigmaSquaredWad: "3737859579506",
      alphaWad: "58792793057844",
      betaWad: "6473155780605134",
      xiUpperWad: "19000000000000000000",
      xiLowerWad: "31000000000000000000",
      tMaxWad: "31536000000000000000000000", // one year
      etaIMWad: "11849467386051436",
      etaLMWad: "1154993461368342",
      gap1: toBn("0"),
      gap2: toBn("0"),
      gap3: toBn("0"),
      gap4: toBn("0"),
      gap5: toBn("0"),
      gap6: toBn("0"),
      gap7: toBn("0"),
      minMarginToIncentiviseLiquidators: "0",
    },
  },

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
      gap1: toBn("0"),
      gap2: toBn("0"),
      gap3: toBn("0"),
      gap4: toBn("0"),
      gap5: toBn("0"),
      gap6: toBn("0"),
      gap7: toBn("0"),
      minMarginToIncentiviseLiquidators: "0",
    },
  },

  aETH_v1: {
    rateOracle: "AaveRateOracle_WETH",
    tickSpacing: 60,
    cacheMaxAgeInSeconds: 21600,
    lookbackWindowInSeconds: 14 * 24 * 60 * 60,
    feeWad: "3000000000000000",
    liquidatorRewardWad: "50000000000000000",
    vammFeeProtocolWad: "0",
    isAlpha: false,
    lpMarginCap: "0",
    marginCalculatorParams: {
      apyUpperMultiplierWad: "1974826667256679168",
      apyLowerMultiplierWad: "726197072712028544",
      sigmaSquaredWad: "646635187772422",
      alphaWad: "281629589034832",
      betaWad: "6028545481714490",
      xiUpperWad: "19000000000000000000",
      xiLowerWad: "43000000000000000000",
      tMaxWad: "31536000000000000000000000",
      etaIMWad: "53797786535993240",
      etaLMWad: "1853547809191156",
      gap1: toBn("0"),
      gap2: toBn("0"),
      gap3: toBn("0"),
      gap4: toBn("0"),
      gap5: toBn("0"),
      gap6: toBn("0"),
      gap7: toBn("0"),
      minMarginToIncentiviseLiquidators: "0",
    },
  },

  aUSDC_v3: {
    rateOracle: "AaveRateOracle_USDC",
    tickSpacing: 60,
    cacheMaxAgeInSeconds: 21600,
    lookbackWindowInSeconds: 11 * 24 * 60 * 60,
    feeWad: "1000000000000000",
    liquidatorRewardWad: "50000000000000000",
    vammFeeProtocolWad: "0",
    isAlpha: false,
    lpMarginCap: "0",
    marginCalculatorParams: {
      apyUpperMultiplierWad: "1568817920813285120",
      apyLowerMultiplierWad: "555719495782932800",
      sigmaSquaredWad: "3722485600473",
      alphaWad: "123639945507482",
      betaWad: "4068528117338470",
      xiUpperWad: "19000000000000000000",
      xiLowerWad: "79000000000000000000",
      tMaxWad: "31536000000000000000000000", // one year
      etaIMWad: "2430131486103006",
      etaLMWad: "1002981596339646",
      gap1: toBn("0"),
      gap2: toBn("0"),
      gap3: toBn("0"),
      gap4: toBn("0"),
      gap5: toBn("0"),
      gap6: toBn("0"),
      gap7: toBn("0"),
      minMarginToIncentiviseLiquidators: "0",
    },
  },

  cDAI_v3: {
    rateOracle: "CompoundRateOracle_cDAI",
    tickSpacing: 60,
    cacheMaxAgeInSeconds: 21600,
    lookbackWindowInSeconds: 14 * 24 * 60 * 60,
    feeWad: "3000000000000000", // Higher fee than other stable pools, as a control
    liquidatorRewardWad: "50000000000000000",
    vammFeeProtocolWad: "0",
    isAlpha: false,
    lpMarginCap: "0",
    marginCalculatorParams: {
      apyUpperMultiplierWad: "1756586680374909952",
      apyLowerMultiplierWad: "596091280717391616",
      sigmaSquaredWad: "3512319449276",
      alphaWad: "69892747126753",
      betaWad: "7229259644700343",
      xiUpperWad: "19000000000000000000",
      xiLowerWad: "74000000000000000000",
      tMaxWad: "31536000000000000000000000", // one year
      etaIMWad: "3837509124374626",
      etaLMWad: "667659847053769",
      gap1: toBn("0"),
      gap2: toBn("0"),
      gap3: toBn("0"),
      gap4: toBn("0"),
      gap5: toBn("0"),
      gap6: toBn("0"),
      gap7: toBn("0"),
      minMarginToIncentiviseLiquidators: "0",
    },
  },

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
      gap1: toBn("0"),
      gap2: toBn("0"),
      gap3: toBn("0"),
      gap4: toBn("0"),
      gap5: toBn("0"),
      gap6: toBn("0"),
      gap7: toBn("0"),
      minMarginToIncentiviseLiquidators: "0",
    },
  },

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
      gap1: toBn("0"),
      gap2: toBn("0"),
      gap3: toBn("0"),
      gap4: toBn("0"),
      gap5: toBn("0"),
      gap6: toBn("0"),
      gap7: toBn("0"),
      minMarginToIncentiviseLiquidators: "0",
    },
  },

  aUSDC_v4: {
    rateOracle: "AaveRateOracle_USDC",
    tickSpacing: 60,
    cacheMaxAgeInSeconds: 21600,
    lookbackWindowInSeconds: 14 * 24 * 60 * 60,
    feeWad: "1000000000000000",
    liquidatorRewardWad: "50000000000000000",
    vammFeeProtocolWad: "0",
    isAlpha: false,
    lpMarginCap: "0",
    marginCalculatorParams: {
      apyUpperMultiplierWad: "1472772811738274816",
      apyLowerMultiplierWad: "977983094699320832",
      sigmaSquaredWad: "8497235331723",
      alphaWad: "908384053861263",
      betaWad: "45588476267718272",
      xiUpperWad: "27000000000000000000",
      xiLowerWad: "68000000000000000000",
      tMaxWad: "31536000000000000000000000",
      etaIMWad: "21998707884178096",
      etaLMWad: "2351322042619416",
      gap1: toBn("0"),
      gap2: toBn("0"),
      gap3: toBn("0"),
      gap4: toBn("0"),
      gap5: toBn("0"),
      gap6: toBn("0"),
      gap7: toBn("0"),
      minMarginToIncentiviseLiquidators: "0",
    },
  },

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
      gap1: toBn("0"),
      gap2: toBn("0"),
      gap3: toBn("0"),
      gap4: toBn("0"),
      gap5: toBn("0"),
      gap6: toBn("0"),
      gap7: toBn("0"),
      minMarginToIncentiviseLiquidators: "0",
    },
  },

  rETH_v2: {
    rateOracle: "RocketPoolRateOracle",
    tickSpacing: 60,
    cacheMaxAgeInSeconds: 21600,
    lookbackWindowInSeconds: 15 * 24 * 60 * 60,
    feeWad: "1000000000000000",
    liquidatorRewardWad: "50000000000000000",
    vammFeeProtocolWad: "0",
    isAlpha: false,
    lpMarginCap: "0",
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
      gap1: toBn("0"),
      gap2: toBn("0"),
      gap3: toBn("0"),
      gap4: toBn("0"),
      gap5: toBn("0"),
      gap6: toBn("0"),
      gap7: toBn("0"),
      minMarginToIncentiviseLiquidators: "0",
    },
  },

  stETH_v2: {
    rateOracle: "LidoRateOracle",
    tickSpacing: 60,
    cacheMaxAgeInSeconds: 21600,
    lookbackWindowInSeconds: 12 * 24 * 60 * 60,
    feeWad: "1000000000000000",
    liquidatorRewardWad: "50000000000000000",
    vammFeeProtocolWad: "0",
    isAlpha: false,
    lpMarginCap: "0",
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
      gap1: toBn("0"),
      gap2: toBn("0"),
      gap3: toBn("0"),
      gap4: toBn("0"),
      gap5: toBn("0"),
      gap6: toBn("0"),
      gap7: toBn("0"),
      minMarginToIncentiviseLiquidators: "0",
    },
  },

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
      gap1: toBn("0"),
      gap2: toBn("0"),
      gap3: toBn("0"),
      gap4: toBn("0"),
      gap5: toBn("0"),
      gap6: toBn("0"),
      gap7: toBn("0"),
      minMarginToIncentiviseLiquidators: "0",
    },
  },

  aUSDC_v6: {
    rateOracle: "AaveRateOracle_USDC",
    tickSpacing: 60,
    cacheMaxAgeInSeconds: 21600,
    lookbackWindowInSeconds: 13 * 24 * 60 * 60,
    feeWad: "1000000000000000",
    liquidatorRewardWad: "50000000000000000",
    vammFeeProtocolWad: "0",
    isAlpha: false,
    lpMarginCap: "0",
    marginCalculatorParams: {
      apyUpperMultiplierWad: "1846422218013480448",
      apyLowerMultiplierWad: "346530470700962688",
      sigmaSquaredWad: "18689794802466",
      alphaWad: "903078830426981",
      betaWad: "76617380352433504",
      xiUpperWad: "39000000000000000000",
      xiLowerWad: "50000000000000000000",
      tMaxWad: "31536000000000000000000000",
      etaIMWad: "2758376507449363",
      etaLMWad: "1229386689473627",
      gap1: toBn("0"),
      gap2: toBn("0"),
      gap3: toBn("0"),
      gap4: toBn("0"),
      gap5: toBn("0"),
      gap6: toBn("0"),
      gap7: toBn("0"),
      minMarginToIncentiviseLiquidators: "0",
    },
  },

  Goerli_cETH: {
    rateOracle: "CompoundRateOracle_cETH",
    tickSpacing: 60,
    cacheMaxAgeInSeconds: 21600,
    lookbackWindowInSeconds: 12 * 24 * 60 * 60,
    feeWad: "1000000000000000",
    liquidatorRewardWad: "50000000000000000",
    vammFeeProtocolWad: "0",
    isAlpha: false,
    lpMarginCap: "0",
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
      gap1: toBn("0"),
      gap2: toBn("0"),
      gap3: toBn("0"),
      gap4: toBn("0"),
      gap5: toBn("0"),
      gap6: toBn("0"),
      gap7: toBn("0"),
      minMarginToIncentiviseLiquidators: "0",
    },
  },

  Goerli_cUSDC: {
    rateOracle: "CompoundRateOracle_cUSDC",
    tickSpacing: 60,
    cacheMaxAgeInSeconds: 21600,
    lookbackWindowInSeconds: 10 * 24 * 60 * 60,
    feeWad: "1000000000000000",
    liquidatorRewardWad: "50000000000000000",
    vammFeeProtocolWad: "0",
    isAlpha: false,
    lpMarginCap: "0", // note USDT uses 6 decimals
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
      gap1: toBn("0"),
      gap2: toBn("0"),
      gap3: toBn("0"),
      gap4: toBn("0"),
      gap5: toBn("0"),
      gap6: toBn("0"),
      gap7: toBn("0"),
      minMarginToIncentiviseLiquidators: "0",
    },
  },

  Goerli_borrow_cUSDT: {
    rateOracle: "CompoundBorrowRateOracle_cUSDT",
    tickSpacing: 60,
    cacheMaxAgeInSeconds: 21600,
    lookbackWindowInSeconds: 1 * 24 * 60 * 60,
    feeWad: "1000000000000000",
    liquidatorRewardWad: "50000000000000000",
    vammFeeProtocolWad: "0",
    isAlpha: false,
    lpMarginCap: "0", // note USDT uses 6 decimals
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
      gap1: toBn("0"),
      gap2: toBn("0"),
      gap3: toBn("0"),
      gap4: toBn("0"),
      gap5: toBn("0"),
      gap6: toBn("0"),
      gap7: toBn("0"),
      minMarginToIncentiviseLiquidators: "0",
    },
  },

  default: {
    rateOracle: "MockRateOracle",
    tickSpacing: 60,
    cacheMaxAgeInSeconds: 21600,
    lookbackWindowInSeconds: 21600,
    feeWad: "3000000000000000",
    liquidatorRewardWad: "50000000000000000",
    vammFeeProtocolWad: "0",
    isAlpha: false,
    lpMarginCap: "0",
    marginCalculatorParams: {
      apyUpperMultiplierWad: "2624177575615731712",
      apyLowerMultiplierWad: "264566723394122112",
      sigmaSquaredWad: "2009996524605",
      alphaWad: "2864070730067",
      betaWad: "510867739246715",
      xiUpperWad: "25000000000000000000",
      xiLowerWad: "100000000000000000000",
      tMaxWad: "31536000000000000000000000",
      etaIMWad: "2810036282184202",
      etaLMWad: "1206112129925342",
      gap1: toBn("0"),
      gap2: toBn("0"),
      gap3: toBn("0"),
      gap4: toBn("0"),
      gap5: toBn("0"),
      gap6: toBn("0"),
      gap7: toBn("0"),
      minMarginToIncentiviseLiquidators: "0",
    },
  },
};
