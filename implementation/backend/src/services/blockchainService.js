const { ethers } = require("ethers");

function fakeTxHash(seed) {
  return ethers.id(`${seed}-${Date.now()}-${Math.random()}`);
}

async function writeRecordToChain({ patientWallet, recordHash, kind }) {
  // Real loyihada ethers Contract instance bilan chain ga yuboriladi.
  return {
    txHash: fakeTxHash(`record-${patientWallet}-${recordHash}-${kind}`)
  };
}

async function writePermissionToChain({ patientWallet, doctorWallet, action }) {
  return {
    txHash: fakeTxHash(`permission-${patientWallet}-${doctorWallet}-${action}`)
  };
}

async function writeMedicineToChain({ serialNo }) {
  return {
    txHash: fakeTxHash(`medicine-${serialNo}`)
  };
}

module.exports = {
  writeRecordToChain,
  writePermissionToChain,
  writeMedicineToChain
};
