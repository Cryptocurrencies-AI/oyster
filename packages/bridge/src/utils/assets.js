"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterModalEthTokens = exports.filterModalSolTokens = exports.chainToName = exports.ASSET_CHAIN = exports.getAssetAmountInUSD = exports.getAssetTokenSymbol = exports.getAssetName = void 0;
const common_1 = require("@oyster/common");
const getAssetName = (parsedAssetAddress, assetChain, solanaTokens, ethTokens) => {
    if (assetChain === ASSET_CHAIN.Solana)
        return common_1.getVerboseTokenName(solanaTokens, parsedAssetAddress);
    else
        return common_1.getVerboseTokenName(ethTokens, `0x${parsedAssetAddress}`);
};
exports.getAssetName = getAssetName;
const getAssetTokenSymbol = (parsedAssetAddress, assetChain, solanaTokens, ethTokens) => {
    if (assetChain === ASSET_CHAIN.Solana)
        return common_1.getTokenName(solanaTokens, parsedAssetAddress);
    else
        return common_1.getTokenName(ethTokens, `0x${parsedAssetAddress}`);
};
exports.getAssetTokenSymbol = getAssetTokenSymbol;
const getAssetAmountInUSD = (amount, parsedAssetAddress, assetChain) => {
    return amount;
};
exports.getAssetAmountInUSD = getAssetAmountInUSD;
var ASSET_CHAIN;
(function (ASSET_CHAIN) {
    ASSET_CHAIN[ASSET_CHAIN["Solana"] = 1] = "Solana";
    ASSET_CHAIN[ASSET_CHAIN["Ethereum"] = 2] = "Ethereum";
})(ASSET_CHAIN = exports.ASSET_CHAIN || (exports.ASSET_CHAIN = {}));
const CHAIN_NAME = {
    [ASSET_CHAIN.Solana]: 'Solana',
    [ASSET_CHAIN.Ethereum]: 'Ethereum',
};
const chainToName = (chain) => {
    return CHAIN_NAME[chain || ASSET_CHAIN.Ethereum];
};
exports.chainToName = chainToName;
const EXCLUDED_COMMON_TOKENS = ['usdt', 'usdc'];
const EXCLUDED_SPL_TOKENS = [
    'sol',
    'srm',
    'ray',
    'oxy',
    'mer',
    'maps',
    ...EXCLUDED_COMMON_TOKENS,
];
const filterModalSolTokens = (tokens) => {
    return tokens.filter(token => EXCLUDED_SPL_TOKENS.indexOf(token.symbol.toLowerCase()) < 0 &&
        !token.name.includes('(Sollet)'));
};
exports.filterModalSolTokens = filterModalSolTokens;
const EXCLUDED_ETH_TOKENS = [...EXCLUDED_COMMON_TOKENS];
const filterModalEthTokens = (tokens) => {
    return tokens.filter(token => EXCLUDED_ETH_TOKENS.indexOf(token.symbol.toLowerCase()) < 0);
};
exports.filterModalEthTokens = filterModalEthTokens;
//# sourceMappingURL=assets.js.map