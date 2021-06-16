"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logging_1 = __importDefault(require("./config/logging"));
var http_1 = __importDefault(require("http"));
var config_1 = __importDefault(require("./config/config"));
var sample_1 = __importDefault(require("./routers/sample"));
var NAMESPACE = 'server';
var router = express_1.default();
router.use(function (req, res, next) {
    logging_1.default.info(NAMESPACE, "METHOD - [" + req.method + ", URL - " + req.url + ", IP " + req.socket.remoteAddress + "]");
    res.on('finish', function () {
        logging_1.default.info(NAMESPACE, "METHOD - [" + req.method + ", URL - " + req.url + ", IP " + req.socket.remoteAddress + "]");
    });
    next();
});
router.use(express_1.default.json());
router.use(express_1.default.urlencoded({ extended: true }));
router.use('/sample', sample_1.default);
var httpServer = http_1.default.createServer(router);
httpServer.listen(config_1.default.port, function () { return logging_1.default.info(NAMESPACE, "Server is runing on " + config_1.default.hostName + ":" + config_1.default.port); });
