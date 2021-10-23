"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fetch_1 = require("../utils/fetch");
var Sources = /** @class */ (function () {
    function Sources(secret) {
        this.secret = "";
        this.path = "/sources";
        this.secret = secret;
    }
    Sources.prototype.create = function (data) {
        return (0, fetch_1.makeRequest)(this.path, "POST", this.secret, data);
    };
    Sources.prototype.retrieve = function (id) {
        if (!id || id.length === 0)
            throw "Sources id is required";
        return (0, fetch_1.makeRequest)(this.path + "/" + id, "GET", this.secret, {});
    };
    return Sources;
}());
exports.default = Sources;
//# sourceMappingURL=sources.js.map