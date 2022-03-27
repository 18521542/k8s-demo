var express = require("express")

var app = express();

app.get("/", (req, res)=> {
    res.status(200).send({
        message: "Hello"
    })
})

app.listen(3022, () => {
    console.log("App is listening on 3022")
})