"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logging_1 = __importDefault(require("../config/logging"));
var NAMESPACE = 'Sample controller';
var sampleHelthCheck = function (req, res, next) {
    logging_1.default.info(NAMESPACE, "Sample route has been called");
    return res.status(200).json({ message: 'pong' });
};
exports.default = { sampleHelthCheck: sampleHelthCheck };