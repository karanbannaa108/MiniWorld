export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Only POST allowed" });
  }

  const { uid, password } = req.body;

  const users = [
    { uid: "0000000000", password: "World@123", name: "Demo User" },
    { uid: "1111111111", password: "Karan@Suraj56", name: "GODS_PANEL" }
  ];

  const user = users.find(u => u.uid === uid && u.password === password);

  if (user) {
    res.status(200).json({ success: true, message: "Login successful", name: user.name });
  } else {
    res.status(401).json({ success: false, message: "Invalid UID or password" });
  }
}
