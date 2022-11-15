import appRoot from 'app-root-path'
import { createLogger, transports } from "winston"
import path from 'path'

// define the custom settings for each transport (file, console)
const options = {
  file: {
    level: "info",
    filename: path.join(appRoot.toString(), "logs", "main.log"),
    handleExceptions: true,
    json: true,
    maxsize: 52428800, // 50MB
    maxFiles: 200,
    colorize: true,
  },
  console: {
    level: "debug",
    handleExceptions: true,
    json: false,
    colorize: true,
  },
}

// instantiate a new Winston Logger with the settings defined above
// const logger = winston.createLogger({
//   transports: [new winston.transports.File(options.file), new winston.transports.Console(options.console)],
//   exitOnError: false, // do not exit on handled exceptions
// })

const logger = createLogger({
  transports: [new transports.File(options.file), new transports.Console(options.console)],
  exitOnError: false, // do not exit on handled exceptions
});

// create a stream object with a "write" function that will be used by `morgan`
logger.stream = {
  write: function (message) {
    logger.info(message)
  },
}

export default logger
