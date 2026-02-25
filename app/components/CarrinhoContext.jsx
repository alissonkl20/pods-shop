'use client'

import { createContext, useContext, useState, useEffect } from 'react';

const CarrinhoContext = createContext({});

export function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState([]);
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);

  // Carregar carrinho do localStorage ao iniciar
  useEffect(() => {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
      setItens(JSON.parse(carrinhoSalvo));
    }
  }, []);

  // Salvar carrinho no localStorage quando atualizar
  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(itens));
  }, [itens]);

  const adicionarAoCarrinho = (produto, sabor, nicotina, quantidade) => {
    setItens(itensAtuais => {
      const itemExistente = itensAtuais.find(item => 
        item.id === produto.id && 
        item.sabor === sabor && 
        item.nicotina === nicotina
      );

      if (itemExistente) {
        return itensAtuais.map(item =>
          item.id === produto.id && item.sabor === sabor && item.nicotina === nicotina
            ? { ...item, quantidade: item.quantidade + quantidade }
            : item
        );
      }

      return [...itensAtuais, {
        id: produto.id,
        nome: produto.name,
        marca: produto.brand,
        preco: produto.price,
        imagem: produto.image,
        sabor,
        nicotina,
        quantidade
      }];
    });
    
    setMostrarCarrinho(true);
  };

  const removerItem = (id, sabor, nicotina) => {
    setItens(itens.filter(item => 
      !(item.id === id && item.sabor === sabor && item.nicotina === nicotina)
    ));
  };

  const atualizarQuantidade = (id, sabor, nicotina, novaQuantidade) => {
    if (novaQuantidade < 1) {
      removerItem(id, sabor, nicotina);
      return;
    }

    setItens(itens.map(item =>
      item.id === id && item.sabor === sabor && item.nicotina === nicotina
        ? { ...item, quantidade: novaQuantidade }
        : item
    ));
  };

  const limparCarrinho = () => {
    setItens([]);
  };

  const totalItens = itens.reduce((total, item) => total + item.quantidade, 0);
  
  const totalPreco = itens.reduce((total, item) => 
    total + (item.preco * item.quantidade), 0
  );

  return (
    <CarrinhoContext.Provider value={{
      itens,
      mostrarCarrinho,
      setMostrarCarrinho,
      adicionarAoCarrinho,
      removerItem,
      atualizarQuantidade,
      limparCarrinho,
      totalItens,
      totalPreco
    }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}