const express = require('express');
const path = require("path");
const open = require("open");
const webpack = require('webpack');
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3131;

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' +port);
    }
});
