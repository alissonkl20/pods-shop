'use client'

import { useState } from 'react'
import { useCarrinho } from './CarrinhoContext'
import { ShoppingCart } from 'lucide-react'
import { ProductCardProps } from '../types'

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedFlavor, setSelectedFlavor] = useState(
    product.flavors?.[0] || ''
  )
  const [selectedNicotine, setSelectedNicotine] = useState(
    product.nicotine?.[0] || ''
  )
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
      
      {/* Imagem */}
      <div className="relative h-48 bg-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Conteúdo */}
      <div className="p-4">

        {/* Nome + Preço */}
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600">
              {product.brand}
            </p>
          </div>

          <span className="text-xl font-bold text-green-600">
            R$ {product.price.toFixed(2)}
          </span>
        </div>

        {/* Descrição */}
        <p className="text-sm text-gray-600 mb-3">
          {product.description}
        </p>

        {/* Seletor de Sabor */}
        {product.flavors && product.flavors.length > 0 && (
          <div className="mb-3">
            <label className="text-xs text-gray-500 block mb-1">
              Sabor:
            </label>

            <select
              value={selectedFlavor}
              onChange={(e) => setSelectedFlavor(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg text-sm"
            >
              {product.flavors.map((flavor) => (
                <option key={flavor} value={flavor}>
                  {flavor}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Quantidade */}
        <div className="mb-4">
          <label className="text-xs text-gray-500 block mb-1">
            Quantidade:
          </label>

          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                setQuantity((prev) => Math.max(1, prev - 1))
              }
              className="w-8 h-8 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
            >
              -
            </button>

            <span className="w-8 text-center">
              {quantity}
            </span>

            <button
              onClick={() =>
                setQuantity((prev) => prev + 1)
              }
              className="w-8 h-8 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Botão adicionar */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingCart size={18} />
          Adicionar ao Carrinho
        </button>

      </div>
    </div>
  )
}