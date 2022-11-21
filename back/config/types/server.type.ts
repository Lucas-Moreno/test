export type ServerConfig = {
    host: string,
    port: number,
    cors?: {
        origin: string[],
        preflightContinue: boolean,
        methods: string[]
    }
}