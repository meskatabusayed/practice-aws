const express = require("express");
const app = express();

app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("Server is running successfully 🎉");
});

// Simple API example
app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from Express backend!" });
});

// Start server
const PORT = 5000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
