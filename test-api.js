// Test script untuk API Product Store
// Jalankan dengan: node test-api.js

const API_BASE_URL = 'http://localhost:5000/api';

async function testAPI() {
  console.log('🧪 Testing Product Store API...\n');

  try {
    // Test 1: Health Check
    console.log('1. Testing Health Check...');
    const healthResponse = await fetch('http://localhost:5000/');
    const healthData = await healthResponse.json();
    console.log('✅ Health Check:', healthData.message);
    console.log('');

    // Test 2: Get All Products
    console.log('2. Testing Get All Products...');
    const getResponse = await fetch(`${API_BASE_URL}/products`);
    const products = await getResponse.json();
    console.log('✅ Get Products:', products.success ? 'Success' : 'Failed');
    console.log(`   Found ${products.data?.length || 0} products`);
    console.log('');

    // Test 3: Create New Product
    console.log('3. Testing Create Product...');
    const newProduct = {
      name: 'Test Product API',
      price: 500000,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop'
    };

    const createResponse = await fetch(`${API_BASE_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });

    const createdProduct = await createResponse.json();
    console.log('✅ Create Product:', createdProduct.success ? 'Success' : 'Failed');
    
    if (createdProduct.success) {
      const productId = createdProduct.data._id;
      console.log(`   Created product with ID: ${productId}`);
      console.log('');

      // Test 4: Update Product
      console.log('4. Testing Update Product...');
      const updateData = {
        name: 'Updated Test Product',
        price: 750000,
        image: newProduct.image
      };

      const updateResponse = await fetch(`${API_BASE_URL}/products/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });

      const updateResult = await updateResponse.json();
      console.log('✅ Update Product:', updateResult.success ? 'Success' : 'Failed');
      console.log('');

      // Test 5: Delete Product
      console.log('5. Testing Delete Product...');
      const deleteResponse = await fetch(`${API_BASE_URL}/products/${productId}`, {
        method: 'DELETE',
      });

      const deleteResult = await deleteResponse.json();
      console.log('✅ Delete Product:', deleteResult.success ? 'Success' : 'Failed');
      console.log('');
    }

    // Test 6: Final Get All Products
    console.log('6. Testing Final Get All Products...');
    const finalGetResponse = await fetch(`${API_BASE_URL}/products`);
    const finalProducts = await finalGetResponse.json();
    console.log('✅ Final Get Products:', finalProducts.success ? 'Success' : 'Failed');
    console.log(`   Found ${finalProducts.data?.length || 0} products`);
    console.log('');

    console.log('🎉 All API tests completed successfully!');

  } catch (error) {
    console.error('❌ API Test Error:', error.message);
    console.log('\n💡 Make sure:');
    console.log('   - Backend is running on http://localhost:5000');
    console.log('   - MongoDB is connected');
    console.log('   - CORS is properly configured');
  }
}

// Run the test
testAPI();
