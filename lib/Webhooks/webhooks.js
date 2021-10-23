"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fetch_1 = require("../utils/fetch");
var Webhooks = /** @class */ (function () {
    function Webhooks(secret) {
        this.secret = "";
        this.path = "/webhooks";
        this.secret = secret;
    }
    Webhooks.prototype.createWebhook = function (data) {
        return (0, fetch_1.makeRequest)(this.path, "POST", this.secret, data);
    };
    Webhooks.prototype.retrieveWebhook = function (id) {
        if (!id || id.length === 0)
            throw "Webhooks id is required";
        return (0, fetch_1.makeRequest)(this.path + "/" + id, "GET", this.secret, {});
    };
    Webhooks.prototype.enableWebhook = function (id) {
        if (!id || id.length === 0)
            throw "Webhooks id is required";
        return (0, fetch_1.makeRequest)(this.path + "/" + id + "/enable", "POST", this.secret, {});
    };
    Webhooks.prototype.disableWebhook = function (id) {
        if (!id || id.length === 0)
            throw "Webhooks id is required";
        return (0, fetch_1.makeRequest)(this.path + "/" + id + "/disable", "POST", this.secret, {});
    };
    Webhooks.prototype.updateWebhook = function (id, data) {
        if (!id || id.length === 0)
            throw "Webhooks id is required";
        return (0, fetch_1.makeRequest)(this.path + "/" + id, "PUT", this.secret, data);
    };
    Webhooks.prototype.listAllWebhooks = function () {
        return (0, fetch_1.makeRequest)(this.path, "GET", this.secret, {});
    };
    return Webhooks;
}());
exports.default = Webhooks;
//# sourceMappingURL=webhooks.js.map