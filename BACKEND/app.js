import express from "express"
import http from "http"
import serverConfig from "./src/framework/webServer/server.js"
import getDb from "./src/framework/databse/connection.js"
import routes from "./src/framework/webServer/routes/index.js"
import config from "./src/config/config.js"
import expressConfig from "./src/framework/webServer/express.js"

const app=express()
const server=http.createServer(app);



getDb(config);
expressConfig(app);
serverConfig(app);
routes(app,express);

serverConfig(server,config).startServer();