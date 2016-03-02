import { List } from 'immutable';
import { createServer } from './util/server';
import config from '../config.server';
import webpackConfig from '../webpack.config';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import Immutable from 'immutable';
import fs from 'fs';
import express from 'express';

dotenv.load();

const ENV = process.env.NODE_ENV;

createServer(config, webpackConfig, (app) => {
    app.use(bodyParser({limit: '50mb'}));
    app.use(express.static('web'));

    function handleError(err, res) {
        if(err) {
            console.log("Request failed: " + err);

            let result = {
                status: false,
                message: 'Request failed due to server error'
            };

            res.charSet = 'utf8';
            res.status(500).json(result);
        }
    }
});
