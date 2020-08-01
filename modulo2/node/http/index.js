import servidor from "http";

servidor
  .createServer((req, res) => {
    if (req.method === "GET" && req.url === "/teste") {
      res.write("Get / executado com sucesso");
    } else {
      res.write("Hello World!");
    }
    res.end();
  })
  .listen(8020);
