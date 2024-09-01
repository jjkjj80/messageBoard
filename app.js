const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/new", newRouter);
app.use("/", indexRouter);

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const PORT = 3001;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
