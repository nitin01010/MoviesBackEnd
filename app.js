const express = require("express");
const app = express();
const port = process.env.PORT || 3000
const db = require("./db/db");
const MoviewModel = require("./db/Shema");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./Routes/useRoutes"));
app.use(require("./Api/useApi"));
app.use(require("./db/Shema"));



app.listen(port, () => {
    console.log('server is runing');
});