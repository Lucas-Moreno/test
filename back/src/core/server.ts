import express from "express"
import localConfig from "../../config/server.local"
import liveConfig from "../../config/server.live"
// import logger from "../utils/logger";
import routesContainer from "~/core/controllerContainer";
import middlewareContainer from "~/core/middlewareContainer";
import cors from "cors";


export class Server {
    private readonly app:express.Express;

    public static server: Server

    constructor(){
        this.app = express()
        this.registerControllers(this.app)
        this.registerMiddlewares(this.app)
    }

    private registerControllers(app:express.Express){
        routesContainer.forEach(controller => app.use(controller.basePath, controller.router))
    }

    private registerMiddlewares(app:express.Express){
        app.use(express.json())
        app.use(cors(localConfig.cors))
        middlewareContainer.forEach(middleware => app.use(middleware.basePath, middleware.middleware))
    }

    private static getServerInstance(){
        if (!this.server){
            this.server = new Server()
        }
        return this.server
    }

    public static startServer(){
        const server = this.getServerInstance().app
        if (process.env.NODE_ENV !== "prod"){
            server.listen(localConfig.port)
            logger.info(`Server has started successfully on port: ${localConfig.port} and host: ${localConfig.host}`)
        } else {
            server.listen(liveConfig.port, liveConfig.host)
            logger.info(`Server has started successfully on port: ${liveConfig.port} and host: ${liveConfig.host}`)
        }
    }
}

