
var express = require("express");
    app = express();
    // reload = require('reload');
    // dataFile = require('./data/data.json');
    // io = require('socket.io')();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));
app.use(require("./routes/index"));
app.use(require("./routes/coldplay"));
app.use(require("./routes/imaginedragons"));
app.use(require("./routes/maroon5"));
app.use(require("./routes/onerepublic"));
app.use(require("./routes/feedback"));
app.use(require("./routes/api"));
// app.use(require("./routes/chat"));

app.listen(3000, () => {
    console.log("running on port 3000")
})