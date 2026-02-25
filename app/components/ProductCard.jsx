'use client'
import { useState } from 'react'
import { useCarrinho } from './CarrinhoContext'
import { ShoppingCart } from 'lucide-react'

export default function ProductCard({ product }) {
  const [selectedFlavor, setSelectedFlavor] = useState(product.flavors[0])
  const [selectedNicotine, setSelectedNicotine] = useState(product.nicotine[0])
  const [quantity, setQuantity] = useState(1)
  
  const { adicionarAoCarrinho } = useCarrinho()

  const handleAddToCart = () => {
    adicionarAoCarrinho(
      product,
      selectedFlavor,
      selectedNicotine,
      quantity
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48 bg-gray-200">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.brand}</p>
          </div>
          <span className="text-xl font-bold text-green-600">
            R$ {product.price.toFixed(2)}
          </span>
        </div>
        
        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
        
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sabor:
            </label>
            <select 
              value={selectedFlavor}
              onChange={(e) => setSelectedFlavor(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {product.flavors.map(flavor => (
                <option key={flavor} value={flavor}>{flavor}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nicotina:
            </label>
            <select 
              value={selectedNicotine}
              onChange={(e) => setSelectedNicotine(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {product.nicotine.map(nic => (
                <option key={nic} value={nic}>{nic}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quantidade:
            </label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Botão Adicionar ao Carrinho */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
          >
            <ShoppingCart className="w-5 h-5" />
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  )
}