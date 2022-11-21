import winston from "winston"
import loggerLocalOptions from "../../config/logger.local"
import loggerLiveOptions from "../../config/logger.live"

class Logger {

    private logger: winston.Logger

    private static instance: Logger

    private constructor() {
        if (process.env.NODE_ENV !== "prod"){
            this.logger = winston.createLogger({
                transports: [
                    new winston.transports.Console(loggerLocalOptions.console),
                    new winston.transports.File(loggerLocalOptions.file)
                ]
            })
        } else {
            this.logger = winston.createLogger({
                transports: [
                    new winston.transports.Console(loggerLiveOptions.console),
                    new winston.transports.File(loggerLiveOptions.file)
                ]
            })
        }
    }

    private static getLoggerInstance(): Logger{
        if (!Logger.instance){
            this.instance = new Logger()
        }
        return this.instance
    }

    public static getLogger(): winston.Logger{
        return this.getLoggerInstance().logger
    }
}
export default Logger.getLogger()