"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fetch_1 = require("../utils/fetch");
var PaymentIntents = /** @class */ (function () {
    function PaymentIntents(secret) {
        this.secret = "";
        this.path = "/payment_intents";
        this.secret = secret;
    }
    PaymentIntents.prototype.create = function (data) {
        return (0, fetch_1.makeRequest)(this.path, "POST", this.secret, data);
    };
    PaymentIntents.prototype.retrieve = function (id) {
        if (!id || id.length === 0)
            throw "PaymentIntent id is required";
        return (0, fetch_1.makeRequest)(this.path + "/" + id, "GET", this.secret, {});
    };
    PaymentIntents.prototype.attach = function (paymentMethodId, data) {
        if (!paymentMethodId || paymentMethodId.length === 0)
            throw "PaymentMethod id is required";
        return (0, fetch_1.makeRequest)(this.path + "/" + paymentMethodId + "/attach", "POST", this.secret, data);
    };
    return PaymentIntents;
}());
exports.default = PaymentIntents;
//# sourceMappingURL=payment-intents.js.map