const express = require("express");
const { addPermission, revokePermission, addAuditLog } = require("../services/dataService");
const { writePermissionToChain } = require("../services/blockchainService");

const router = express.Router();

// Task 03: Bemor doktorga ruxsat beradi
router.post("/permissions/grant", async (req, res) => {
  try {
    const { doctorWallet, scope, expiresAt } = req.body;
    const patientWallet = req.user.wallet;

    if (req.user.role !== "patient") {
      return res.status(403).json({ message: "Faqat bemor ruxsat bera oladi" });
    }

    const chain = await writePermissionToChain({
      patientWallet,
      doctorWallet,
      action: "grant"
    });

    const permission = addPermission({
      id: `perm_${Date.now()}`,
      patientWallet,
      doctorWallet,
      scope: scope || "full_record",
      expiresAt: expiresAt || null,
      active: true,
      txHash: chain.txHash,
      createdAt: new Date().toISOString()
    });

    addAuditLog({
      actorWallet: patientWallet,
      patientWallet,
      action: "GRANT_ACCESS",
      scope: permission.scope,
      at: new Date().toISOString(),
      txHash: chain.txHash
    });

    res.status(201).json(permission);
  } catch (error) {
    res.status(500).json({ message: "Ruxsat berishda xato", error: error.message });
  }
});

// Task 03: Bemor doktordan ruxsatni oladi
router.post("/permissions/revoke", async (req, res) => {
  try {
    const { doctorWallet } = req.body;
    const patientWallet = req.user.wallet;

    if (req.user.role !== "patient") {
      return res.status(403).json({ message: "Faqat bemor revoke qila oladi" });
    }

    const chain = await writePermissionToChain({
      patientWallet,
      doctorWallet,
      action: "revoke"
    });

    const revoked = revokePermission(patientWallet, doctorWallet);
    if (!revoked) {
      return res.status(404).json({ message: "Aktiv ruxsat topilmadi" });
    }

    addAuditLog({
      actorWallet: patientWallet,
      patientWallet,
      action: "REVOKE_ACCESS",
      scope: revoked.scope,
      at: new Date().toISOString(),
      txHash: chain.txHash
    });

    return res.json({ ...revoked, txHash: chain.txHash });
  } catch (error) {
    return res.status(500).json({ message: "Ruxsatni bekor qilishda xato", error: error.message });
  }
});

module.exports = router;
