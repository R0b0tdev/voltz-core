// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
import "../aave/IAaveV2LendingPool.sol";
import "../rate_oracles/IRateOracle.sol";

interface IAaveRateOracle is IRateOracle {

    function aaveLendingPool() external returns (IAaveV2LendingPool);

    function writeRate(address underlying) external;

    function getRateFromTo(
        address underlying,
        uint256 from,
        uint256 to
    ) external returns (uint256);

    function getReserveNormalizedIncome(address underlying) external view returns(uint256);

}
