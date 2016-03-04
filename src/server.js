import { List } from 'immutable';
import { createServer } from './util/server';
import config from '../config.server';
import webpackConfig from '../webpack.config';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import fs from 'fs';
import express from 'express';
import axios from 'axios';

dotenv.load();

const ENV = process.env.NODE_ENV;

function getAuthorizationHeaders() {
    return {
        headers: {
            'x-apikey': config.restdb.key
        }
    };
};

var headers = getAuthorizationHeaders();

createServer(config, webpackConfig, (app) => {
    app.use(bodyParser({limit: '50mb'}));
    app.use(express.static('web'));

    app.get('/api/discs', function (req, res) {
        axios.get('https://testdb-8e20.restdb.io/rest/discs', headers).then(function (response) {
            res.charSet = 'utf8';
            let arr = [
                {material: "lus"},
                {material: "baz"}
            ];

            res.status(200).json(response);
        });
    });

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
