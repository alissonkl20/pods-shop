"use client"

import { useState } from 'react';
import { productsByCategory } from '../data/products';
import { 
  Citrus, 
  Snowflake, 
  Blend, 
  List,
  ChevronDown,
  ShoppingBag
} from 'lucide-react';
import { useCarrinho } from './CarrinhoContext';

export default function Header() {
  const [showCategories, setShowCategories] = useState(false);
  const { totalItens, setMostrarCarrinho } = useCarrinho();

  const categories = [
    { id: 'citricos', name: 'Cítricos', icon: Citrus },
    { id: 'mentol', name: 'Mentolados', icon: Snowflake },
    { id: 'mistos', name: 'Mistos', icon: Blend }
  ];

  const scrollToProducts = (category) => {
    setShowCategories(false);
    
    setTimeout(() => {
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
        
        window.dispatchEvent(new CustomEvent('filterProducts', { 
          detail: { category } 
        }));
      }
    }, 100);
  };

  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-black shadow-lg sticky top-0 z-50 border-b border-pink-600/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-1 group">
            <div className="relative">
              <span className="text-3xl font-black bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">
                NV
              </span>
              <span className="absolute -top-1 -right-2 w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
            </div>
            <span className="text-2xl font-light text-gray-200">Pods</span>
            <span className="text-2xl font-black bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Shop
            </span>
          </div>
          
          {/* Navegação Desktop */}
          <nav className="hidden md:flex space-x-8">
            {['Início', 'Produtos', 'Sobre', 'Contato'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-pink-400 transition relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4 relative">
            {/* Carrinho */}
            <button
              onClick={() => setMostrarCarrinho(true)}
              className="relative p-2 text-gray-300 hover:text-pink-400 transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              {totalItens > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {totalItens}
                </span>
              )}
            </button>

            {/* Botão Catálogo */}
            <div className="relative">
              <button 
                className="bg-gradient-to-r from-pink-600 to-pink-500 text-white px-5 py-2.5 rounded-xl hover:from-pink-700 hover:to-pink-600 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-pink-600/25 hover:shadow-pink-600/40"
                onClick={() => setShowCategories(!showCategories)}
              >
                <List className="w-4 h-4" />
                <span>Catálogo</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showCategories ? 'rotate-180' : ''}`} />
              </button>

              {/* Menu Categorias */}
              {showCategories && (
                <>
                  <div 
                    className="fixed inset-0 z-40"
                    onClick={() => setShowCategories(false)}
                  />
                  
                  <div className="absolute right-0 mt-3 w-64 bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl shadow-2xl z-50 overflow-hidden backdrop-blur-lg backdrop-filter">
                    <div className="py-2">
                      <div className="px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-gray-800/50">
                        Categorias
                      </div>
                      
                      {categories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                          <button
                            key={category.id}
                            className="w-full text-left px-5 py-4 text-gray-200 hover:bg-gradient-to-r hover:from-pink-600/20 hover:to-transparent transition-all duration-300 flex items-center gap-4 group"
                            onClick={() => scrollToProducts(category.id)}
                          >
                            <div className="w-8 h-8 bg-pink-600/10 rounded-lg flex items-center justify-center group-hover:bg-pink-600/20 transition-colors">
                              <IconComponent className="w-4 h-4 text-pink-400 group-hover:text-pink-300" />
                            </div>
                            <span className="font-medium">{category.name}</span>
                          </button>
                        );
                      })}

                      <div className="border-t border-gray-800/50 mt-2 pt-2">
                        <button
                          className="w-full text-left px-5 py-4 text-gray-200 hover:bg-gradient-to-r hover:from-pink-600/20 hover:to-transparent transition-all duration-300 flex items-center gap-4 group"
                          onClick={() => scrollToProducts('todos')}
                        >
                          <div className="w-8 h-8 bg-purple-600/10 rounded-lg flex items-center justify-center group-hover:bg-purple-600/20 transition-colors">
                            <List className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
                          </div>
                          <span className="font-medium">Todos os produtos</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}