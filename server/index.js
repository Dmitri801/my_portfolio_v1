const express = require("express");
const next = require("next");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/file/download", function(req, res) {
      var file = __dirname + "/resume.pdf";
      res.download(file);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });
    server.listen(port, err => {
      if (err) throw err;
      console.log(`App Up On Port: ${port}`);
    });
  })
  .catch(e => {
    console.log(e.stack);
    process.exit(1);
  });
