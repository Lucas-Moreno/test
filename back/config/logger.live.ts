import {LoggerConfig} from "./types/logger.type";

const config:LoggerConfig = {
    console: {
        level: process.env.LOG_LEVEL || "info",
        handleExceptions: true,
        json: false,
        colorize: true
    },
    file: {
        level: process.env.LOG_LEVEL || "info",
        filename: process.env.LOG_FILE_PATH || "../logs/app.log",
        handleExceptions: true,
        json: true,
        maxsize: Number.parseInt(process.env.MAX_LOG_FILE_SIZE!) || 10485760,
        maxFiles: Number.parseInt(process.env.MAX_LOG_FILE_NUMBER!) || 10,
        colorize: true
    }
}
export default config