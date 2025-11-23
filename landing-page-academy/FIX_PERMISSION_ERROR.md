# 🔧 Fix Lỗi Permission Khi Cài Netlify CLI

## ❌ Lỗi Bạn Gặp

```
npm error code EACCES
npm error syscall mkdir
npm error path /usr/local/lib/node_modules/netlify-cli
npm error errno -13
npm error Error: EACCES: permission denied
```

## ✅ Giải Pháp (Chọn 1 trong 3)

### Giải Pháp 1: Dùng npx (Đơn Giản Nhất - Khuyên Dùng) ⭐

**Không cần cài global**, chỉ cần dùng `npx`:

```bash
# Login
npx netlify-cli login

# Init
npx netlify-cli init

# Deploy
npx netlify-cli deploy --prod
```

**Ưu điểm**:

- ✅ Không cần quyền admin
- ✅ Không cần cấu hình gì
- ✅ Luôn dùng version mới nhất

---

### Giải Pháp 2: Cấu Hình npm Prefix (Tốt Nhất Cho Tương Lai)

Cấu hình npm để cài global packages vào thư mục user:

```bash
# 1. Tạo thư mục cho global packages
mkdir ~/.npm-global

# 2. Cấu hình npm
npm config set prefix '~/.npm-global'

# 3. Thêm vào PATH
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zshrc

# 4. Reload shell
source ~/.zshrc

# 5. Cài Netlify CLI (không cần sudo)
npm install -g netlify-cli

# 6. Kiểm tra
netlify --version
```

**Ưu điểm**:

- ✅ Không cần sudo
- ✅ Áp dụng cho tất cả global packages sau này
- ✅ An toàn hơn

---

### Giải Pháp 3: Dùng sudo (Nhanh Nhưng Không Khuyên Dùng)

```bash
# Cài với quyền admin
sudo npm install -g netlify-cli

# Sau đó dùng bình thường
netlify login
```

**⚠️ Lưu ý**:

- Cần nhập password admin
- Có thể gây vấn đề permission sau này
- Không khuyên dùng

---

## 🎯 Khuyên Dùng: Deploy Qua GitHub (Không Cần CLI)

**Cách tốt nhất**: Deploy qua GitHub, không cần cài CLI:

1. **Push code lên GitHub**:

   ```bash
   git add .
   git commit -m "Ready for Netlify"
   git push origin main
   ```

2. **Vào Netlify Dashboard**:
   - https://www.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Chọn "Deploy with GitHub"
   - Chọn repository
   - Click "Deploy site"

**Ưu điểm**:

- ✅ Không cần cài CLI
- ✅ Tự động deploy mỗi khi push code
- ✅ Có preview cho mỗi Pull Request
- ✅ Dễ quản lý hơn

---

## 📝 Tóm Tắt

| Phương Pháp    | Độ Khó          | Khuyên Dùng     |
| -------------- | --------------- | --------------- |
| **npx**        | ⭐ Dễ           | ✅ Có           |
| **npm prefix** | ⭐⭐ Trung bình | ✅ Có           |
| **sudo**       | ⭐ Dễ           | ❌ Không        |
| **GitHub**     | ⭐ Dễ           | ✅✅ Rất khuyên |

---

## 🚀 Quick Start (Dùng npx)

```bash
# 1. Login
npx netlify-cli login

# 2. Init (chỉ lần đầu)
npx netlify-cli init

# 3. Deploy
npx netlify-cli deploy --prod
```

**Xong!** 🎉
