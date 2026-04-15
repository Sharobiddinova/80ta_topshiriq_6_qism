# Backend Skeleton (MVP)

Bu papkada 01-06 topshiriqlar uchun amaliy route skeleton berilgan.

## Ishga tushirish

```bash
cd implementation/backend
npm install
npm run start
```

## Demo auth headerlari

- `x-user-wallet: 0x...`
- `x-user-role: patient|doctor|admin`

## Endpoint mapping

- Task 01: `POST /patients/:patientWallet/records`
- Task 02: `GET /patients/:patientWallet/records`
- Task 03: `POST /permissions/grant`, `POST /permissions/revoke`
- Task 04: `POST /medicines/register`, `GET /medicines/verify?serial=...`
- Task 05: `POST /patients/:patientWallet/encounters`
- Task 06: `GET /audit/logs`
