# 07 - GitHubga Yuklash va Free Serverlarda Deploy

## Vazifa
Loyihani GitHubga chiqarish va tekin tier servislarda ishga tushirish.

## Tavsiya etilgan joylash
- Frontend: Vercel
- Backend API: Render (Free Web Service)
- PostgreSQL: Supabase yoki Neon
- Blockchain: Polygon testnet (Amoy)

## Free tier bo'yicha amaliy izoh (2026-04 holat)
- Vercel Hobby: free forever, lekin usage cap bor.
- Render Free Web Service: 15 daqiqa idle bo'lsa spin down bo'ladi, 750 soat/oy limit.
- Supabase Free: 2 ta free project.
- Neon Free: no time limit, lekin usage limitlar bor.

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
Agar tekin tier limitga yetsa, pullik plan yoki boshqa providerga o'tiladi.
