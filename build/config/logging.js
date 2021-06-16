"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getTimeStamp = function () {
    return new Date().toISOString();
};
var info = function (namespace, message, object) {
    console.info("[" + getTimeStamp() + "] [INFO] [" + namespace + " " + message + "]", object);
};
exports.default = { info: info };
