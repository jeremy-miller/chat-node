const express = require("express"); // eslint-disable-line import/newline-after-import
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const routes = require("./lib/routes");
const sockets = require("./lib/sockets")(io);
const path = require("path");

require("dotenv").config();

app.use("/static", express.static(path.join(__dirname, "/static"))); // expose static files

app.get("/", routes.base);

io.on("connection", sockets.onConnect);

http.listen(process.env.NODE_PORT, () =>
  console.log(`server started at http://localhost:${process.env.NODE_PORT}`)
);
