const crypto = require("crypto");

const records = [];
const permissions = [];
const auditLogs = [];
const medicines = [];

function hashPayload(payload) {
  const normalized = JSON.stringify(payload);
  return `0x${crypto.createHash("sha256").update(normalized).digest("hex")}`;
}

function addRecord(record) {
  records.push(record);
  return record;
}

function findRecordsByPatient(patientWallet) {
  return records.filter((r) => r.patientWallet.toLowerCase() === patientWallet.toLowerCase());
}

function addPermission(permission) {
  permissions.push(permission);
  return permission;
}

function revokePermission(patientWallet, doctorWallet) {
  const index = permissions.findIndex(
    (p) =>
      p.patientWallet.toLowerCase() === patientWallet.toLowerCase() &&
      p.doctorWallet.toLowerCase() === doctorWallet.toLowerCase() &&
      p.active
  );

  if (index >= 0) {
    permissions[index].active = false;
    permissions[index].revokedAt = new Date().toISOString();
    return permissions[index];
  }

  return null;
}

function hasPermission(patientWallet, viewerWallet) {
  return permissions.some(
    (p) =>
      p.patientWallet.toLowerCase() === patientWallet.toLowerCase() &&
      p.doctorWallet.toLowerCase() === viewerWallet.toLowerCase() &&
      p.active &&
      (!p.expiresAt || new Date(p.expiresAt).getTime() > Date.now())
  );
}

function addAuditLog(log) {
  auditLogs.push(log);
  return log;
}

function getAuditLogs(filters = {}) {
  return auditLogs.filter((l) => {
    if (filters.patientWallet && l.patientWallet.toLowerCase() !== filters.patientWallet.toLowerCase()) {
      return false;
    }
    if (filters.actorWallet && l.actorWallet.toLowerCase() !== filters.actorWallet.toLowerCase()) {
      return false;
    }
    return true;
  });
}

function registerMedicine(medicine) {
  medicines.push(medicine);
  return medicine;
}

function verifyMedicine(serialNo) {
  const found = medicines.find((m) => m.serialNo === serialNo);
  if (!found) {
    return { isValid: false, expired: false };
  }

  const expired = new Date(found.expDate).getTime() < Date.now();
  return {
    isValid: true,
    expired,
    manufacturer: found.manufacturer,
    batchNo: found.batchNo,
    expDate: found.expDate
  };
}

module.exports = {
  hashPayload,
  addRecord,
  findRecordsByPatient,
  addPermission,
  revokePermission,
  hasPermission,
  addAuditLog,
  getAuditLogs,
  registerMedicine,
  verifyMedicine
};
