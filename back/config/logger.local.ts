import {LoggerConfig} from "./types/logger.type";

const config:LoggerConfig = {
    console: {
        level: "", //niveau de log
        handleExceptions: true, //le logger doit-il catcher les exceptions
        json: true, // Formatage en json
        colorize: true // colorisation des logs
    },
    file: {
        level: "", //niveau de log
        filename: "", //chemin du fichier de log
        handleExceptions: true, //le logger doit-il catcher les exceptions pour les fichiers
        json: true, // Formatage en json
        maxsize: 5242880, // Taille max du fichier en bytes
        maxFiles: 5, //Nombre max de fichiers dans le dossier de log
        colorize: true // colorisation des logs
    }
}
export default config