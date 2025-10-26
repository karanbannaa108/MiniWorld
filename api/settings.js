export default function handler(req, res) {
  res.status(200).json({
    success: true,
    version: "1.0.3 Pro",
    developer: "Karan Singh"
  });
}
