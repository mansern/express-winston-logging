/**
 * @name index.js
 * @description The entry point of the API server.
 *
 * @author dbarenholz
 * @version 1.0.0
 */
const { createServer } = require("http");
const readline = require("readline");
const rl = readline.createInterface(process.stdin);
const app = require("./app");
const { BACKEND_PORT } = require("./config/env.config.js");
const winston = require("./config/winston");

const server = createServer(app);
server.listen(BACKEND_PORT, () => {
  winston.info(`Server is listening on port ${BACKEND_PORT}`);

  // Exit application when "stop" is typed.
  rl.on("line", (line) => {
    if (line.match(/^stop?$/i)) {
      process.exit(0);
    }
  });
});
