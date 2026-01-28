export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ error: "Token missing" });
  }

  console.log("🔥 FCM TOKEN:", token);

  return res.status(200).json({
    success: true,
    message: "Token saved successfully",
  });
}