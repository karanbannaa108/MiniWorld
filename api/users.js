export default function handler(req, res) {
  res.status(200).json({
    success: true,
    users: [
      { name: "Karan Singh", uid: "1000000001", status: "active" },
      { name: "Suraj Meena", uid: "1000000002", status: "premium" },
      { name: "Vikas", uid: "1000000003", status: "active" },
      { name: "Dev Panel", uid: "1000000004", status: "admin" }
    ]
  });
}
