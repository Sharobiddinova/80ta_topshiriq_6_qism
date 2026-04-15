# 07 - GitHubga Yuklash va Free Serverlarda Deploy

## Vazifa
Loyihani GitHubga chiqarish va tekin tier servislarda ishga tushirish.

## Tavsiya etilgan joylash
- Frontend: Vercel
- Backend API: Render yoki Koyeb
- PostgreSQL: Supabase yoki Neon
- Blockchain: Polygon testnet (Amoy)

## 1. GitHubga yuklash
```bash
git init
git add .
git commit -m "Initial commit: clinic blockchain project"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

## 2. Environment variables
Backend uchun:
- `DATABASE_URL`
- `JWT_SECRET`
- `RPC_URL`
- `PRIVATE_KEY`
- `CONTRACT_ADDRESS`

Frontend uchun:
- `VITE_API_URL`
- `VITE_CHAIN_ID`
- `VITE_CONTRACT_ADDRESS`

## 3. Deploy ketma-ketligi
1. DB oching va migration ishlating.
2. Smart contractni testnetga deploy qiling.
3. Backendni deploy qilib envlarni kiriting.
4. Frontendni deploy qilib API URLni ulang.
5. Live test: grant -> read -> add diagnosis -> audit -> medicine verify.

## 4. Tekshirish checklist
- [ ] Bemor karta yarata oladi
- [ ] Bemor doctorga ruxsat bera oladi
- [ ] Doctor faqat ruxsat bo'lsa o'qiy oladi
- [ ] Dorini serial bo'yicha tekshirish ishlaydi
- [ ] Yangi tashxis yozuvi qo'shiladi
- [ ] Audit loglar chiqadi

## Eslatma
Agar tekin tier limitga yetsa, alternativ sifatida Railway/Fly.io dan foydalanish mumkin.
