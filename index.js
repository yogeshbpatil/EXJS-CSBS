import express from 'express'
import path from 'path';

const app = express();
const absPath = path.resolve('view')
const publicPath = path.resolve('public');

// Serve static files from public directory
app.use(express.static(publicPath));

console.log(publicPath)

app.get("/", (req, resp) => {
    resp.sendFile(absPath + "/home.html")
})

app.get("/login", (req, resp) => {
    resp.sendFile(absPath + "/login.html")
})

app.get("/about", (req, resp) => {
    resp.sendFile(absPath + "/about.html")
})

app.use((req, resp) => {
    resp.status(404).sendFile(absPath + "/404.html")
})

app.listen(3200, () => {
    console.log('Server running on port 3200');
});