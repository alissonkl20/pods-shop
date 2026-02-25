'use client'

import { useCarrinho } from './CarrinhoContext';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

export default function CarrinhoDrawer() {
  const { 
    itens, 
    mostrarCarrinho, 
    setMostrarCarrinho, 
    removerItem, 
    atualizarQuantidade,
    totalPreco,
    totalItens,
    limparCarrinho
  } = useCarrinho();

  if (!mostrarCarrinho) return null;

  const gerarMensagemWhatsApp = () => {
    let mensagem = "🛍️ *Pedido via Carrinho NV Pods*\n\n";
    
    itens.forEach(item => {
      mensagem += `📦 *${item.nome}*\n`;
      mensagem += `   Marca: ${item.marca}\n`;
      mensagem += `   Sabor: ${item.sabor}\n`;
      mensagem += `   Nicotina: ${item.nicotina}\n`;
      mensagem += `   Quantidade: ${item.quantidade}\n`;
      mensagem += `   Subtotal: R$ ${(item.preco * item.quantidade).toFixed(2)}\n\n`;
    });
    
    mensagem += `━━━━━━━━━━━━━━━━\n`;
    mensagem += `*Total de itens:* ${totalItens}\n`;
    mensagem += `*Valor total:* R$ ${totalPreco.toFixed(2)}\n`;
    mensagem += `━━━━━━━━━━━━━━━━\n\n`;
    mensagem += `✅ *Forma de pagamento:* À combinar\n`;
    mensagem += `📍 *Entrega:* À combinar\n\n`;
    mensagem += `Aguardo confirmação do pedido! 🙏`;
    
    return mensagem;
  };

  return (
    <>
      {/* Overlay escuro */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setMostrarCarrinho(false)}
      />

      {/* Drawer do carrinho */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-gradient-to-b from-gray-900 to-black shadow-2xl z-50 transform transition-transform duration-300 overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-6 h-6 text-white" />
            <h2 className="text-xl font-bold text-white">Meu Carrinho</h2>
            <span className="bg-white/20 text-white px-2 py-1 rounded-full text-sm">
              {totalItens} {totalItens === 1 ? 'item' : 'itens'}
            </span>
          </div>
          <button 
            onClick={() => setMostrarCarrinho(false)}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Lista de itens */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {itens.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">Seu carrinho está vazio</p>
              <button
                onClick={() => setMostrarCarrinho(false)}
                className="mt-4 text-pink-500 hover:text-pink-400 transition-colors"
              >
                Continuar comprando
              </button>
            </div>
          ) : (
            <>
              {itens.map((item, index) => (
                <div key={`${item.id}-${item.sabor}-${item.nicotina}`} 
                     className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                  <div className="flex gap-3">
                    <img 
                      src={item.imagem} 
                      alt={item.nome}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{item.nome}</h3>
                      <p className="text-sm text-gray-400">{item.marca}</p>
                      <p className="text-xs text-pink-400 mt-1">
                        {item.sabor} • {item.nicotina}
                      </p>
                      <p className="text-green-400 font-bold mt-1">
                        R$ {item.preco.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2 bg-gray-700 rounded-lg">
                      <button
                        onClick={() => atualizarQuantidade(item.id, item.sabor, item.nicotina, item.quantidade - 1)}
                        className="p-1 hover:bg-gray-600 rounded-l-lg transition-colors"
                      >
                        <Minus className="w-4 h-4 text-white" />
                      </button>
                      <span className="w-8 text-center text-white font-medium">
                        {item.quantidade}
                      </span>
                      <button
                        onClick={() => atualizarQuantidade(item.id, item.sabor, item.nicotina, item.quantidade + 1)}
                        className="p-1 hover:bg-gray-600 rounded-r-lg transition-colors"
                      >
                        <Plus className="w-4 h-4 text-white" />
                      </button>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <span className="text-green-400 font-bold">
                        R$ {(item.preco * item.quantidade).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removerItem(item.id, item.sabor, item.nicotina)}
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Botão limpar carrinho */}
              <button
                onClick={limparCarrinho}
                className="text-sm text-gray-400 hover:text-red-400 transition-colors flex items-center gap-1 mx-auto"
              >
                <Trash2 className="w-3 h-3" />
                Limpar carrinho
              </button>
            </>
          )}
        </div>

        {/* Footer com total e checkout */}
        {itens.length > 0 && (
          <div className="border-t border-gray-800 p-4 bg-gray-900/50 backdrop-blur">
            <div className="space-y-3">
              <div className="flex justify-between text-white">
                <span>Subtotal:</span>
                <span className="font-bold">R$ {totalPreco.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <span>Total de itens:</span>
                <span>{totalItens}</span>
              </div>
              
              <WhatsAppButton message={gerarMensagemWhatsApp()} />
              
              <button
                onClick={() => setMostrarCarrinho(false)}
                className="w-full text-gray-400 hover:text-white text-sm transition-colors"
              >
                Continuar comprando
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}