const express = require("express");
const { addRecord, hashPayload, addAuditLog } = require("../services/dataService");
const { writeRecordToChain } = require("../services/blockchainService");

const router = express.Router();

// Task 01: Bemor EMR yaratish va blockchain anchoring
router.post("/patients/:patientWallet/records", async (req, res) => {
  try {
    const { patientWallet } = req.params;
    const payload = req.body;

    const recordHash = hashPayload(payload);
    const chain = await writeRecordToChain({ patientWallet, recordHash, kind: "emr" });

    const stored = addRecord({
      id: `rec_${Date.now()}`,
      patientWallet,
      authorWallet: req.user.wallet,
      kind: "emr",
      payload,
      recordHash,
      txHash: chain.txHash,
      createdAt: new Date().toISOString()
    });

    addAuditLog({
      actorWallet: req.user.wallet,
      patientWallet,
      action: "ADD_RECORD",
      scope: "emr",
      at: new Date().toISOString(),
      txHash: chain.txHash
    });

    res.status(201).json(stored);
  } catch (error) {
    res.status(500).json({ message: "Record yaratishda xato", error: error.message });
  }
});

module.exports = router;
