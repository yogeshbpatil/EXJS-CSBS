const express = require('express');

const app = express();
app.get("", (req, resp) => {
    resp.send("<h1>Basic node js example</h1>")
})

app.get("/about", (req, resp) => {
    resp.send("<h1>Thhis is About Page</h1>")
})

app.get("/contact", (req, resp) => {
    resp.send("<h1>Thhis is Contact Page</h1>")
})
app.listen(3200);