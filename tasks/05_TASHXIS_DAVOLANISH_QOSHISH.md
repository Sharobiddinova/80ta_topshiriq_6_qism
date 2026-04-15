# 05 - Yangi Tashxis yoki Davolanish Ma'lumotini Qo'shish

## Vazifa
Shifokor bemorga yangi tashxis, tahlil yoki davolash yozuvini qo'shadi.

## Amalga oshirish
1. `POST /patients/:id/encounters` endpoint yaratiladi.
2. Doctor ruxsati tekshiriladi (02 + 03).
3. Yangi yozuv versiya sifatida saqlanadi (`v1`, `v2`, ...).
4. Har versiya hash qilib blockchainga yoziladi.

## Yozuv tarkibi
- `diagnosis_code`
- `diagnosis_text`
- `treatment_plan`
- `lab_results`
- `follow_up_date`

## API namunasi
```http
POST /patients/12/encounters
Authorization: Bearer <doctor_token>

{
  "diagnosis_code": "I10",
  "diagnosis_text": "Gipertoniya",
  "treatment_plan": "Amlodipin 5mg 1 mahal",
  "follow_up_date": "2026-05-01"
}
```

## Qabul mezoni
- Har qo'shilgan yozuvga yangi `record_id` va `tx_hash` beriladi.
- Eski yozuvlar o'chmaydi, faqat tarix sifatida qoladi.
- Bemor panelida timeline ko'rinadi.
