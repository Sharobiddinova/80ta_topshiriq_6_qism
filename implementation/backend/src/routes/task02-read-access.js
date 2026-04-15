const express = require("express");
const { findRecordsByPatient, hasPermission, addAuditLog } = require("../services/dataService");

const router = express.Router();

// Task 02: Ruxsatli usergina bemor ma'lumotini o'qiydi
router.get("/patients/:patientWallet/records", (req, res) => {
  const { patientWallet } = req.params;
  const viewerWallet = req.user.wallet;
  const isOwner = viewerWallet.toLowerCase() === patientWallet.toLowerCase();
  const allowed = isOwner || hasPermission(patientWallet, viewerWallet) || req.user.role === "admin";

  if (!allowed) {
    return res.status(403).json({ message: "Ruxsat yo'q" });
  }

  const records = findRecordsByPatient(patientWallet);
  addAuditLog({
    actorWallet: viewerWallet,
    patientWallet,
    action: "READ_RECORD",
    scope: "records",
    at: new Date().toISOString()
  });

  return res.json({ count: records.length, records });
});

module.exports = router;
