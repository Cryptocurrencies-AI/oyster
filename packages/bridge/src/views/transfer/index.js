"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferView = void 0;
const react_1 = __importDefault(require("react"));
require("./index.less");
const Transfer_1 = require("../../components/Transfer");
const TransferView = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "flexColumn transfer-bg", style: { flex: 1, minHeight: '90vh' } },
            react_1.default.createElement(Transfer_1.Transfer, null))));
};
exports.TransferView = TransferView;
//# sourceMappingURL=index.js.map