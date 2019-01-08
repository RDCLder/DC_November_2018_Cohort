
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));
app.use(require('./routes/index'));
app.use(require('./routes/coldplay'));
app.use(require('./routes/imaginedragons'));
app.use(require('./routes/maroon5'));
app.use(require('./routes/onerepublic'));

app.listen(3000, () => {
    console.log("running on port 3000")
})