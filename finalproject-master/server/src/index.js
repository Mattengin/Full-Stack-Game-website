import { join } from 'path';
import express from 'express';
import morgan from 'morgan';
import cors from "cors";
import routes from './routes';
import configurePassport from './config/passport';
import stateRouting from "./middleware/routing.mw";

const http = require('http')
let socketList = [];

const CLIENT_PATH = join(__dirname, '../../client');

let app = express();


app.use(cors());
app.use(morgan('dev'));
app.use(express.static(CLIENT_PATH));
app.use(express.json());

configurePassport(app);

app.use('/api', routes);

app.use(stateRouting);

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
