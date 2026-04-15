# Poliklinika Blockchain Loyihasi

Bu repoda siz bergan har bir topshiriq alohida faylda bajarilgan va deploy uchun amaliy skeleton qo'shilgan.

## Topshiriqlar (alohida fayllar)

1. [00_TIZIM_REJASI.md](tasks/00_TIZIM_REJASI.md)
2. [01_BEMOR_ELEKTRON_KARTA_BLOCKCHAIN.md](tasks/01_BEMOR_ELEKTRON_KARTA_BLOCKCHAIN.md)
3. [02_RUXSATLI_OQISH.md](tasks/02_RUXSATLI_OQISH.md)
4. [03_BEMOR_RUXSAT_BERISH.md](tasks/03_BEMOR_RUXSAT_BERISH.md)
5. [04_DORI_HAQIQIYLIGI_TEKSHIRUV.md](tasks/04_DORI_HAQIQIYLIGI_TEKSHIRUV.md)
6. [05_TASHXIS_DAVOLANISH_QOSHISH.md](tasks/05_TASHXIS_DAVOLANISH_QOSHISH.md)
7. [06_AUDIT_KUZATUV.md](tasks/06_AUDIT_KUZATUV.md)
8. [07_GITHUB_DEPLOY.md](tasks/07_GITHUB_DEPLOY.md)

## Amaliy implementatsiya

- Smart contract: `implementation/contracts/ClinicEMR.sol`
- Backend API skeleton: `implementation/backend`
- Frontend demo: `implementation/frontend`

## Deploy fayllari

- Render backend blueprint: `render.yaml`
- Deploy qo'llanma: `deploy/DEPLOY_CHECKLIST.md`
- GitHub push skript: `deploy/push_to_github.ps1`
- Frontend Vercel config: `implementation/frontend/vercel.json`

## Ishlatish tartibi

1. Topshiriq fayllarini tekshiruv uchun ko'rsating.
2. `implementation/backend` va `implementation/frontend` ni test qiling.
3. GitHubga push qiling.
4. `deploy/DEPLOY_CHECKLIST.md` bo'yicha deploy qiling.
