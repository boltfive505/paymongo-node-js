"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fetch_1 = require("../utils/fetch");
var Payments = /** @class */ (function () {
    function Payments(secret) {
        var _this = this;
        this.secret = "";
        this.path = "/payments";
        this.create = function (data) {
            return (0, fetch_1.makeRequest)(_this.path, "POST", _this.secret, data);
        };
        this.secret = secret;
    }
    Payments.prototype.retrieve = function (id) {
        if (!id || id.length === 0)
            throw "Payment id is required";
        return (0, fetch_1.makeRequest)(this.path + "/" + id, "GET", this.secret, {});
    };
    Payments.prototype.listAll = function (before, after, limit) {
        if (limit === void 0) { limit = 10; }
        return (0, fetch_1.makeRequest)(this.path + "?before=" + before + "&after=" + after + "&limit=" + limit, "GET", this.secret, {});
    };
    return Payments;
}());
exports.default = Payments;
//# sourceMappingURL=payments.js.map