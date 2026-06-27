import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.post("/user", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "name and email are required" });
  }

  res.send(`Hello, ${name}!`);
});

app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  res.send(`User ${id} profile`);
});

app.listen(port, () => {
  console.log(`App starting on http://localhost:${port}`);
});

