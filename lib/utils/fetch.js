"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRequest = void 0;
var PAYMONGO_API_URL = "https://api.paymongo.com/v1";
var makeHeaders = function (secret) {
    var basic = secret + ":";
    return {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(basic),
    };
};
var makeRequest = function (path, method, secret, data) {
    if (!path || path.length === 0)
        throw "API endpoint required";
    if (Object.entries(data).length === 0)
        throw "Data is required";
    var promise = new Promise(function (resolve, reject) {
        var options = {
            method: method,
            headers: makeHeaders(secret),
            body: JSON.stringify(data),
        };
        var url = PAYMONGO_API_URL.concat(path);
        fetch(url, options)
            .then(function (response) { return response.json(); })
            .then(function (response) { return resolve(response); })
            .catch(function (error) { return reject(error); });
    });
    return promise;
};
exports.makeRequest = makeRequest;
//# sourceMappingURL=fetch.js.map