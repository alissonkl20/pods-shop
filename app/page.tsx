// app/page.tsx
"use client";

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import { products, productsByCategory } from './data/products';
import { ChevronRight, Sparkles, Shield, Truck, Star } from 'lucide-react';
import { Category } from './types';

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState<Category>('todos');
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleFilter = (event: CustomEvent<{ category: Category }>) => {
      const category = event.detail.category;
      setActiveCategory(category);
      setVisibleProducts(6);
      
      if (category === 'todos') {
        setFilteredProducts(products);
      } else {
        setFilteredProducts(productsByCategory[category] || []);
      }
    };

    window.addEventListener('filterProducts', handleFilter as EventListener);
    
    return () => {
      window.removeEventListener('filterProducts', handleFilter as EventListener);
    };
  }, []);

  const getTitle = () => {
    switch(activeCategory) {
      case 'IGNITE':
        return 'Pods Cítricos 🍋';
      case 'ELFBAR':
        return 'Pods ELFBAR ❄️';
      case 'OXBAR':
        return 'Pods OXBAR 🔄';
      case 'BLACKSHEEP':
        return 'Pods BLACK SHEEP 🐑';
      default:
        return 'Nosso Catálogo';
    }
  };

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleProducts(prev => prev + 3);
      setIsLoading(false);
    }, 800);
  };

  const displayedProducts = filteredProducts.slice(0, visibleProducts);
  const hasMore = visibleProducts < filteredProducts.length;

  const benefits = [
    { icon: Sparkles, text: 'Produtos Originais', desc: '100% autênticos' },
    { icon: Shield, text: 'Qualidade Garantida', desc: 'Selos de garantia' },
    { icon: Truck, text: 'Entrega Rápida', desc: 'jaraguá do sul' },
    { icon: Star, text: 'Melhores Preços', desc: 'Preços competitivos' }
  ];

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, pink 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-pink-600/20 backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-2 mb-4 sm:mb-6">
                <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse mr-2" />
                <span className="text-xs sm:text-sm text-pink-300 font-medium">
                  🔥 Promoção Especial
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2">
                Os Melhores{' '}
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Pods
                </span>
                <br className="hidden sm:block" /> do Mercado
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
                Encontre a melhor experiência vaping com nossa seleção de pods de alta qualidade, 
                sabores exclusivos e tecnologia de ponta.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
                <button 
                  onClick={() => {
                    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto bg-gradient-to-r from-pink-600 to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:from-pink-700 hover:to-pink-600 transition-all duration-300 font-semibold text-sm sm:text-base shadow-lg shadow-pink-600/25 hover:shadow-pink-600/40 flex items-center justify-center gap-2"
                >
                  Ver Catálogo
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                
                <button 
                  onClick={() => {
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-white/20 transition-all duration-300 font-semibold text-sm sm:text-base border border-white/20"
                >
                  Conheça Mais
                </button>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
              <path fill="#f9fafb" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
            </svg>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 -mt-12 relative z-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="inline-flex p-2 sm:p-3 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl mb-2 sm:mb-3">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-xs sm:text-sm lg:text-base mb-1">
                    {benefit.text}
                  </h3>
                  <p className="text-gray-500 text-xs hidden sm:block">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Products Grid */}
        <section id="products" className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 lg:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4 sm:mb-0">
              {getTitle()}
            </h2>
            
            {activeCategory !== 'todos' && (
              <button
                onClick={() => {
                  setActiveCategory('todos');
                  setFilteredProducts(products);
                  setVisibleProducts(6);
                }}
                className="group flex items-center gap-2 text-pink-600 hover:text-pink-700 transition-colors text-sm sm:text-base"
              >
                <span>Ver todos os produtos</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
          
          {displayedProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {displayedProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>

              {hasMore && (
                <div className="text-center mt-8 sm:mt-10 lg:mt-12">
                  <button
                    onClick={loadMore}
                    disabled={isLoading}
                    className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:from-pink-700 hover:to-pink-600 transition-all duration-300 font-semibold text-sm sm:text-base shadow-lg shadow-pink-600/25 hover:shadow-pink-600/40 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Carregando...</span>
                      </>
                    ) : (
                      <>
                        <span>Carregar mais produtos</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12 sm:py-16 lg:py-20">
              <div className="inline-flex p-4 bg-gray-100 rounded-full mb-4">
                <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" />
              </div>
              <p className="text-gray-500 text-base sm:text-lg">
                Nenhum produto encontrado nesta categoria.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('todos');
                  setFilteredProducts(products);
                  setVisibleProducts(6);
                }}
                className="mt-4 text-pink-600 hover:text-pink-700 text-sm sm:text-base font-medium"
              >
                ← Voltar para todos os produtos
              </button>
            </div>
          )}
        </section>

        {/* About Section */}
        <section id="about" className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-8 sm:py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                    Sobre Nós
                  </span>
                </h2>
                <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full" />
              </div>
              
              <div className="prose prose-sm sm:prose-lg prose-invert max-w-none text-center px-2">
                <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6">
                  Somos especialistas em pods e acessórios para vaping. Trabalhamos apenas com 
                  produtos originais e de alta qualidade, garantindo a melhor experiência para 
                  nossos clientes.
                </p>
                
                <div className="grid grid-cols-2 gap-3 sm:gap-6 mt-6 sm:mt-8">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold text-pink-500">500+</div>
                    <div className="text-xs sm:text-sm text-gray-400">Clientes Satisfeitos</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold text-pink-500">50+</div>
                    <div className="text-xs sm:text-sm text-gray-400">Produtos</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold text-pink-500">24/7</div>
                    <div className="text-xs sm:text-sm text-gray-400">Suporte</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold text-pink-500">100%</div>
                    <div className="text-xs sm:text-sm text-gray-400">Original</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
}