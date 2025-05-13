const products = [
  {
    id: 1,
    title: "Asus ProArt GeForce RTX 4070",
    price: 999.99,
    category: "Graphic Cards",
    description:
      "The SFF-ready ProArt GeForce RTX™ 4070 OC Edition 12GB GDDR6X brings elegant and minimalist style to empower creator PC builds with full-scale GeForce RTX™ 40 Series performance",
    image: "/assets/asus_rog-removebg-preview.png",
  },
  {
    id: 2,
    title: "ASUS TUF Gaming Radeon™ RX 9070 XT OC Edition 16GB GDDR6",
    price: 899.99,
    category: "Graphic Cards",
    description:
      "ASUS TUF Gaming Radeon RX 9070 XT OC Edition with military-grade components, lower temps, and enhanced durability",
    image: "/src/assets/Png.png",
  },
  {
    id: 3,
    title: "ASUS TUF Gaming Radeon™ RX 9070 XT OC Edition 16GB GDDR6",
    price: 899.99,
    category: "Graphic Cards",
    description:
      "ASUS TUF Gaming Radeon RX 9070 XT OC Edition with military-grade components, lower temps, and enhanced durability",
    image: "/src/assets/Png.png",
  },
  {
    id: 4,
    title: "ROG Strix GeForce RTX™ 5070 12GB GDDR7 OC Edition",
    price: 679.99,
    category: "Graphic Cards",
    description:
      "The ROG Strix GeForce RTX™ 5070 OC Edition 12GB GDDR7 with advanced cooling system provides you premium power delivery.",
    image: "/src/assets/msi-removebg-preview.png",
  },
  {
    id: 5,
    title: "MacBook Air 13 inch M2",
    price: 1.029,
    category: "Macbook",
    description:
      "The MacBook Air M2 with a sleek fanless design and the powerful M2 chip delivers incredible performance in an ultra-portable form factor.",
    image: "/src/assets/macbookairm2-removebg-preview.png",
  },
  {
    id: 6,
    title: "MacBook Air 13 inch M3",
    price: 1.229,
    category: "Macbook",
    description:
      "The MacBook Air M3, featuring the next-gen M3 chip and Liquid Retina display, offers seamless multitasking with outstanding battery life.",
    image: "/src/assets/macbookairm3-removebg-preview.png",
  },
  {
    id: 7,
    title: "MacBook Air 13 inch M4",
    price: 1.529,
    category: "Macbook",
    description:
      "The MacBook Air M4, equipped with the cutting-edge M4 chip and AI-powered optimizations, redefines efficiency and portability for modern users.",
    image: "/src/assets/m4pro-removebg-preview.png",
  },
  {
    id: 8,
    title: "MacBook Pro 14 inch M3",
    price: 1.529,
    category: "Macbook",
    description:
      "The MacBook Pro M3 with ProMotion display and advanced thermal system unleashes the full potential of the M3 chip for professionals and creators.",
    image: "/src/assets/prom3.png",
  },
  {
    id: 9,
    title: "MacBook Pro 14 inch M2",
    price: 1.529,
    category: "Macbook",
    description:
      "The MacBook Pro M2 combines the power of the M2 chip with an active cooling system, ensuring sustained high performance for intensive workloads.",
    image: "/src/assets/macbook-pro-16.png",
  },
  {
    id: 10,
    title: "iMac 24 inch Nano M4",
    price: 1.729,
    category: "iMac",
    description:
      "With the elegance of Silver and the power of the M4 chip, the iMac M4 redefines performance and style for a seamless creative workflow.",
    image: "/src/assets/imac-24-inch-m4-sliver.png",
  },
  {
    id: 11,
    title: "iMac 24 inch M4",
    price: 1.729,
    category: "iMac",
    description:
      "The iMac M4 in stunning Orange, powered by the next-gen M4 chip, delivers exceptional speed and vibrant visuals in an ultra-thin all-in-one design.",
    image: "/src/assets/imac-24-inch-m4-organe.png",
  },
  {
    id: 12,
    title: "iMac 24 inch M3",
    price: 1.229,
    category: "iMac",
    description:
      "The iMac M3 in striking Blue features a brilliant 4.5K Retina display and the powerful M3 chip, offering smooth performance for work and entertainment.",
    image: "/src/assets/imac-m3-blue.png",
  },
  {
    id: 13,
    title: "iMac 24 inch M3",
    price: 1.229,
    category: "iMac",
    description:
      "Experience the perfect blend of beauty and power with the iMac M3 in Pink, designed to enhance your space while delivering outstanding efficiency.",
    image: "/src/assets/imac-m3-pink.png",
  },
  {
    id: 14,
    title: "Mac mini M4 Pro",
    price: 1.229,
    category: "Accessory",
    description:
      "Experience the perfect blend of beauty and power with the iMac M3 in Pink, designed to enhance your space while delivering outstanding efficiency.",
    image: "/src/assets/mac-mini-m4-pro-24gb-1tb-thumb-16-650x650.png",
  },
  {
    id: 15,
    title: "Mac Studio M2 Max",
    price: 1.229,
    category: "Accessory",
    description:
      "Experience the perfect blend of beauty and power with the iMac M3 in Pink, designed to enhance your space while delivering outstanding efficiency.",
    image: "/src/assets/mac-studio-m2-max-2023-150623-105154-650x650.png",
  },
  {
    id: 16,
    title: "Mac Studio M2 Ultra",
    price: 1.229,
    category: "Accessory",
    description:
      "Experience the perfect blend of beauty and power with the iMac M3 in Pink, designed to enhance your space while delivering outstanding efficiency.",
    image: "/src/assets/mac-studio-m2-ultra-64gb-1tb-thumb-1-650x650.png",
  },
  {
    id: 17,
    title: "Adapter Apple",
    price: 229,
    category: "Accessory",
    description:
      "Experience the perfect blend of beauty and power with the iMac M3 in Pink, designed to enhance your space while delivering outstanding efficiency.",
    image: "/src/assets/adapter-sac-apple-type-c-70w-thumb-650x650.png",
  },
  {
    id: 18,
    title: "Magic Keyboard",
    price: 729,
    category: "Accessory",
    description:
      "Experience the perfect blend of beauty and power with the iMac M3 in Pink, designed to enhance your space while delivering outstanding efficiency.",
    image: "/src/assets/magic-keyboard-thumb-650x650.png",
  },
];
export default products