export const CLINIC_EMR_ABI = [
    {
        "inputs":  [

                   ],
        "stateMutability":  "nonpayable",
        "type":  "constructor"
    },
    {
        "anonymous":  false,
        "inputs":  [
                       {
                           "indexed":  true,
                           "internalType":  "address",
                           "name":  "patient",
                           "type":  "address"
                       },
                       {
                           "indexed":  true,
                           "internalType":  "address",
                           "name":  "doctor",
                           "type":  "address"
                       },
                       {
                           "indexed":  false,
                           "internalType":  "string",
                           "name":  "scope",
                           "type":  "string"
                       },
                       {
                           "indexed":  false,
                           "internalType":  "uint64",
                           "name":  "expiresAt",
                           "type":  "uint64"
                       }
                   ],
        "name":  "AccessGranted",
        "type":  "event"
    },
    {
        "anonymous":  false,
        "inputs":  [
                       {
                           "indexed":  true,
                           "internalType":  "address",
                           "name":  "patient",
                           "type":  "address"
                       },
                       {
                           "indexed":  true,
                           "internalType":  "address",
                           "name":  "doctor",
                           "type":  "address"
                       }
                   ],
        "name":  "AccessRevoked",
        "type":  "event"
    },
    {
        "anonymous":  false,
        "inputs":  [
                       {
                           "indexed":  true,
                           "internalType":  "bytes32",
                           "name":  "serialHash",
                           "type":  "bytes32"
                       },
                       {
                           "indexed":  false,
                           "internalType":  "string",
                           "name":  "manufacturer",
                           "type":  "string"
                       },
                       {
                           "indexed":  false,
                           "internalType":  "uint64",
                           "name":  "expDate",
                           "type":  "uint64"
                       }
                   ],
        "name":  "MedicineRegistered",
        "type":  "event"
    },
    {
        "anonymous":  false,
        "inputs":  [
                       {
                           "indexed":  true,
                           "internalType":  "address",
                           "name":  "patient",
                           "type":  "address"
                       },
                       {
                           "indexed":  false,
                           "internalType":  "bytes32",
                           "name":  "recordHash",
                           "type":  "bytes32"
                       },
                       {
                           "indexed":  false,
                           "internalType":  "string",
                           "name":  "uri",
                           "type":  "string"
                       },
                       {
                           "indexed":  true,
                           "internalType":  "address",
                           "name":  "author",
                           "type":  "address"
                       },
                       {
                           "indexed":  false,
                           "internalType":  "string",
                           "name":  "kind",
                           "type":  "string"
                       },
                       {
                           "indexed":  false,
                           "internalType":  "uint64",
                           "name":  "createdAt",
                           "type":  "uint64"
                       }
                   ],
        "name":  "RecordAdded",
        "type":  "event"
    },
    {
        "anonymous":  false,
        "inputs":  [
                       {
                           "indexed":  true,
                           "internalType":  "address",
                           "name":  "patient",
                           "type":  "address"
                       },
                       {
                           "indexed":  true,
                           "internalType":  "address",
                           "name":  "viewer",
                           "type":  "address"
                       },
                       {
                           "indexed":  true,
                           "internalType":  "uint256",
                           "name":  "recordIndex",
                           "type":  "uint256"
                       },
                       {
                           "indexed":  false,
                           "internalType":  "string",
                           "name":  "scope",
                           "type":  "string"
                       },
                       {
                           "indexed":  false,
                           "internalType":  "uint64",
                           "name":  "accessTime",
                           "type":  "uint64"
                       }
                   ],
        "name":  "RecordRead",
        "type":  "event"
    },
    {
        "inputs":  [
                       {
                           "internalType":  "address",
                           "name":  "patient",
                           "type":  "address"
                       },
                       {
                           "internalType":  "bytes32",
                           "name":  "recordHash",
                           "type":  "bytes32"
                       },
                       {
                           "internalType":  "string",
                           "name":  "uri",
                           "type":  "string"
                       },
                       {
                           "internalType":  "string",
                           "name":  "kind",
                           "type":  "string"
                       }
                   ],
        "name":  "addRecord",
        "outputs":  [

                    ],
        "stateMutability":  "nonpayable",
        "type":  "function"
    },
    {
        "inputs":  [
                       {
                           "internalType":  "address",
                           "name":  "patient",
                           "type":  "address"
                       }
                   ],
        "name":  "getRecordCount",
        "outputs":  [
                        {
                            "internalType":  "uint256",
                            "name":  "",
                            "type":  "uint256"
                        }
                    ],
        "stateMutability":  "view",
        "type":  "function"
    },
    {
        "inputs":  [
                       {
                           "internalType":  "address",
                           "name":  "patient",
                           "type":  "address"
                       },
                       {
                           "internalType":  "uint256",
                           "name":  "index",
                           "type":  "uint256"
                       }
                   ],
        "name":  "getRecordMeta",
        "outputs":  [
                        {
                            "internalType":  "bytes32",
                            "name":  "recordHash",
                            "type":  "bytes32"
                        },
                        {
                            "internalType":  "string",
                            "name":  "uri",
                            "type":  "string"
                        },
                        {
                            "internalType":  "address",
                            "name":  "author",
                            "type":  "address"
                        },
                        {
                            "internalType":  "uint64",
                            "name":  "createdAt",
                            "type":  "uint64"
                        },
                        {
                            "internalType":  "string",
                            "name":  "kind",
                            "type":  "string"
                        }
                    ],
        "stateMutability":  "view",
        "type":  "function"
    },
    {
        "inputs":  [
                       {
                           "internalType":  "address",
                           "name":  "doctor",
                           "type":  "address"
                       },
                       {
                           "internalType":  "string",
                           "name":  "scope",
                           "type":  "string"
                       },
                       {
                           "internalType":  "uint64",
                           "name":  "expiresAt",
                           "type":  "uint64"
                       }
                   ],
        "name":  "grantAccess",
        "outputs":  [

                    ],
        "stateMutability":  "nonpayable",
        "type":  "function"
    },
    {
        "inputs":  [
                       {
                           "internalType":  "address",
                           "name":  "patient",
                           "type":  "address"
                       },
                       {
                           "internalType":  "address",
                           "name":  "viewer",
                           "type":  "address"
                       }
                   ],
        "name":  "hasAccess",
        "outputs":  [
                        {
                            "internalType":  "bool",
                            "name":  "",
                            "type":  "bool"
                        }
                    ],
        "stateMutability":  "view",
        "type":  "function"
    },
    {
        "inputs":  [
                       {
                           "internalType":  "address",
                           "name":  "patient",
                           "type":  "address"
                       },
                       {
                           "internalType":  "uint256",
                           "name":  "recordIndex",
                           "type":  "uint256"
                       },
                       {
                           "internalType":  "string",
                           "name":  "scope",
                           "type":  "string"
                       }
                   ],
        "name":  "logRead",
        "outputs":  [

                    ],
        "stateMutability":  "nonpayable",
        "type":  "function"
    },
    {
        "inputs":  [

                   ],
        "name":  "owner",
        "outputs":  [
                        {
                            "internalType":  "address",
                            "name":  "",
                            "type":  "address"
                        }
                    ],
        "stateMutability":  "view",
        "type":  "function"
    },
    {
        "inputs":  [
                       {
                           "internalType":  "string",
                           "name":  "serialNo",
                           "type":  "string"
                       },
                       {
                           "internalType":  "string",
                           "name":  "batchNo",
                           "type":  "string"
                       },
                       {
                           "internalType":  "string",
                           "name":  "manufacturer",
                           "type":  "string"
                       },
                       {
                           "internalType":  "uint64",
                           "name":  "expDate",
                           "type":  "uint64"
                       }
                   ],
        "name":  "registerMedicine",
        "outputs":  [

                    ],
        "stateMutability":  "nonpayable",
        "type":  "function"
    },
    {
        "inputs":  [
                       {
                           "internalType":  "address",
                           "name":  "doctor",
                           "type":  "address"
                       }
                   ],
        "name":  "revokeAccess",
        "outputs":  [

                    ],
        "stateMutability":  "nonpayable",
        "type":  "function"
    },
    {
        "inputs":  [
                       {
                           "internalType":  "address",
                           "name":  "newOwner",
                           "type":  "address"
                       }
                   ],
        "name":  "transferOwnership",
        "outputs":  [

                    ],
        "stateMutability":  "nonpayable",
        "type":  "function"
    },
    {
        "inputs":  [
                       {
                           "internalType":  "string",
                           "name":  "serialNo",
                           "type":  "string"
                       }
                   ],
        "name":  "verifyMedicine",
        "outputs":  [
                        {
                            "internalType":  "bool",
                            "name":  "isValid",
                            "type":  "bool"
                        },
                        {
                            "internalType":  "bool",
                            "name":  "expired",
                            "type":  "bool"
                        },
                        {
                            "internalType":  "string",
                            "name":  "batchNo",
                            "type":  "string"
                        },
                        {
                            "internalType":  "string",
                            "name":  "manufacturer",
                            "type":  "string"
                        },
                        {
                            "internalType":  "uint64",
                            "name":  "expDate",
                            "type":  "uint64"
                        }
                    ],
        "stateMutability":  "view",
        "type":  "function"
    }
];

