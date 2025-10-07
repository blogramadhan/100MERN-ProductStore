# Product Store Frontend

Frontend aplikasi Product Store yang dibangun dengan React, TypeScript, dan Chakra UI.

## Fitur

- ✅ **CRUD Produk**: Tambah, lihat, edit, dan hapus produk
- ✅ **UI Modern**: Desain yang menarik menggunakan Chakra UI
- ✅ **Responsive**: Tampilan yang optimal di semua perangkat
- ✅ **Loading States**: Indikator loading yang informatif
- ✅ **Error Handling**: Penanganan error yang user-friendly
- ✅ **Toast Notifications**: Notifikasi sukses dan error
- ✅ **Image Preview**: Preview gambar sebelum menyimpan

## Teknologi yang Digunakan

- **React 18** dengan TypeScript
- **Chakra UI** untuk komponen UI
- **Axios** untuk HTTP requests
- **React Icons** untuk ikon
- **Framer Motion** untuk animasi

## Instalasi dan Menjalankan

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Pastikan backend sudah berjalan di port 5000**

3. **Jalankan aplikasi:**
   ```bash
   npm start
   ```

4. **Buka browser di:** `http://localhost:3000`

## Struktur Komponen

```
src/
├── components/
│   ├── ProductCard.tsx      # Kartu produk individual
│   ├── ProductForm.tsx      # Form tambah/edit produk
│   └── ProductList.tsx      # Daftar semua produk
├── services/
│   └── api.ts              # API service untuk komunikasi dengan backend
├── types/
│   └── product.ts          # TypeScript interfaces
├── App.tsx                 # Komponen utama
├── index.tsx              # Entry point
└── theme.ts               # Konfigurasi tema Chakra UI
```

## API Endpoints

Frontend berkomunikasi dengan backend melalui endpoint berikut:

- `GET /api/products` - Ambil semua produk
- `POST /api/products` - Tambah produk baru
- `PUT /api/products/:id` - Update produk
- `DELETE /api/products/:id` - Hapus produk

## Fitur UI/UX

### Design System
- **Warna Brand**: Biru (#0066cc) sebagai warna utama
- **Typography**: Inter font untuk konsistensi
- **Spacing**: Sistem spacing yang konsisten
- **Shadows**: Box shadows untuk depth

### Responsive Design
- **Mobile First**: Optimized untuk mobile
- **Grid Layout**: Responsive grid untuk daftar produk
- **Breakpoints**: 
  - Base: 1 kolom
  - md: 2 kolom
  - lg: 3 kolom
  - xl: 4 kolom

### User Experience
- **Loading States**: Spinner dan loading text
- **Empty States**: Pesan ketika belum ada produk
- **Error States**: Alert untuk error handling
- **Toast Notifications**: Feedback untuk aksi user
- **Hover Effects**: Animasi hover pada kartu produk
- **Image Fallback**: Placeholder untuk gambar yang gagal dimuat

## Pengembangan

### Menambah Fitur Baru
1. Buat komponen di folder `src/components/`
2. Tambah types di `src/types/` jika diperlukan
3. Update API service di `src/services/api.ts`
4. Import dan gunakan di komponen yang memerlukan

### Styling
- Gunakan Chakra UI components
- Custom styling melalui props Chakra UI
- Modifikasi tema di `src/theme.ts` untuk perubahan global

## Troubleshooting

### Backend Connection Error
- Pastikan backend berjalan di `http://localhost:5000`
- Check CORS settings di backend
- Verify API endpoints

### Build Errors
- Hapus `node_modules` dan `package-lock.json`
- Jalankan `npm install` ulang
- Check TypeScript errors dengan `npm run build`