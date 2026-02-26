'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Product } from '../types'

/* ================== TIPOS ================== */

export interface CarrinhoItem {
  id: number
  nome: string
  marca: string
  preco: number
  imagem: string
  sabor?: string
  nicotina?: string
  quantidade: number
}

interface CarrinhoContextType {
  itens: CarrinhoItem[]
  mostrarCarrinho: boolean
  setMostrarCarrinho: (value: boolean) => void
  adicionarAoCarrinho: (
    produto: Product,
    sabor?: string,
    nicotina?: string,
    quantidade?: number
  ) => void
  removerItem: (id: number, sabor?: string, nicotina?: string) => void
  atualizarQuantidade: (
    id: number,
    sabor?: string,
    nicotina?: string,
    novaQuantidade?: number
  ) => void
  limparCarrinho: () => void
  totalItens: number
  totalPreco: number
}

/* ================== CONTEXT ================== */

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined)

export function CarrinhoProvider({ children }: { children: ReactNode }) {
  const [itens, setItens] = useState<CarrinhoItem[]>([])
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false)

  useEffect(() => {
    const carrinhoSalvo = localStorage.getItem('carrinho')
    if (carrinhoSalvo) {
      setItens(JSON.parse(carrinhoSalvo))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(itens))
  }, [itens])

  const adicionarAoCarrinho = (
    produto: Product,
    sabor?: string,
    nicotina?: string,
    quantidade: number = 1
  ) => {
    setItens((itensAtuais) => {
      const itemExistente = itensAtuais.find(
        (item) =>
          item.id === produto.id &&
          item.sabor === sabor &&
          item.nicotina === nicotina
      )

      if (itemExistente) {
        return itensAtuais.map((item) =>
          item.id === produto.id &&
          item.sabor === sabor &&
          item.nicotina === nicotina
            ? { ...item, quantidade: item.quantidade + quantidade }
            : item
        )
      }

      const novoItem: CarrinhoItem = {
        id: produto.id,
        nome: produto.name,
        marca: produto.brand,
        preco: produto.price,
        imagem: produto.image,
        sabor,
        nicotina,
        quantidade
      }

      return [...itensAtuais, novoItem]
    })

    setMostrarCarrinho(true)
  }

  const removerItem = (id: number, sabor?: string, nicotina?: string) => {
    setItens((itensAtuais) =>
      itensAtuais.filter(
        (item) =>
          !(item.id === id && item.sabor === sabor && item.nicotina === nicotina)
      )
    )
  }

  const atualizarQuantidade = (
    id: number,
    sabor?: string,
    nicotina?: string,
    novaQuantidade: number = 1
  ) => {
    if (novaQuantidade < 1) {
      removerItem(id, sabor, nicotina)
      return
    }

    setItens((itensAtuais) =>
      itensAtuais.map((item) =>
        item.id === id &&
        item.sabor === sabor &&
        item.nicotina === nicotina
          ? { ...item, quantidade: novaQuantidade }
          : item
      )
    )
  }

  const limparCarrinho = () => setItens([])

  const totalItens = itens.reduce(
    (total, item) => total + item.quantidade,
    0
  )

  const totalPreco = itens.reduce(
    (total, item) => total + item.preco * item.quantidade,
    0
  )

  return (
    <CarrinhoContext.Provider
      value={{
        itens,
        mostrarCarrinho,
        setMostrarCarrinho,
        adicionarAoCarrinho,
        removerItem,
        atualizarQuantidade,
        limparCarrinho,
        totalItens,
        totalPreco
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  )
}

export function useCarrinho() {
  const context = useContext(CarrinhoContext)
  if (!context) {
    throw new Error('useCarrinho deve ser usado dentro de CarrinhoProvider')
  }
  return context
}