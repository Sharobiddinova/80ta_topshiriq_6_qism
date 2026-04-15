// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract ClinicEMR {
    struct Permission {
        bool granted;
        string scope;
        uint64 expiresAt;
    }

    struct RecordMeta {
        bytes32 recordHash;
        string uri;
        address author;
        uint64 createdAt;
        string kind;
    }

    struct MedicineBatch {
        bool exists;
        string batchNo;
        string manufacturer;
        uint64 expDate;
    }

    address public owner;

    mapping(address => RecordMeta[]) private patientRecords;
    mapping(address => mapping(address => Permission)) private permissions;
    mapping(bytes32 => MedicineBatch) private medicines;

    event RecordAdded(address indexed patient, bytes32 recordHash, string uri, address indexed author, string kind, uint64 createdAt);
    event AccessGranted(address indexed patient, address indexed doctor, string scope, uint64 expiresAt);
    event AccessRevoked(address indexed patient, address indexed doctor);
    event RecordRead(address indexed patient, address indexed viewer, uint256 indexed recordIndex, string scope, uint64 accessTime);
    event MedicineRegistered(bytes32 indexed serialHash, string manufacturer, uint64 expDate);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "Invalid owner");
        owner = newOwner;
    }

    function grantAccess(address doctor, string calldata scope, uint64 expiresAt) external {
        require(doctor != address(0), "Invalid doctor");
        permissions[msg.sender][doctor] = Permission({
            granted: true,
            scope: scope,
            expiresAt: expiresAt
        });

        emit AccessGranted(msg.sender, doctor, scope, expiresAt);
    }

    function revokeAccess(address doctor) external {
        delete permissions[msg.sender][doctor];
        emit AccessRevoked(msg.sender, doctor);
    }

    function hasAccess(address patient, address viewer) public view returns (bool) {
        if (patient == viewer) {
            return true;
        }

        Permission memory p = permissions[patient][viewer];
        if (!p.granted) {
            return false;
        }

        return p.expiresAt == 0 || p.expiresAt >= block.timestamp;
    }

    function addRecord(address patient, bytes32 recordHash, string calldata uri, string calldata kind) external {
        require(patient != address(0), "Invalid patient");
        require(hasAccess(patient, msg.sender), "No access");

        patientRecords[patient].push(
            RecordMeta({
                recordHash: recordHash,
                uri: uri,
                author: msg.sender,
                createdAt: uint64(block.timestamp),
                kind: kind
            })
        );

        emit RecordAdded(patient, recordHash, uri, msg.sender, kind, uint64(block.timestamp));
    }

    function getRecordCount(address patient) external view returns (uint256) {
        return patientRecords[patient].length;
    }

    function getRecordMeta(address patient, uint256 index)
        external
        view
        returns (bytes32 recordHash, string memory uri, address author, uint64 createdAt, string memory kind)
    {
        require(hasAccess(patient, msg.sender), "No access");
        require(index < patientRecords[patient].length, "Index out of bounds");

        RecordMeta memory r = patientRecords[patient][index];
        return (r.recordHash, r.uri, r.author, r.createdAt, r.kind);
    }

    function logRead(address patient, uint256 recordIndex, string calldata scope) external {
        require(hasAccess(patient, msg.sender), "No access");
        require(recordIndex < patientRecords[patient].length, "Index out of bounds");
        emit RecordRead(patient, msg.sender, recordIndex, scope, uint64(block.timestamp));
    }

    function registerMedicine(
        string calldata serialNo,
        string calldata batchNo,
        string calldata manufacturer,
        uint64 expDate
    ) external onlyOwner {
        bytes32 serialHash = keccak256(bytes(serialNo));
        medicines[serialHash] = MedicineBatch({
            exists: true,
            batchNo: batchNo,
            manufacturer: manufacturer,
            expDate: expDate
        });

        emit MedicineRegistered(serialHash, manufacturer, expDate);
    }

    function verifyMedicine(string calldata serialNo)
        external
        view
        returns (bool isValid, bool expired, string memory batchNo, string memory manufacturer, uint64 expDate)
    {
        bytes32 serialHash = keccak256(bytes(serialNo));
        MedicineBatch memory m = medicines[serialHash];

        if (!m.exists) {
            return (false, false, "", "", 0);
        }

        bool isExpired = m.expDate < block.timestamp;
        return (true, isExpired, m.batchNo, m.manufacturer, m.expDate);
    }
}
