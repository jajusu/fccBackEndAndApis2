let express = require('express');
let app = express();
console.log("Hello World");

app.use("/public", express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    //res.send("Hello Express");
    res.sendFile(__dirname + '/views/index.html');
});

app.get("/json", (req, res) => {
    res.json({ "message": "Hello json" });
    //res.send("Hello Express");
});






























 module.exports = app;
