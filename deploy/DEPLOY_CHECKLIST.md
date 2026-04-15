# Deploy Qo'llanma (Amaliy)

## 1) GitHub repo tayyorlash

```bash
git init
git add .
git commit -m "Initial clinic blockchain tasks + implementation"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

## 2) Backend (Render)

1. Render account oching.
2. `New > Blueprint` tanlang.
3. Shu repodagi `render.yaml` ni tanlang.
4. `RPC_URL`, `PRIVATE_KEY`, `CONTRACT_ADDRESS` env kiriting.
5. Deploy tugashi bilan URL oling (`https://...onrender.com/health`).
6. Eslatma: free instance 15 daqiqa idle bo'lsa uxlaydi (cold start bo'ladi).

## 3) Frontend (Vercel)

1. Vercel account oching.
2. `New Project` orqali shu repodan `implementation/frontend` ni tanlang.
3. Static deployni boshlang.
4. Frontendda API URL maydoniga Render URL yozib tekshiring.

## 3.1) Free tier eslatmalar

- Vercel Hobby: free, lekin usage cap bilan.
- Render Free: 750 soat/oy va idle spin-down.
- Supabase Free: 2 ta free project.
- Neon Free: free tier usage limitlari bor.

## 4) DB (ixtiyoriy: Supabase/Neon)

Agar in-memory o'rniga haqiqiy DB ishlatsangiz:
- `DATABASE_URL` env qo'shing
- backenddagi `dataService` ni PostgreSQL bilan almashtiring

## 5) Oxirgi tekshiruv

- `/health` ishlaydi
- `/permissions/grant` va `/permissions/revoke` ishlaydi
- `/patients/:wallet/records` bilan kirish nazorati ishlaydi
- `/medicines/verify` ishlaydi
- `/audit/logs` admin uchun ishlaydi

## 6) GitHub push skript

Repo URL bo'lsa bitta buyruq bilan push:

```powershell
powershell -ExecutionPolicy Bypass -File .\deploy\push_to_github.ps1 -RepoUrl \"https://github.com/<username>/<repo>.git\"
```
