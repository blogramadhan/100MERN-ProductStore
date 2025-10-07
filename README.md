# 🏪 Product Store - MERN Stack Application

Aplikasi Product Store yang dibangun dengan MERN Stack (MongoDB, Express.js, React, Node.js) untuk mengelola produk toko dengan antarmuka yang menarik menggunakan Chakra UI.

## ✨ Fitur

### Backend (Node.js + Express + MongoDB)
- ✅ **CRUD API**: Create, Read, Update, Delete produk
- ✅ **MongoDB Integration**: Database untuk menyimpan data produk
- ✅ **Error Handling**: Penanganan error yang robust
- ✅ **Validation**: Validasi input data
- ✅ **RESTful API**: Endpoint yang mengikuti standar REST

### Frontend (React + TypeScript + Chakra UI)
- ✅ **Modern UI**: Desain yang menarik menggunakan Chakra UI
- ✅ **Responsive Design**: Tampilan optimal di semua perangkat
- ✅ **CRUD Operations**: Tambah, lihat, edit, dan hapus produk
- ✅ **Loading States**: Indikator loading yang informatif
- ✅ **Error Handling**: Penanganan error yang user-friendly
- ✅ **Toast Notifications**: Notifikasi sukses dan error
- ✅ **Image Preview**: Preview gambar sebelum menyimpan
- ✅ **TypeScript**: Type safety untuk development yang lebih baik

## 🚀 Teknologi yang Digunakan

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Web framework
- **MongoDB** - Database NoSQL
- **Mongoose** - ODM untuk MongoDB
- **dotenv** - Environment variables

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Chakra UI** - Component library
- **Axios** - HTTP client
- **React Icons** - Icon library
- **Framer Motion** - Animations

## 📦 Instalasi dan Menjalankan

### Prerequisites
- Node.js (v16 atau lebih baru)
- MongoDB (local atau cloud)
- npm atau yarn

### 1. Clone Repository
```bash
git clone <repository-url>
cd 100MERN-ProductStore
```

### 2. Install Dependencies

#### Backend
```bash
npm install
```

#### Frontend
```bash
npm run install:frontend
```

### 3. Setup Environment Variables

Buat file `.env` di root directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/productstore
```

### 4. Menjalankan Aplikasi

#### Development Mode

**Backend saja:**
```bash
npm run dev:backend
```

**Frontend saja:**
```bash
npm run dev:frontend
```

**Kedua-duanya (terminal terpisah):**
```bash
# Terminal 1 - Backend
npm run dev:backend

# Terminal 2 - Frontend  
npm run dev:frontend
```

### 5. Akses Aplikasi

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## 📁 Struktur Proyek

```
100MERN-ProductStore/
├── backend/
│   ├── config/
│   │   └── db.js              # Database configuration
│   ├── controllers/
│   │   └── product.controller.js  # Product business logic
│   ├── models/
│   │   └── product.model.js   # Product data model
│   ├── routes/
│   │   └── product.route.js   # Product API routes
│   └── server.js              # Server entry point
├── frontend/
│   ├── public/                # Static files
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductForm.tsx
│   │   │   └── ProductList.tsx
│   │   ├── services/          # API services
│   │   │   └── api.ts
│   │   ├── types/             # TypeScript types
│   │   │   └── product.ts
│   │   ├── App.tsx            # Main app component
│   │   ├── index.tsx          # App entry point
│   │   └── theme.ts           # Chakra UI theme
│   ├── package.json
│   └── README.md
├── package.json               # Root package.json
└── README.md                  # This file
```

## 🔌 API Endpoints

### Products
- `GET /api/products` - Ambil semua produk
- `POST /api/products` - Tambah produk baru
- `PUT /api/products/:id` - Update produk
- `DELETE /api/products/:id` - Hapus produk

### Request/Response Format

#### Create Product
```json
POST /api/products
{
  "name": "Nama Produk",
  "price": 100000,
  "image": "https://example.com/image.jpg"
}
```

#### Response
```json
{
  "success": true,
  "data": {
    "_id": "product_id",
    "name": "Nama Produk",
    "price": 100000,
    "image": "https://example.com/image.jpg",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

## 🎨 UI/UX Features

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

## 🛠️ Development

### Menambah Fitur Baru

#### Backend
1. Tambah model di `backend/models/`
2. Buat controller di `backend/controllers/`
3. Definisikan routes di `backend/routes/`
4. Update server.js jika diperlukan

#### Frontend
1. Buat komponen di `frontend/src/components/`
2. Tambah types di `frontend/src/types/` jika diperlukan
3. Update API service di `frontend/src/services/api.ts`
4. Import dan gunakan di komponen yang memerlukan

### Styling
- Gunakan Chakra UI components
- Custom styling melalui props Chakra UI
- Modifikasi tema di `frontend/src/theme.ts` untuk perubahan global

## 🐛 Troubleshooting

### Backend Issues
- **Database Connection Error**: Pastikan MongoDB berjalan dan MONGODB_URI benar
- **Port Already in Use**: Ganti PORT di .env atau kill process yang menggunakan port 5000
- **CORS Error**: Pastikan frontend dan backend berjalan di port yang benar

### Frontend Issues
- **Build Errors**: Hapus `node_modules` dan `package-lock.json`, lalu `npm install` ulang
- **API Connection Error**: Pastikan backend berjalan di `http://localhost:5000`
- **TypeScript Errors**: Check type definitions di `src/types/`

### Common Commands
```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Check for vulnerabilities
npm audit
npm audit fix
```

## 📝 Scripts

```bash
# Development
npm run dev:backend          # Jalankan backend
npm run dev:frontend         # Jalankan frontend

# Installation
npm run install:frontend     # Install frontend dependencies

# Build
npm run build:frontend       # Build frontend untuk production
```

## 🤝 Contributing

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👨‍💻 Author

Dibuat dengan ❤️ untuk pembelajaran MERN Stack

---

**Happy Coding! 🚀**