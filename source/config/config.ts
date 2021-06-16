import dotenv from 'dotenv'


dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT || 1337;
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';

const config = {
  hostName: SERVER_HOSTNAME,
  port: SERVER_PORT
}

export default config;