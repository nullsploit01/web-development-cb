import express from "express";

const app = express();
const port = 5555;

app.get("/", (req, res) => {
  return res.send("server says hello!");
});

app.get("/hello", (req, res) => {
  return res.send("server says hello back!");
});

app.listen(port, () => {
  console.log("server running on port", port, `url: http://localhost:${port}/`);
});
