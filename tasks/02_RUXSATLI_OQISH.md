# 02 - Ruxsat Berilgan Foydalanuvchi Bemor Ma'lumotlarini O'qishi

## Vazifa
Faqat shifokor yoki ruxsat berilgan user bemor ma'lumotini ko'ra oladi.

## Amalga oshirish
1. API gatekeeper middleware rolni tekshiradi (`doctor`, `admin`, `patient`).
2. `permissions` jadvalidan bemor-doctor juftligi tekshiriladi.
3. Smart contractdagi `hasAccess(patient, viewer)` bilan ham verifikatsiya qilinadi.
4. Ruxsat bo'lsa ma'lumot decrypt qilinib qaytariladi.

## Smart contract interfeysi
```solidity
function hasAccess(address patient, address viewer) external view returns (bool);
```

## API namunasi
```http
GET /patients/12/records?scope=latest
Authorization: Bearer <doctor_token>
```

## Qabul mezoni
- Ruxsatsiz kirishda `403 Forbidden`.
- Ruxsatli kirishda ma'lumot qaytadi.
- Har bir o'qish 06-vazifadagi auditga yoziladi.
