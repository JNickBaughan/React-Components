import express, { Express } from "express";
import bodyParser from "body-parser";

let PORT = 3000;

let server: Express = express();

const middleware = [
  express.static("dist"),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
];

server.use(...middleware);

server.get("/", (_: express.Request, res: express.Response) => {
  res.status(200).send("test");
});

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
