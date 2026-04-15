# 00 - Poliklinika Tizimi Umumiy Rejasi

## Loyiha maqsadi
Poliklinika uchun xavfsiz tizim qurish:
- bemor EMR (elektron tibbiy karta) yaratish
- blockchain orqali o'zgarmas isbot saqlash
- bemor roziligi asosida shifokor kirishini boshqarish
- dori haqiqiyligini tekshirish
- audit (kim, qachon, nima ko'rdi) yuritish

## Arxitektura (MVP)
- Frontend (React): bemor, shifokor, admin panellar
- Backend (Express): biznes mantiq, autentifikatsiya, API
- PostgreSQL: shifrlangan EMR ma'lumotlari, foydalanuvchi profillari
- Smart Contract (Solidity): hashlar, ruxsatlar, audit eventlar
- IPFS yoki DB blob: fayl/analizlar

## Nega to'liq ma'lumotni blockchainga qo'ymaslik kerak
Blockchainga katta tibbiy matn qo'yish qimmat va maxfiylik riskli. To'g'ri yondashuv:
- off-chain: shifrlangan ma'lumot
- on-chain: `recordHash`, `recordId`, `timestamp`, `author`

## Bosqichlar
1. Foydalanuvchi rollari va auth
2. Bemor kartasini yaratish
3. Ruxsat mexanizmi
4. Tashxis/davolash qo'shish
5. Dori verifikatsiya moduli
6. Audit jurnal
7. Test, GitHub, deploy

## Minimal jadvallar
- `users(id, role, wallet_address, full_name)`
- `patients(id, user_id, dob, blood_group)`
- `medical_records(id, patient_id, encrypted_data, data_hash, created_by, created_at)`
- `permissions(id, patient_id, doctor_id, scope, expires_at, granted)`
- `medicine_batches(id, serial_no, manufacturer, mfg_date, exp_date, tx_hash)`
- `access_logs(id, actor_id, patient_id, action, data_scope, access_time, tx_hash)`

## Yakuniy natija
Sizning topshiriq bo'yicha tekshirishga tayyor:
- har vazifa alohida fayl
- implementatsiya uchun aniq qadamlar
- GitHub va deploy yo'riqnomasi
