import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Load environment variables
dotenv.config();

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Product Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);

async function seedDemoData() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/productstore');
    console.log('Connected to MongoDB');

    // Read demo data
    const demoDataPath = path.join(__dirname, '..', 'demo-data.json');
    const demoData = JSON.parse(fs.readFileSync(demoDataPath, 'utf8'));

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert demo data
    const products = await Product.insertMany(demoData);
    console.log(`Inserted ${products.length} demo products`);

    // Display inserted products
    console.log('\nDemo products inserted:');
    products.forEach((product, index) => {
      console.log(`${index + 1}. ${product.name} - Rp ${product.price.toLocaleString('id-ID')}`);
    });

    console.log('\nDemo data seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding demo data:', error);
  } finally {
    // Close connection
    await mongoose.connection.close();
    console.log('Database connection closed');
  }
}

// Run the seeding function
seedDemoData();
