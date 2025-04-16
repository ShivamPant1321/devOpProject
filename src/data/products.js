export const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 99.99,
    description: "Premium noise-cancelling headphones with crystal clear sound quality and 30-hour battery life.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
    rating: 4.5,
    inStock: true,
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Quick charge capability",
      "Bluetooth 5.0",
      "Built-in microphone"
    ]
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 149.99,
    description: "Track your fitness goals with this advanced smartwatch. Features heart rate monitoring, sleep tracking, and more.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
    rating: 4.2,
    inStock: true,
    features: [
      "Heart rate monitoring",
      "Sleep tracking",
      "Water resistant",
      "GPS tracking",
      "7-day battery life"
    ]
  },
  {
    id: 3,
    name: "Premium Coffee Maker",
    price: 129.99,
    description: "Start your day right with this programmable coffee maker. Features multiple brew strengths and a thermal carafe.",
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Home & Kitchen",
    rating: 4.7,
    inStock: true,
    features: [
      "Programmable timer",
      "Multiple brew strengths",
      "Thermal carafe",
      "Auto shut-off",
      "Easy-clean design"
    ]
  },
  {
    id: 4,
    name: "Leather Messenger Bag",
    price: 79.99,
    description: "Classic leather messenger bag perfect for work or school. Features multiple compartments and adjustable strap.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Fashion",
    rating: 4.3,
    inStock: true,
    features: [
      "Genuine leather",
      "Multiple compartments",
      "Laptop pocket",
      "Adjustable strap",
      "Durable hardware"
    ]
  },
  {
    id: 5,
    name: "Portable Bluetooth Speaker",
    price: 59.99,
    description: "Take your music anywhere with this waterproof, portable Bluetooth speaker with 20-hour battery life.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
    rating: 4.1,
    inStock: true,
    features: [
      "Waterproof design",
      "20-hour battery life",
      "Built-in microphone",
      "Bluetooth 5.0",
      "Compact size"
    ]
  },
  {
    id: 6,
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    description: "Keep your drinks cold for 24 hours or hot for 12 hours with this vacuum-insulated water bottle.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Home & Kitchen",
    rating: 4.8,
    inStock: true,
    features: [
      "Vacuum insulation",
      "BPA-free",
      "Leak-proof lid",
      "Stainless steel construction",
      "Multiple sizes available"
    ]
  },
  {
    id: 7,
    name: "Organic Cotton T-Shirt",
    price: 19.99,
    description: "Comfortable and eco-friendly t-shirt made from 100% organic cotton.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Fashion",
    rating: 4.0,
    inStock: true,
    features: [
      "100% organic cotton",
      "Eco-friendly",
      "Soft and comfortable",
      "Multiple colors available",
      "Unisex design"
    ]
  },
  {
    id: 8,
    name: "Smart Home Security Camera",
    price: 89.99,
    description: "Keep your home safe with this HD security camera featuring night vision and motion detection.",
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
    rating: 4.4,
    inStock: false,
    features: [
      "1080p HD video",
      "Night vision",
      "Motion detection",
      "Two-way audio",
      "Cloud storage option"
    ]
  }
];

export const categories = [
  "All",
  "Electronics",
  "Home & Kitchen",
  "Fashion",
  "Books",
  "Toys & Games",
  "Health & Beauty"
];

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getProductsByCategory = (category) => {
  if (category === "All") return products;
  return products.filter(product => product.category === category);
};
