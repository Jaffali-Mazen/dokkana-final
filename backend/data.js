import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Azmy',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      "name": "CELIO Slim shirt",
      "slug": "CELIO-slim-shirt",
      "category": "Shirts",
      "image": "/images/p1.jpg", 
      "price": 120,
      "countInStock": 10,
      "brand": "CELIO",
      "rating": 4.5,
      "numReviews": 10,
      "description": "high quality shirt",
    },
    {
      "name": "CELIO Fit Shirt",
      "slug": "CELIO-fit-shirt",
      "category": "Shirts",
      "image": "/images/p2.jpg",
      "price": 250,
      "countInStock": 0,
      "brand": "CELIO",
      "rating": 4.0,
      "numReviews": 10,
      "description": "high quality product",
    },
    {
  
      "name": "ZARA Slim Pant",
      "slug": "ZARA-slim-pant",
      "category": "Pants",
      "image": "/images/p3.jpg",
      "price": 25,
      "countInStock": 15,
      "brand": "ZARA",
      "rating": 4.5,
      "numReviews": 14,
      "description": "high quality product",
    },
    {
      "name": "ZARA Fit Pant",
      "slug": "ZARA-fit-pant",
      "category": "Pants",
      "image": "/images/p4.jpg",
      "price": 65,
      "countInStock": 5,
      "brand": "ZARA",
      "rating": 4.5,
      "numReviews": 10,
      "description": "high quality product"
    },
  ],
};
export default data;
