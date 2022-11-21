import {ServerConfig} from "./types/server.type";

const config:ServerConfig = {
    port: Number.parseInt(process.env.PORT!),
    host: process.env.HOST || "example.com",
    cors: {
        origin: ["*"],
        preflightContinue: false,
        methods: ["POST", "GET", "PUT", "PATCH", "DELETE", "OPTIONS"]
    }
}
export default config