# ⚡ Quick Deploy Guide - Netlify

## 🚀 Deploy Nhanh Trong 5 Phút

> **💡 Tip**: Nếu gặp lỗi permission khi cài CLI, xem file `FIX_PERMISSION_ERROR.md` hoặc dùng phương pháp GitHub (không cần CLI).

### Bước 1: Login (Dùng npx - Không Cần Cài)

```bash
# Dùng npx, không cần cài global
npx netlify-cli login
```

### Bước 2: Deploy

```bash
# Trong thư mục project
cd /Users/mac/Documents/Working/academy/landing-page-2/landing-page-academy

# Init site (chỉ lần đầu)
npx netlify-cli init

# Deploy production
npx netlify-cli deploy --prod
```

**💡 Tip**: Nếu muốn dùng lệnh ngắn hơn, có thể tạo alias:

```bash
# Thêm vào ~/.zshrc
echo 'alias netlify="npx netlify-cli"' >> ~/.zshrc
source ~/.zshrc

# Sau đó dùng: netlify login, netlify deploy --prod
```

**Xong!** Website của bạn sẽ có URL: `https://your-site-name.netlify.app`

---

## 🔄 Deploy Qua GitHub (Khuyên Dùng)

### Bước 1: Push Code Lên GitHub

```bash
git add .
git commit -m "Ready for Netlify deployment"
git push origin main
```

### Bước 2: Tạo Site Trên Netlify

1. Vào https://www.netlify.com
2. Click **"Add new site"** → **"Import an existing project"**
3. Chọn **"Deploy with GitHub"**
4. Chọn repository của bạn
5. Click **"Deploy site"**

**Xong!** Netlify sẽ tự động deploy và mỗi lần bạn push code sẽ tự động deploy lại.

---

## ⚙️ Cấu Hình Sau Khi Deploy

### 1. Cập Nhật URL trong SEO Config

Sau khi có URL thực tế, cập nhật trong Netlify Dashboard:

**Site settings** → **Environment variables** → Thêm:

- `NEXT_PUBLIC_SITE_URL` = `https://your-site-name.netlify.app`

Sau đó redeploy.

### 2. Kiểm Tra

- [ ] Homepage: `https://your-site-name.netlify.app`
- [ ] About: `https://your-site-name.netlify.app/about`
- [ ] Programs: `https://your-site-name.netlify.app/programs`
- [ ] Sitemap: `https://your-site-name.netlify.app/sitemap.xml`
- [ ] Robots: `https://your-site-name.netlify.app/robots.txt`

---

## 📝 Files Đã Tạo Sẵn

✅ `netlify.toml` - Cấu hình Netlify
✅ `package.json` - Đã có `@netlify/plugin-nextjs`
✅ `.gitignore` - Đã cấu hình

**Bạn chỉ cần deploy thôi!** 🎉
