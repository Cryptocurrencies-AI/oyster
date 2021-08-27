"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletConnectWalletAdapter = void 0;
const eventemitter3_1 = __importDefault(require("eventemitter3"));
const ethers_1 = require("ethers");
const web3_provider_1 = __importDefault(require("@walletconnect/web3-provider"));
class WalletConnectWalletAdapter extends eventemitter3_1.default {
    constructor() {
        super();
        this._publicKey = null;
        this._provider = null;
        this._walletProvider = null;
        this._accounts = [];
        this._chainID = 0;
        this._onProcess = false;
        this.connect = this.connect.bind(this);
    }
    get publicKey() {
        return this._publicKey;
    }
    get provider() {
        return this._provider;
    }
    get accounts() {
        return this._accounts;
    }
    get chainID() {
        return this._chainID;
    }
    async signTransaction(transaction) {
        return this._provider.signTransaction(transaction);
    }
    async signAllTransactions(transactions) {
        return transactions;
    }
    connect() {
        if (this._onProcess) {
            return;
        }
        this._onProcess = true;
        //  Create WalletConnect Provider
        const walletConnectProvider = new web3_provider_1.default({
            infuraId: '535ab8649e9f40cface13cbded7d647e',
        });
        walletConnectProvider
            .enable()
            .then(() => {
            const provider = new ethers_1.ethers.providers.Web3Provider(walletConnectProvider);
            const signer = provider.getSigner();
            signer.getAddress().then(account => {
                this._accounts = [account];
                provider.getNetwork().then(network => {
                    this._chainID = network.chainId;
                    this._provider = provider;
                    this._walletProvider = walletConnectProvider;
                    this.emit('connect');
                });
            });
            // @ts-ignore
            walletConnectProvider.on('disconnect', (code, reason) => {
                this.emit('disconnect', { code, reason });
            });
            // @ts-ignore
            walletConnectProvider.on('accountsChanged', (accounts) => {
                this.emit('accountsChanged', accounts);
            });
            // @ts-ignore
            walletConnectProvider.on('chainChanged', (chainId) => {
                this.emit('chainChanged', chainId);
            });
        })
            .catch(() => {
            this.disconnect();
        })
            .finally(() => {
            this._onProcess = false;
        });
    }
    disconnect() {
        if (this._provider) {
            this._publicKey = null;
            this._walletProvider.disconnect();
            this.emit('disconnect');
        }
    }
}
exports.WalletConnectWalletAdapter = WalletConnectWalletAdapter;
//# sourceMappingURL=wallet-connect.js.map