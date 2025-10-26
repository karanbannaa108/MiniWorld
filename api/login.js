export default function handler(req, res) {
  const users = [
    { name: "Karan Singh", uid: "1000000001", password: "World@1234", status: "active" },
    { name: "Suraj Meena", uid: "1000000002", password: "Meena@123", status: "premium" },
    { name: "Vikas", uid: "1000000003", password: "Vikas@123", status: "active" },
    { name: "Dev Panel", uid: "1000000004", password: "Admin@123", status: "admin" }
  ];

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { uid, password } = req.body;

  const user = users.find(u => u.uid === uid && u.password === password);

  if (user) {
    res.status(200).json({ success: true, message: `Welcome ${user.name}`, user });
  } else {
    res.status(401).json({ success: false, message: "Invalid UID or Password" });
  }
}
