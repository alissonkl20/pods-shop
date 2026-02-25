"use client"

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import { products, productsByCategory } from './data/products';

// Definindo um tipo para as categorias
type Category = 'todos' | 'citricos' | 'mentol' | 'mistos';

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState<Category>('todos');

  useEffect(() => {
    // Listener para filtrar produtos quando clicar nas categorias
    const handleFilter = (event: any) => {
      const category = event.detail.category as Category;
      setActiveCategory(category);
      
      if (category === 'todos') {
        setFilteredProducts(products);
      } else {
        setFilteredProducts(productsByCategory[category] || []);
      }
    };

    window.addEventListener('filterProducts', handleFilter);
    
    return () => {
      window.removeEventListener('filterProducts', handleFilter);
    };
  }, []);

  // Título dinâmico baseado na categoria
  const getTitle = () => {
    switch(activeCategory) {
      case 'citricos':
        return 'Pods Cítricos 🍋';
      case 'mentol':
        return 'Pods Mentolados ❄️';
      case 'mistos':
        return 'Pods Mistos 🔄';
      default:
        return 'Nosso Catálogo';
    }
  };

  return (
    <>
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Os Melhores <span className="text-green-600">Pods</span> do Mercado
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encontre a melhor experiência vaping com nossa seleção de pods de alta qualidade
          </p>
        </section>

        {/* Products Grid */}
        <section id="products" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            {getTitle()}
          </h2>
          
          {/* Indicador de categoria ativa (opcional) */}
          {activeCategory !== 'todos' && (
            <div className="text-center mb-4">
              <button
                onClick={() => {
                  setActiveCategory('todos');
                  setFilteredProducts(products);
                }}
                className="text-pink-600 hover:text-pink-700 text-sm"
              >
                ← Ver todos os produtos
              </button>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Mensagem se não houver produtos */}
          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 py-12">
              Nenhum produto encontrado nesta categoria.
            </p>
          )}
        </section>

        <section id="about" className="bg-black rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-pink-600 mb-4 text-center">
            Sobre Nós
          </h2>
          <p className="text-gray-100 text-center max-w-3xl mx-auto">
            Somos especialistas em pods e acessórios para vaping. Trabalhamos apenas com 
            produtos originais e de alta qualidade, garantindo a melhor experiência para 
            nossos clientes.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}