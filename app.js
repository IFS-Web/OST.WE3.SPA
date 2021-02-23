import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';

import path from 'path';
import logger from 'morgan';
import cors from 'cors';

import {config} from './config';

import {raceCounterRouter} from './routes/raceCounterRouter';

const publicPath = path.resolve('./public');
const app = express();
app.use(session(config.session));

/**
 * Register node middlewares
 */
app.use(logger('dev'));
app.use(bodyParser.json());

app.use(cors(config.corsOptions));

// route static html/js/css files
app.use(express.static(publicPath));

// register REST routes
app.use('/api', raceCounterRouter);

app.use(function(req, res, next) {
  res.sendFile(path.resolve(publicPath, 'index.html'));
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.statusCode || 500);
  res.send({data: err.data, message: err.message});
});

export default app;
