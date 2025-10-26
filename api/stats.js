export default function handler(req, res) {
  res.status(200).json({
    success: true,
    data: {
      totalUsers: 1200,
      activeUsers: 875,
      premiumUsers: 340
    }
  });
}
