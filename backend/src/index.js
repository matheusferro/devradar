const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const http = require('http');


const app = express();
const { setupWebsocket } = require('./websocket');
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://matheus:Obz4eOvo20FM2P1V@cluster0-m5d3k.mongodb.net/oministack?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);