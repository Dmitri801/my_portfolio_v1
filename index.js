// const { createReadStream } = require("fs");
// const next = require("next");
// const express = require("express");

// const bodyParser = require("body-parser");
// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();
// const port = 3000;
// module.exports = async (req, res) => {
//   return app.prepare().then(() => {
//     const server = express();

//     server
//       .use(bodyParser.json())
//       .get("/sw.js", (req, res) => {
//         const parsedUrl = parse(req.url, true);
//         const { pathname } = parsedUrl;
//         if (pathname === "/sw.js") {
//           res.setHeader("content-type", "text/javascript");
//           createReadStream("./offline/serviceWorker.js").pipe(res);
//         }
//       })
//       .get("/file/download", function(req, res) {
//         var file = __dirname + "/resume.pdf";
//         res.download(file);
//       })
//       .get("*", (req, res) => {
//         return handle(req, res);
//       })

//       .listen(port, err => console.log(err || `Up On Port:${port}`));
//   });
// };
