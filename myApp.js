require('dotenv').config()

let express = require('express');
let app = express();
console.log("Hello World");
console.log(process.env.MESSAGE_STYLE);

app.use((req, res, next) =>{
    let logString = req.method + " " + req.path + " - " + req.ip;
    console.log(logString);
    next();
});

app.use("/public", express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    //res.send("Hello Express");
    res.sendFile(__dirname + '/views/index.html');
});

app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase"){
        res.json({ "message": "HELLO JSON" });
    }else{
        res.json({ "message": "Hello json" });
    }
});

app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
    (req, res) => {
        res.send({time: req.time});
    }
  );

  app.get("/:word/echo", (req, res) => {
    console.log(req.params.word);
    res.json({echo: req.params.word});
  });
  
  




























 module.exports = app;
