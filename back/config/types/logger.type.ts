export type LoggerConfig = {
    console: {
        level: string,
        handleExceptions: boolean,
        colorize: boolean
    },
    file: {
        level: string,
        filename: string,
        handleExceptions: boolean,
        maxsize: number,
        maxFiles: number,
        colorize: boolean
    }
}