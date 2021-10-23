"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./polyfill");
var PaymentMethods_1 = __importDefault(require("./PaymentMethods"));
var PaymentIntents_1 = __importDefault(require("./PaymentIntents"));
var Payments_1 = __importDefault(require("./Payments"));
var Sources_1 = __importDefault(require("./Sources"));
var Webhooks_1 = __importDefault(require("./Webhooks"));
var Paymongo = /** @class */ (function () {
    function Paymongo(secret) {
        if (!secret || secret.length === 0)
            throw "API key is required";
        this.paymentMethods = new PaymentMethods_1.default(secret);
        this.paymentIntents = new PaymentIntents_1.default(secret);
        this.payments = new Payments_1.default(secret);
        this.sources = new Sources_1.default(secret);
        this.webhooks = new Webhooks_1.default(secret);
    }
    return Paymongo;
}());
exports.default = Paymongo;
//# sourceMappingURL=index.js.map