export type LoggerConfig = {
    console: {
        level: string,
        handleExceptions: boolean,
        json: boolean,
        colorize: boolean
    },
    file: {
        level: string,
        filename: string,
        handleExceptions: boolean,
        json: boolean,
        maxsize: number,
        maxFiles: number,
        colorize: boolean
    }
}