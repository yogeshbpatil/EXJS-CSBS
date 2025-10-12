import express from "express";
import { MongoClient } from "mongodb";

const dbName = "school";
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
client.connect().then((connection) => {
  const db = connection.db(dbName);

  app.get("/api", async (req, resp) => {
    const collection = db.collection("students");
    const students = await collection.find().toArray();
    resp.send(students);
  });

  app.get("/ui", async (req, resp) => {
    const collection = db.collection("students");
    const students = await collection.find().toArray();
    resp.render("students", { students: students });
  });

  app.get("/add", (req, resp) => {
    resp.render("add-student");
  });

  app.post("/add-student", async (req, resp) => {
    // console.log(req.body);

    const collection = db.collection("students");
    const result = await collection.insertOne(req.body);
    console.log(result);
    // const students = await collection.find().toArray();
    resp.send("data saved");
  });
});

app.listen(3200);
