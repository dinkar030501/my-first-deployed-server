const express = require("express");
const { readFile } = require("fs").promises;

const app = express();

app.get("/", async (request, response) => {
  try {
    response.send(await readFile("./index.html", "utf8"));
  } catch (err) {
    response.status(500).send("Sorry, there is some error 😭");
  }
});

app.listen(process.env.PORT || 3000, () =>
  console.log("App avaiable on http://localhost:3000")
);
