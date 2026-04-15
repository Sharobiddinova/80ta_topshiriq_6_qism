const express = require("express");
const { hasPermission, addRecord, hashPayload, addAuditLog } = require("../services/dataService");
const { writeRecordToChain } = require("../services/blockchainService");

const router = express.Router();

// Task 05: Yangi tashxis/davolash yozuvini qo'shish
router.post("/patients/:patientWallet/encounters", async (req, res) => {
  try {
    const { patientWallet } = req.params;
    const doctorWallet = req.user.wallet;
    const isOwner = doctorWallet.toLowerCase() === patientWallet.toLowerCase();
    const allowed = isOwner || hasPermission(patientWallet, doctorWallet) || req.user.role === "admin";

    if (!allowed) {
      return res.status(403).json({ message: "Bu bemor uchun yozuv qo'shishga ruxsat yo'q" });
    }

    const encounter = {
      diagnosis_code: req.body.diagnosis_code,
      diagnosis_text: req.body.diagnosis_text,
      treatment_plan: req.body.treatment_plan,
      lab_results: req.body.lab_results || [],
      follow_up_date: req.body.follow_up_date || null
    };

    const recordHash = hashPayload(encounter);
    const chain = await writeRecordToChain({ patientWallet, recordHash, kind: "encounter" });

    const stored = addRecord({
      id: `enc_${Date.now()}`,
      patientWallet,
      authorWallet: doctorWallet,
      kind: "encounter",
      payload: encounter,
      recordHash,
      txHash: chain.txHash,
      createdAt: new Date().toISOString()
    });

    addAuditLog({
      actorWallet: doctorWallet,
      patientWallet,
      action: "ADD_ENCOUNTER",
      scope: "diagnosis+treatment",
      at: new Date().toISOString(),
      txHash: chain.txHash
    });

    return res.status(201).json(stored);
  } catch (error) {
    return res.status(500).json({ message: "Encounter qo'shishda xato", error: error.message });
  }
});

module.exports = router;
