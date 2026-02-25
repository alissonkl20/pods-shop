// data/products.js
export const productsByCategory = {
  citricos: [
    {
      id: 3,
      name: "Pod Mini Plus",
      brand: "Mini",
      price: 69.90,
      description: "Bateria 400mAh, design compacto, pods descartáveis",
      image: "/images/1.jpg",
      flavors: ["Mentol", "Cereja", "Limão", "Pêssego"],
      nicotine: ["20mg", "50mg"]
    },
    {
      id: 5,
      name: "Pod Elite Edition",
      brand: "Elite",
      price: 199.90,
      description: "1200mAh, tela digital, controle de voltagem",
      image: "/images/2.jpg",
      flavors: ["Mentol", "Red Fruit", "Kiwi", "Abacaxi"],
      nicotine: ["0mg", "20mg", "50mg"]
    },
    {
      id: 10,
      name: "Pod Citrus Burst",
      brand: "Citro",
      price: 89.90,
      description: "500mAh, pods com 1.6ml, sabores cítricos intensos",
      image: "/images/3.jpg",
      flavors: ["Limão Siciliano", "Laranja", "Tangerina", "Grapefruit"],
      nicotine: ["20mg", "50mg"]
    }
  ],
  
  mentol: [
    {
      id: 1,
      name: "Pod Ignite V8",
      brand: "Ignite",
      price: 89.90,
      description: "Bateria de 800mAh, pods reutilizáveis, carregamento USB-C",
      image: "/images/4.jpg",
      flavors: ["Mentol", "Frutas Vermelhas", "Melancia", "Uva"],
      nicotine: ["0mg", "20mg", "50mg"]
    },
    {
      id: 6,
      name: "Kit Juul Compatível",
      brand: "Juul Style",
      price: 79.90,
      description: "Bateria 350mAh, compatível com pods Juul",
      image: "/images/5.jpg",
      flavors: ["Mentol", "Tabaco", "Manga", "Creme"],
      nicotine: ["20mg", "50mg"]
    },
    {
      id: 9,
      name: "Pod Ice Cool",
      brand: "Arctic",
      price: 109.90,
      description: "700mAh, tecnologia de resfriamento, ice effect",
      image: "/images/6.jpg",
      flavors: ["Menta", "Hortelã", "Ice Berry", "Wintergreen"],
      nicotine: ["0mg", "20mg", "50mg"]
    },
    {
      id: 11,
      name: "Pod Menthol Extreme",
      brand: "Frost",
      price: 94.90,
      description: "600mAh, pods com 2.4ml, cooling agent extra",
      image: "/images/7.jpg",
      flavors: ["Mentol Clássico", "Mentol com Limão", "Mentol com Uva", "Mentol com Melancia"],
      nicotine: ["20mg", "50mg"]
    }
  ],
  
  mistos: [
    {
      id: 2,
      name: "Pod Air Max",
      brand: "Air",
      price: 119.90,
      description: "600mAh, pods com 2ml, coil 1.2ohm",
      image: "/images/8.jpg",
      flavors: ["Mentol", "Morango", "Manga", "Blueberry"],
      nicotine: ["0mg", "20mg", "50mg"]
    },
    {
      id: 4,
      name: "Pod Pro X",
      brand: "Pro",
      price: 149.90,
      description: "1000mAh, airflow ajustável, pods 3ml",
      image: "/images/9.jpg",
      flavors: ["Mentol", "Tutti-frutti", "Banana", "Coco"],
      nicotine: ["0mg", "20mg", "50mg"]
    },
    {
      id: 7,
      name: "Pod Tropical Mix",
      brand: "Tropical",
      price: 129.90,
      description: "800mAh, pods com 2.8ml, coil mesh 0.8ohm",
      image: "/images/10.jpg",
      flavors: ["Manga", "Maracujá", "Abacaxi", "Coco"],
      nicotine: ["0mg", "20mg", "50mg"]
    },
    {
      id: 8,
      name: "Pod Dessert Edition",
      brand: "Sweet",
      price: 139.90,
      description: "900mAh, pods com 3.2ml, coil 1.0ohm",
      image: "/images/11.jpg",
      flavors: ["Creme de Leite", "Baunilha", "Caramelo", "Chocolate"],
      nicotine: ["0mg", "20mg", "50mg"]
    }
  ]
};

// Array completo (para manter compatibilidade)
export const products = Object.values(productsByCategory).flat();