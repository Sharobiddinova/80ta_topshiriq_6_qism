# 01 - Bemor Elektron Kartasini Yaratish va Blockchainda Saqlash

## Vazifa
Bemorning elektron tibbiy kartasi yaratiladi va blockchainga isbot sifatida yoziladi.

## Amalga oshirish
1. Backend `POST /patients/:id/records` endpoint yaratadi.
2. Kiritilgan EMR JSON AES bilan shifrlanadi.
3. Shifrlangan ma'lumotdan SHA-256 hash olinadi.
4. Smart contractga `addRecord(patientWallet, recordHash, uri)` yuboriladi.
5. DBga `encrypted_data`, `record_hash`, `tx_hash` saqlanadi.

## Smart contract interfeysi
```solidity
function addRecord(address patient, bytes32 recordHash, string calldata uri) external;
```

## API namunasi
```http
POST /patients/12/records
Authorization: Bearer <token>
Content-Type: application/json

{
  "diagnosis": "J10.1",
  "notes": "Yengil gripp",
  "prescription": ["Paracetamol 500mg"]
}
```

## Qabul mezoni
- Record yaratilganda tx hash qaytadi.
- DBdagi hash va blockchaindagi hash bir xil bo'ladi.
- Recordga keyin o'zgartirish kiritilsa yangi versiya yaratiladi.
