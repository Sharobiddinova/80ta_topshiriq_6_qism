const express = require("express");
const dotenv = require("dotenv");
const { authMiddleware } = require("./middleware/auth");
const task01Routes = require("./routes/task01-records");
const task02Routes = require("./routes/task02-read-access");
const task03Routes = require("./routes/task03-permissions");
const task04Routes = require("./routes/task04-medicine");
const task05Routes = require("./routes/task05-encounters");
const task06Routes = require("./routes/task06-audit");

dotenv.config();

const app = express();
app.use(express.json());
app.use(authMiddleware);

app.get("/health", (_req, res) => {
  res.json({ ok: true, message: "Clinic blockchain API ishlayapti" });
});

app.use(task01Routes);
app.use(task02Routes);
app.use(task03Routes);
app.use(task04Routes);
app.use(task05Routes);
app.use(task06Routes);

const port = Number(process.env.PORT || 5000);
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
