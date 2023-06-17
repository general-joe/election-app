const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "welcome to our  voting app",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port${PORT}`);
});
