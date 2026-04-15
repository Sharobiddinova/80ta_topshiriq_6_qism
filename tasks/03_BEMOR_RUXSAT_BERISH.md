# 03 - Bemor Qaysi Shifokorga Ma'lumotni Ochishni Belgilaydi

## Vazifa
Bemor o'zi xohlagan shifokorga kirish huquqini beradi yoki bekor qiladi.

## Amalga oshirish
1. Bemor panelida `Grant access` va `Revoke access` tugmalari.
2. Backend `POST /permissions/grant` va `POST /permissions/revoke` endpointlari.
3. Smart contractda ruxsat yozuvi yangilanadi.
4. DBda `permissions` jadvali sinxron saqlanadi.

## Smart contract interfeysi
```solidity
function grantAccess(address doctor, string calldata scope, uint256 expiresAt) external;
function revokeAccess(address doctor) external;
```

## API namunasi
```http
POST /permissions/grant
Authorization: Bearer <patient_token>
Content-Type: application/json

{
  "doctorWallet": "0xAbC...",
  "scope": "full_record",
  "expiresAt": 1798742400
}
```

## Qabul mezoni
- Faqat bemorning o'zi grant/revoke qila oladi.
- Grant qilingandan keyin doctor 02-vazifa bo'yicha o'qiy oladi.
- Revoke qilingandan keyin darhol kirish yopiladi.
