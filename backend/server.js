import express from "express";
import cors from "cors";

const app = express();

app.use(cors()); // ✅ VERY IMPORTANT
app.use(express.json());

app.post("/chat", (req, res) => {
  console.log("Received:", req.body);

  res.json({
    reply: "Backend working ✅"
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});