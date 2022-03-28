var express = require("express")
require('dotenv').config();
var app = express();
let host = process.env.host || "undefined"
console.log("hellooooooooo")
app.get("/", (req, res)=> {
    res.status(200).send({
        message: "Hello",
        envHost: host,
        envLinh: process.env.linh || "undefined"
    })
})

app.listen(3022, () => {
    console.log("App is listening on 3022")
})