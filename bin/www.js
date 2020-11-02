const app = require('../app');
const express = require('express');
const http = require('http');
const config = require('config');
const { type } = require('os');

let port = process.env.PORT || config.get('PORT');
const server = http.createServer(app);
server.listen(port);
server.on('listening', function() {
    let address = server.address();
    let uri = typeof address === 'string' ? address : `http://localhost:${address.port}`;
    console.log("Listening on " + uri);
    
})