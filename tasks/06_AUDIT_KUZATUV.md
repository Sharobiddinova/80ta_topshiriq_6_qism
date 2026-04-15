# 06 - Kim, Qachon, Qanday Ma'lumotga Kirganini Kuzatish (Audit)

## Vazifa
Tizim har bir kirish holatini log qiladi va tekshiruvga tayyor saqlaydi.

## Amalga oshirish
1. Har `GET/POST` klinik endpointdan keyin audit yoziladi.
2. Auditga actor, vaqt, action, scope, patient_id, tx_hash saqlanadi.
3. Muhim audit event hashini blockchainga anchoring qilish mumkin.
4. Admin panelda filtrlash: user, sana, patient, action.

## Audit jadvali
- `actor_id`
- `actor_role`
- `patient_id`
- `action` (`READ_RECORD`, `ADD_RECORD`, `GRANT_ACCESS`, ...)
- `data_scope`
- `ip_address`
- `access_time`
- `tx_hash` (ixtiyoriy)

## API namunasi
```http
GET /audit/logs?patientId=12&from=2026-01-01&to=2026-12-31
Authorization: Bearer <admin_token>
```

## Qabul mezoni
- Har ma'lumot o'qish/yozish operatsiyasi auditga tushadi.
- Loglar o'chirib yuborilmaydi (soft delete yo'q).
- Export (`csv`) orqali tekshiruvga berish mumkin.
