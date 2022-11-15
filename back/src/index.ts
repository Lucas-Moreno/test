import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import routes from "./routes/routes"
import db from './models/db'
import log from "./logger/log"
import config from 'config'
import winston from './config/config'

const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
app.use("/public", express.static(__dirname + "/public"))

const port = config.get("port") as number
const host = config.get("host") as string
const front_url = config.get("front_url") as string

app.options(front_url, cors())

app.use(
  cors({
    origin: front_url,
    credentials: true,
  })
)


app.use({ stream: winston.stream })

app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, host, () => {
  log.info(`Server listing at http://${host}:${port}`);

  db();

  routes(app);
});

module.exports = app