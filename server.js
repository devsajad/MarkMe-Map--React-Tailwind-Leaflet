// server.js
import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("./src/data/data.json");
const middlewares = jsonServer.defaults();

// Enable CORS
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running with CORS support");
});
