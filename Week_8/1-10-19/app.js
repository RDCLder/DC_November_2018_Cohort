
var express = require("express");
    app = express();
    io = require("socket.io")();
    reload = require("reload");

app.set("port", 3000);
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
app.use(require("./routes/chat"));

var server = app.listen(app.get("port"), () => {
    console.log("Listening on port 3000...");
})

io.attach(server);
io.on('connection', (socket)=>{
    socket.on('postMessage', (msg)=>{
        io.emit('updateMessages', msg);
    })
})

reload(app);