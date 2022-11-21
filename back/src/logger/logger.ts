import winston, {format} from "winston"
import loggerLocalOptions from "../../config/logger.local"
import loggerLiveOptions from "../../config/logger.live"
const {combine, timestamp, printf} = format
const logFormat = printf(({timestamp, level, message, meta}) => {
    return `${timestamp}--${level.toUpperCase()}--${message}${meta? "--"+JSON.stringify(meta): ''}`
})

class Logger {

    private logger: winston.Logger

    private static instance: Logger

    private constructor() {
        if (process.env.NODE_ENV !== "prod"){
            this.logger = winston.createLogger({
                transports: [
                    new winston.transports.Console({
                        level: loggerLocalOptions.console.level,
                        handleExceptions: loggerLocalOptions.console.handleExceptions,
                        format: combine(
                            timestamp(),
                            logFormat
                        )
                    }),
                    new winston.transports.File({
                        level: loggerLocalOptions.file.level,
                        filename: loggerLocalOptions.file.filename,
                        maxsize: loggerLocalOptions.file.maxsize,
                        handleExceptions: loggerLocalOptions.file.handleExceptions,
                        format: combine(
                            timestamp(),
                            logFormat
                        )
                    })
                ]
            })
        } else {
            this.logger = winston.createLogger({
                transports: [
                    new winston.transports.Console({
                        level: loggerLiveOptions.console.level,
                        handleExceptions: loggerLiveOptions.console.handleExceptions,
                        format: combine(
                            timestamp(),
                            logFormat
                        )
                    }),
                    new winston.transports.File({
                        level: loggerLiveOptions.file.level,
                        filename: loggerLiveOptions.file.filename,
                        maxsize: loggerLiveOptions.file.maxsize,
                        handleExceptions: loggerLiveOptions.file.handleExceptions,
                        format: combine(
                            timestamp(),
                            logFormat
                        )
                    })
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