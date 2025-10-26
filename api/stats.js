export default function handler(req, res) {
  res.status(200).json({
    success: true,
    data: {
      totalUsers: 1250,
      activeUsers: 930,
      premiumUsers: 45,
      lastUpdate: new Date().toLocaleString()
    },
  });
}
