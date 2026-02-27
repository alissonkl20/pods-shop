export const productsByCategory = {
  IGNITE: [
    {
      id: 1,
      name: "Pod Ignite V80",
      brand: "Ignite",
      price: 110.00,
      description: "Bateria de 800mAh, pods reutilizáveis, carregamento USB-C",
         image: "/images/1.jpg",
      flavors: ["Mentol", "Frutas Vermelhas", "Melancia", "Uva"],
      nicotine: ["0mg", "20mg", "50mg"]
    },
    {
      id: 2,
      name: "Pod Ignite V155",
      brand: "Ignite",
      price: 130.00,
      description: "1200mAh, tela digital, controle de voltagem",
          image: "/images/2.jpg",
      flavors: ["Mentol", "Red Fruit", "Kiwi", "Abacaxi"],
      nicotine: ["0mg", "20mg", "50mg"]
    },
    {
      id: 3,
     name: "Pod Ignite V300",
      brand: "Ignite",
      price: 155.00,
      description: "500mAh, pods com 1.6ml, sabores cítricos intensos",
          image: "/images/3.jpg",
      flavors: ["Limão Siciliano", "Laranja", "Tangerina", "Grapefruit"],
      nicotine: ["20mg", "50mg"]
    },
     {
      id: 4,
      name: "Pod Ignite V400 MIX",
      brand: "Ignite",
      price: 160.00,
      description: "Bateria 400mAh, design compacto, pods descartáveis",
          image: "/images/4.jpg",
      flavors: ["Mentol", "Cereja", "Limão", "Pêssego"],
      nicotine: ["20mg", "50mg"]
    },
  ],
  
  BLACKSHEEP: [
    {
      id: 5,
      name: "SHEEP 30K",
      brand: "BLACK SHEEP",
      price: 155.00,
      description: "600mAh, pods com 2.4ml, cooling agent extra",
          image: "/images/5.jpg",
      flavors: ["Mentol Clássico", "Mentol com Limão", "Mentol com Uva", "Mentol com Melancia"],
      nicotine: ["20mg", "50mg"]
    },
    {
      id: 6,
      name: "SHEEP40K",
      brand: "BLACK SHEEP",
      price: 165.00,
      description: "700mAh, tecnologia de resfriamento, ice effect",
         image: "/images/6.jpg",
      flavors: ["Menta", "Hortelã", "Ice Berry", "Wintergreen"],
      nicotine: ["0mg", "20mg", "50mg"]
    }
  ],
  
  ELFBAR: [
    {
      id: 7,
      name: "ELF 30K",
      brand: "ELFBAR",
      price: 145.00,
      description: "600mAh, pods com 2ml, coil 1.2ohm",
         image: "/images/7.jpg",
      flavors: ["Mentol", "Morango", "Manga", "Blueberry"],
      nicotine: ["0mg", "20mg", "50mg"]
    },
    {
      id: 8,
      name: "ELF 40K",
      brand: "ELFBAR",
      price: 160.00,
      description: "1000mAh, airflow ajustável, pods 3ml",
          image: "/images/8.jpg",
      flavors: ["Mentol", "Tutti-frutti", "Banana", "Coco"],
      nicotine: ["0mg", "20mg", "50mg"]
    }
  ],

    OXBAR: [
    {
      id: 9,
      name: "OX 50K",
      brand: "OXBAR",
      price: 170,
      description: "Bateria 350mAh, compatível com pods Juul",
          image: "/images/9.jpg",
      flavors: ["Mentol", "Tabaco", "Manga", "Creme"],
      nicotine: ["20mg", "50mg"]
    },
  ],
};

// Array completo (para manter compatibilidade)
export const products = Object.values(productsByCategory).flat();