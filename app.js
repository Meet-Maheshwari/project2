const express = require("express");
const app = express();

app.listen(8080, () => {
    console.log("app is listening on port 8080");
});

app.use("/", (req, res) => {
    res.send("Hello, Welcome to my project2");
})

app.get("/home", (req, res) => {
    res.send("Hello, this is New page");
})