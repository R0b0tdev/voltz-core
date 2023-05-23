const sofrPriceFeedAddresses: {
  [key: string]: { sofrIndexValue: string; sofrIndexEffectiveDate: string };
} = {
  avalancheFuji: {
    sofrIndexValue: "0x12bd99a29fA3f24A857288DcCDE922D8f498c737",
    sofrIndexEffectiveDate: "0x93CF2aF3071D10131F063f69AAb468a7F2279c52",
  },
};

export const getSofrIndexValueAddress = (networkName: string): string => {
  if (!Object.keys(sofrPriceFeedAddresses).includes(networkName)) {
    throw new Error(
      `Unrecognized error. Check that ${networkName} is added to sofr price feed addresses!`
    );
  }

  return sofrPriceFeedAddresses[networkName].sofrIndexValue;
};

export const getSofrIndexEffectiveDateAddress = (
  networkName: string
): string => {
  if (!Object.keys(sofrPriceFeedAddresses).includes(networkName)) {
    throw new Error(
      `Unrecognized error. Check that ${networkName} is added to sofr price feed addresses!`
    );
  }

  return sofrPriceFeedAddresses[networkName].sofrIndexEffectiveDate;
};
