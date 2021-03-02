const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(require('./routes/htmlMiddleWare'));

app.listen(PORT,() => {
    console.log(`Server is running and live on http://localhost:${PORT}`)
})