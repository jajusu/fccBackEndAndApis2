require('dotenv').config()

const bodyParser = require('body-parser');
let express = require('express');
let app = express();
console.log("Hello World");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

  app.get("/name", (req, res) => {
    // console.log(req.query.first);
    // console.log(req.query.last);
    res.send({name: req.query.first + " " + req.query.last});
  });
  
  




























 module.exports = app;
