import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import logger from './core/logger/app-logger'
import morgan from 'morgan'
import config from './core/config/config.dev'
import movie from './routes/movie.route'
import connectToDB from './db/connect'

logger.stream = {
    write: function(message, encoding) {
        logger.info(message);
    }
};

connectToDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev", { "stream": logger.stream }));

app.use('/movies', movie);

app.use((req, res) => {
    res.sendStatus(404);
});

const port = config.serverPort;
app.listen(port, () => {
    logger.info('server started - ', port);
});
