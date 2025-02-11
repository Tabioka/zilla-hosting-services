// Filename: pages/api/servers.js
export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ servers: [] });
  } else if (req.method === "POST") {
    res.status(201).json({ message: "Server created" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
