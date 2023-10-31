require('dotenv').config()

let express = require('express');
let app = express();
console.log("Hello World");
console.log(process.env.example.MESSAGE_STYLE);

app.use("/public", express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    //res.send("Hello Express");
    res.sendFile(__dirname + '/views/index.html');
});

app.get("/json", (req, res) => {
    if (process.env.example.MESSAGE_STYLE === "uppercase"){
        res.json({ "message": "HELLO JSON" });
    }else{
        res.json({ "message": "Hello json" });
    }
});






























 module.exports = app;
