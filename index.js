const jsonServer = require('json-server');  // Importing the json-server library to create a mock REST API server
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;  // choosing the port for the server to listen on, defaulting to 8080 if not specified in environment variables

server.use(middlewares);      
server.use(router);

server.listen(port); // Starting the server and listening on the specified port
 