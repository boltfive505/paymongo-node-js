"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fetch_1 = require("../utils/fetch");
var PaymentMethods = /** @class */ (function () {
    function PaymentMethods(secret) {
        this.secret = "";
        this.path = "/payment_methods";
        this.secret = secret;
    }
    PaymentMethods.prototype.create = function (data) {
        return (0, fetch_1.makeRequest)(this.path, "POST", this.secret, data);
    };
    PaymentMethods.prototype.retrieve = function (id) {
        if (!id || id.length === 0)
            throw "PaymentMethod id is required";
        return (0, fetch_1.makeRequest)(this.path + "/" + id, "GET", this.secret, {});
    };
    return PaymentMethods;
}());
exports.default = PaymentMethods;
//# sourceMappingURL=payment-methods.js.map