import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'sachin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'abhi',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
    products: [
      {
        
        name: "Painting",
        category: "painting",
        image: "/images/p1.jpg",
        price: 2999,
        countInStock: 10,
        brand: "paintart",
        rating: 4.5,
        numReviews: 10,
        description: "amazing painting",
      },
      {
        
        name: "sketch",
        category: "sketch",
        image: "/images/p2.jpg",
        price: 1599,
        countInStock: 20,
        brand: "sketchss",
        rating: 4.0,
        numReviews: 10,
        description: "beautifull sketch",
      },
      {
        
        name: "Pencil sketch",
        category: "sketch",
        image: "/images/p3.jpg",
        price: 3499,
        countInStock: 0,
        brand: "sketches",
        rating: 4.8,
        numReviews: 17,
        description: "amazing sketch",
      },
      {
        
        name: "Fine sketch",
        category: "sketch",
        image: "/images/p4.jpg",
        price: 2599,
        countInStock: 15,
        brand: "sketches",
        rating: 4.5,
        numReviews: 8,
        description: "amazing sketch",
      },
      {
        
        name: "face sculpture",
        category: "sculpture",
        image: "/images/p5.jpg",
        price: 1599,
        countInStock: 5,
        brand: "sketchss",
        rating: 3.5,
        numReviews: 12,
        description: "fantastic sculpture",
      },
      {
        
        name: "hall sketch",
        category: "sketch",
        image: "/images/p6.jpg",
        price: 3299,
        countInStock: 12,
        brand: "sketchess",
        rating: 4.5,
        numReviews: 20,
        description: "amazing sketch",
      },
      {
        
        name: "Mirror sketch",
        category: "sketch",
        image: "/images/p7.jpg",
        price: 1999,
        countInStock: 10,
        brand: "sketchss",
        rating: 3.5,
        numReviews: 23,
        description: "awesome sketch",
      },
      {
        
        name: "painting",
        category: "painting",
        image: "/images/p8.jpg",
        price: 2799,
        countInStock: 10,
        brand: "ipaint",
        rating: 4.5,
        numReviews: 18,
        description: "amazing painting",
      },
    ],
  };
  export default data;
  