# ✅ Checklist Trước Khi Deploy Lên Netlify

## 📋 Pre-Deployment Checklist

### 1. Code & Build

- [ ] Project build thành công local (`npm run build`)
- [ ] Không có lỗi TypeScript
- [ ] Không có lỗi ESLint nghiêm trọng
- [ ] Tất cả pages load đúng
- [ ] Images hiển thị đúng

### 2. Configuration Files

- [ ] Đã tạo `netlify.toml`
- [ ] Đã cài `@netlify/plugin-nextjs` trong `package.json`
- [ ] `next.config.ts` đã cấu hình đúng
- [ ] `package.json` có đầy đủ scripts

### 3. SEO & Metadata

- [ ] Cập nhật `siteConfig.url` trong `lib/seo.ts` với domain thực tế
- [ ] Sitemap.xml hoạt động (`/sitemap.xml`)
- [ ] Robots.txt hoạt động (`/robots.txt`)
- [ ] Tất cả metadata đã điền đầy đủ

### 4. Testing

- [ ] Test responsive trên mobile (<640px)
- [ ] Test responsive trên tablet (641-1024px)
- [ ] Test responsive trên desktop (>1024px)
- [ ] Navigation menu hoạt động
- [ ] Forms hoạt động
- [ ] Buttons có hover effects
- [ ] Images lazy load đúng
- [ ] Không có lỗi trong Console (F12)

### 5. Git & Repository

- [ ] Code đã commit
- [ ] Code đã push lên GitHub (nếu dùng GitHub deploy)
- [ ] `.gitignore` đã có `.next`, `node_modules`
- [ ] Không commit sensitive data (API keys, passwords)

### 6. Environment Variables

- [ ] Liệt kê tất cả environment variables cần thiết
- [ ] Chuẩn bị để thêm vào Netlify Dashboard sau khi deploy

### 7. Domain & URLs

- [ ] Quyết định domain name (nếu có custom domain)
- [ ] Chuẩn bị DNS settings (nếu có custom domain)

---

## 🚀 Deployment Steps

### Bước 1: Cài Đặt Dependencies

```bash
# Cài đặt Netlify plugin
npm install --save-dev @netlify/plugin-nextjs
```

### Bước 2: Cập Nhật SEO Config

Mở `lib/seo.ts` và cập nhật:

```typescript
const siteConfig = {
  // ...
  url: "https://your-site-name.netlify.app", // Hoặc custom domain
  // ...
};
```

### Bước 3: Build Test

```bash
# Build để kiểm tra
npm run build

# Nếu thành công, tiếp tục
```

### Bước 4: Deploy

**Option A: Netlify CLI**

```bash
netlify login
netlify init
netlify deploy --prod
```

**Option B: GitHub**

1. Push code lên GitHub
2. Vào Netlify Dashboard
3. Import từ GitHub
4. Deploy

---

## ✅ Post-Deployment Checklist

### 1. Kiểm Tra Cơ Bản

- [ ] Homepage load đúng
- [ ] `/about` page load đúng
- [ ] `/programs` page load đúng
- [ ] Navigation hoạt động
- [ ] Footer hiển thị đúng

### 2. Kiểm Tra SEO

- [ ] `/sitemap.xml` accessible
- [ ] `/robots.txt` accessible
- [ ] Meta tags hiển thị đúng (View Page Source)
- [ ] Open Graph tags hoạt động (test với Facebook Debugger)
- [ ] Schema markup validate (https://validator.schema.org/)

### 3. Kiểm Tra Performance

- [ ] PageSpeed Insights score > 90
- [ ] Core Web Vitals passing
- [ ] Images load nhanh
- [ ] Fonts load đúng

### 4. Kiểm Tra Responsive

- [ ] Mobile view đúng
- [ ] Tablet view đúng
- [ ] Desktop view đúng
- [ ] Touch targets đủ lớn
- [ ] Text readable không cần zoom

### 5. Kiểm Tra Functionality

- [ ] Forms submit được (nếu có)
- [ ] Buttons có hover effects
- [ ] Links hoạt động
- [ ] Images hiển thị đầy đủ
- [ ] Videos play được (nếu có)

---

## 🔧 Nếu Có Lỗi Sau Khi Deploy

### Lỗi Build

1. Xem **Deploy logs** trong Netlify Dashboard
2. Kiểm tra lỗi cụ thể
3. Fix và push lại

### Lỗi 404

1. Kiểm tra `netlify.toml` có đúng không
2. Đảm bảo `@netlify/plugin-nextjs` đã cài
3. Redeploy

### Lỗi Images

1. Kiểm tra `next.config.ts` có cấu hình images đúng
2. Kiểm tra image paths
3. Kiểm tra `sizes` attribute

### Lỗi SEO

1. Cập nhật `siteConfig.url` trong `lib/seo.ts`
2. Redeploy
3. Submit sitemap trong Google Search Console

---

## 📝 Notes

- **URL mặc định**: `https://your-site-name.netlify.app`
- **Custom domain**: Cấu hình trong Netlify Dashboard → Domain management
- **SSL**: Tự động, miễn phí
- **Auto-deploy**: Nếu dùng GitHub, mỗi push sẽ tự động deploy

---

**Sẵn sàng deploy! 🚀**
