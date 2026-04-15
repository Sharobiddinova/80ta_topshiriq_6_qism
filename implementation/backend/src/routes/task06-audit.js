const express = require("express");
const { getAuditLogs } = require("../services/dataService");

const router = express.Router();

// Task 06: Kim qachon nimaga kirganini kuzatish
router.get("/audit/logs", (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Audit logni faqat admin ko'radi" });
  }

  const logs = getAuditLogs({
    patientWallet: req.query.patientWallet,
    actorWallet: req.query.actorWallet
  });

  return res.json({ count: logs.length, logs });
});

module.exports = router;
