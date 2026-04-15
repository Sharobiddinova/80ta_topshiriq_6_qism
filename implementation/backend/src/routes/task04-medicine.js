const express = require("express");
const { registerMedicine, verifyMedicine, addAuditLog } = require("../services/dataService");
const { writeMedicineToChain } = require("../services/blockchainService");

const router = express.Router();

// Task 04: Dorini blockchain orqali tekshirish
router.post("/medicines/register", async (req, res) => {
  try {
    const { serialNo, batchNo, manufacturer, expDate } = req.body;

    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Faqat admin/ishlab chiqaruvchi ro'yxatdan o'tkaza oladi" });
    }

    const chain = await writeMedicineToChain({ serialNo });
    const medicine = registerMedicine({
      serialNo,
      batchNo,
      manufacturer,
      expDate,
      txHash: chain.txHash,
      createdAt: new Date().toISOString()
    });

    addAuditLog({
      actorWallet: req.user.wallet,
      patientWallet: "-",
      action: "REGISTER_MEDICINE",
      scope: serialNo,
      at: new Date().toISOString(),
      txHash: chain.txHash
    });

    return res.status(201).json(medicine);
  } catch (error) {
    return res.status(500).json({ message: "Dorini ro'yxatdan o'tkazishda xato", error: error.message });
  }
});

router.get("/medicines/verify", (req, res) => {
  const serialNo = req.query.serial;
  if (!serialNo) {
    return res.status(400).json({ message: "serial param talab qilinadi" });
  }

  const result = verifyMedicine(serialNo);
  addAuditLog({
    actorWallet: req.user.wallet,
    patientWallet: "-",
    action: "VERIFY_MEDICINE",
    scope: serialNo,
    at: new Date().toISOString()
  });

  return res.json({ serialNo, ...result });
});

module.exports = router;
