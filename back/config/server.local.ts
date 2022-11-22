import {ServerConfig} from './types/server.type'
const config:ServerConfig = {
    port: 0, //port du serveur
    host: "localhost", //host du serveur
    cors: {
        origin: ["*"],
        preflightContinue: false,
        methods: ["POST", "GET", "PUT", "PATCH", "DELETE", "OPTIONS"]
    }
}
export default config;

