export default function handler(req, res) {
  res.status(200).json({
    success: true,
    users: [
      { uid: "1000000001", name: "Karan Singh", level: 15, status: "online" },
      { uid: "1000000002", name: "Suraj Meena", level: 12, status: "offline" },
      { uid: "1000000003", name: "Ravi Kumar", level: 8, status: "active" }
    ]
  });
}
