export default function handler(req, res) {
  res.status(200).json({
    success: true,
    app: "MiniWorld Pro",
    version: "2.0.1",
    developer: "Karan Singh",
    telegramBot: "@MiniWorldUIDBot",
    website: "https://mini-world-eight.vercel.app"
  });
}
