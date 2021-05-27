const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();

app.set("port", process.env.PORT || 3000)

app.listen(app.get("port"), () => console.log("Server Start in http://localhost"+app.get("port")));

app.use(express.static(path.resolve(__dirname, "./public")));

app.get("/", (req, res)=> res.sendFile(path.resolve(__dirname, "./views", "home.html")));