# 🚀 Quick Start Guide - Product Store

Panduan cepat untuk menjalankan aplikasi Product Store.

## 📋 Prerequisites

Pastikan Anda sudah menginstall:
- **Node.js** (v16 atau lebih baru)
- **MongoDB** (local atau cloud)
- **npm** atau **yarn**

## ⚡ Langkah Cepat

### 1. Install Dependencies

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
npm run install:frontend
```

### 2. Setup Database

**Opsi A: MongoDB Local**
```bash
# Pastikan MongoDB berjalan di localhost:27017
# Tidak perlu setup tambahan
```

**Opsi B: MongoDB Cloud (Atlas)**
```bash
# Buat file .env di root directory
echo "MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/productstore" > .env
```

### 3. Seed Demo Data (Opsional)

```bash
# Jalankan script untuk menambahkan data demo
npm run seed:demo
```

### 4. Jalankan Aplikasi

**Terminal 1 - Backend:**
```bash
npm run dev:backend
```

**Terminal 2 - Frontend:**
```bash
npm run dev:frontend
```

### 5. Akses Aplikasi

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## 🎯 Fitur yang Bisa Dicoba

1. **Lihat Produk**: Halaman utama menampilkan daftar produk
2. **Tambah Produk**: Klik tombol "Tambah Produk"
3. **Edit Produk**: Klik tombol "Edit" pada kartu produk
4. **Hapus Produk**: Klik tombol "Hapus" pada kartu produk
5. **Preview Gambar**: Lihat preview gambar saat menambah/edit produk

## 🛠️ Troubleshooting

### Backend tidak bisa start
```bash
# Check apakah port 5000 sudah digunakan
lsof -i :5000

# Kill process jika ada
kill -9 <PID>
```

### Frontend tidak bisa start
```bash
# Check apakah port 3000 sudah digunakan
lsof -i :3000

# Kill process jika ada
kill -9 <PID>
```

### Database connection error
```bash
# Pastikan MongoDB berjalan
mongod --version

# Start MongoDB (jika belum)
sudo systemctl start mongod
```

### CORS Error
- Pastikan backend berjalan di port 5000
- Pastikan frontend berjalan di port 3000
- CORS sudah dikonfigurasi di backend

## 📱 Screenshots

### Halaman Utama
- Grid layout responsif
- Kartu produk dengan gambar, nama, dan harga
- Tombol tambah produk di header

### Form Produk
- Modal form untuk tambah/edit produk
- Preview gambar real-time
- Validasi input

### Notifikasi
- Toast notification untuk sukses/error
- Loading states yang informatif

## 🎨 Customization

### Mengubah Tema
Edit file `frontend/src/theme.ts`:
```typescript
const theme = extendTheme({
  colors: {
    brand: {
      500: '#your-color', // Ganti warna utama
    },
  },
});
```

### Menambah Field Produk
1. Update model di `backend/models/product.model.js`
2. Update types di `frontend/src/types/product.ts`
3. Update form di `frontend/src/components/ProductForm.tsx`
4. Update API di `frontend/src/services/api.ts`

## 📚 API Testing

### Test dengan curl
```bash
# Get all products
curl http://localhost:5000/api/products

# Create product
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Product","price":100000,"image":"https://example.com/image.jpg"}'
```

### Test dengan Postman
Import collection dari file `postman-collection.json` (jika ada)

## 🚀 Production Deployment

### Build Frontend
```bash
npm run build:frontend
```

### Deploy Backend
- Deploy ke Heroku, Vercel, atau platform lain
- Setup environment variables
- Connect ke MongoDB Atlas

### Deploy Frontend
- Deploy ke Netlify, Vercel, atau platform lain
- Update API URL di `frontend/src/services/api.ts`

## 💡 Tips

1. **Development**: Gunakan `npm run dev:backend` dan `npm run dev:frontend` di terminal terpisah
2. **Hot Reload**: Kedua frontend dan backend support hot reload
3. **Database**: Gunakan MongoDB Compass untuk melihat data
4. **Debugging**: Gunakan browser dev tools dan console.log
5. **Performance**: Monitor network tab untuk API calls

## 🆘 Butuh Bantuan?

1. Check console untuk error messages
2. Pastikan semua dependencies terinstall
3. Restart development servers
4. Clear browser cache
5. Check MongoDB connection

---

**Happy Coding! 🎉**
