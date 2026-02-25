'use client'
import { useState } from 'react'
import WhatsAppButton from './WhatsAppButton'

export default function ProductCard({ product }) {
  const [selectedFlavor, setSelectedFlavor] = useState(product.flavors[0])
  const [selectedNicotine, setSelectedNicotine] = useState(product.nicotine[0])
  const [quantity, setQuantity] = useState(1)

  const whatsappMessage = `Olá! Gostaria de comprar:
*Produto:* ${product.name}
*Marca:* ${product.brand}
*Sabor:* ${selectedFlavor}
*Nicotina:* ${selectedNicotine}
*Quantidade:* ${quantity}
*Preço unitário:* R$ ${product.price.toFixed(2)}
*Total:* R$ ${(product.price * quantity).toFixed(2)}`

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
          
          <WhatsAppButton message={whatsappMessage} />
        </div>
      </div>
    </div>
  )
}