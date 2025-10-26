import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({ success: true, message: "MiniWorld Backend Connected ✅" });
});

export default app;
