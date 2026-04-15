# 04 - Dorining Haqiqiyligini Blockchain Orqali Tekshirish

## Vazifa
Dorining original yoki qalbaki ekanini serial raqam bo'yicha tekshirish.

## Amalga oshirish
1. Ishlab chiqaruvchi partiyani ro'yxatdan o'tkazadi.
2. Har partiya uchun `serialNo`, `batchNo`, `mfgDate`, `expDate`, `manufacturer` yoziladi.
3. Dorixona/shifokor QR yoki serial orqali tekshiradi.
4. Smart contract `verifyMedicine(serialNo)` natija qaytaradi.

## Smart contract interfeysi
```solidity
function registerMedicine(
  string calldata serialNo,
  string calldata batchNo,
  string calldata manufacturer,
  uint256 expDate
) external;

function verifyMedicine(string calldata serialNo)
  external view returns (bool isValid, string memory manufacturer, uint256 expDate);
```

## API namunasi
```http
GET /medicines/verify?serial=UZ-DRUG-2026-001122
```

## Qabul mezoni
- Mavjud serial bo'lsa `isValid=true` va metadata chiqadi.
- Mavjud bo'lmasa `isValid=false`.
- Muddati o'tgan dorida `expired=true` flag qaytariladi.
