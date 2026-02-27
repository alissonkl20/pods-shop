// app/components/Header.tsx
"use client"

import { useState, useEffect } from 'react';
import { 
  Citrus, 
  Snowflake, 
  Blend, 
  List,
  ChevronDown,
  ShoppingBag,
  Menu,
  X
} from 'lucide-react';
import { useCarrinho } from './CarrinhoContext';
import { Category } from '../types/index';

export default function Header() {
  const [showCategories, setShowCategories] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItens, setMostrarCarrinho } = useCarrinho();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories: { id: Category; name: string; icon: any }[] = [
    { id: 'IGNITE', name: 'IGNITE', icon: Citrus },
    { id: 'ELFBAR', name: 'ELFBAR', icon: Snowflake },
    { id: 'OXBAR', name: 'OXBAR', icon: Blend },
    { id: 'BLACKSHEEP', name: 'BLACK SHEEP', icon: Blend }
  ];

  const scrollToProducts = (category: Category) => {
    setShowCategories(false);
    setShowMobileMenu(false);
    
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMobileMenu(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-r from-black/95 via-gray-900/95 to-black/95 backdrop-blur-md shadow-lg' 
        : 'bg-gradient-to-r from-black via-gray-900 to-black'
    } border-b border-pink-600/20`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div className="relative">
              <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">
                VN
              </span>
              <span className="absolute -top-1 -right-2 w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
            </div>
            <span className="text-xl sm:text-2xl font-light text-gray-200">Pods</span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4 relative">
            {/* Carrinho */}
            <button
              onClick={() => setMostrarCarrinho(true)}
              className="relative p-1.5 sm:p-2 text-gray-300 hover:text-pink-400 transition-colors"
              aria-label="Carrinho"
            >
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
              {totalItens > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs font-bold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center animate-pulse">
                  {totalItens}
                </span>
              )}
            </button>

            {/* Botão Catálogo - Desktop */}
            <div className="hidden sm:block relative">
              <button 
                className="bg-gradient-to-r from-pink-600 to-pink-500 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl hover:from-pink-700 hover:to-pink-600 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-pink-600/25 hover:shadow-pink-600/40 text-sm sm:text-base"
                onClick={() => setShowCategories(!showCategories)}
              >
                <List className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden lg:inline">Catálogo</span>
                <span className="lg:hidden">Cat.</span>
                <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 ${showCategories ? 'rotate-180' : ''}`} />
              </button>

              {/* Menu Categorias Desktop */}
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

            {/* Menu Mobile Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-1.5 sm:p-2 text-gray-300 hover:text-pink-400 transition-colors"
              aria-label="Menu"
            >
              {showMobileMenu ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden fixed inset-x-0 top-[57px] sm:top-[65px] bg-gradient-to-b from-gray-900 to-black border-t border-gray-800 shadow-2xl z-50 max-h-[calc(100vh-57px)] sm:max-h-[calc(100vh-65px)] overflow-y-auto">
            <div className="container mx-auto px-4 py-4">
              {/* Categorias Mobile */}
              <div className="border-t border-gray-800 pt-4">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
                  Categorias
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={category.id}
                        className="w-full text-left px-3 py-3 text-gray-200 hover:bg-pink-600/10 rounded-xl transition-all duration-300 flex items-center gap-4"
                        onClick={() => scrollToProducts(category.id)}
                      >
                        <div className="w-8 h-8 bg-pink-600/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-4 h-4 text-pink-400" />
                        </div>
                        <span className="font-medium">{category.name}</span>
                      </button>
                    );
                  })}
                  
                  <button
                    className="w-full text-left px-3 py-3 text-gray-200 hover:bg-purple-600/10 rounded-xl transition-all duration-300 flex items-center gap-4"
                    onClick={() => scrollToProducts('todos')}
                  >
                    <div className="w-8 h-8 bg-purple-600/10 rounded-lg flex items-center justify-center">
                      <List className="w-4 h-4 text-purple-400" />
                    </div>
                    <span className="font-medium">Todos os produtos</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}