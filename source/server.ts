import bodyParser from "body-parser";
import express, { Router } from "express";
import logging from "./config/logging";
import http from 'http'
import config from "./config/config";
import routerSample from './routers/sample'

const NAMESPACE = 'server';
const router = express()

router.use((req, res, next) => {
  logging.info(NAMESPACE, `METHOD - [${req.method}, URL - ${req.url}, IP ${req.socket.remoteAddress}]`);

  res.on('finish', () => {
    logging.info(NAMESPACE, `METHOD - [${req.method}, URL - ${req.url}, IP ${req.socket.remoteAddress}]`);
  })
  next();
});

router.use(express.json())
router.use(express.urlencoded({ extended: true }))
router.use('/sample', routerSample)


const httpServer = http.createServer(router);

httpServer.listen(config.port, () => logging.info(NAMESPACE, "Server is runing on " + config.hostName + ":" + config.port))