// types/index.ts

import { ReactNode } from 'react'

/* ============================= */
/*           CATEGORIA           */
/* ============================= */

export type Category = 'todos' | 'IGNITE' | 'ELFBAR' | 'OXBAR'| 'BLACKSHEEP'


/* ============================= */
/*            PRODUTO            */
/* ============================= */

export interface Product {
  id: number
  name: string
  brand: string
  price: number
  description: string
  image: string
  flavors?: string[]     // opcional
  nicotine?: string[]    // opcional
  category?: Category    // opcional (já deixa preparado)
}


/* ============================= */
/*         ITEM DO CARRINHO      */
/* ============================= */

export interface CartItem {
  id: number
  nome: string
  marca: string
  preco: number
  imagem: string
  sabor?: string
  nicotina?: string
  quantidade: number
}


/* ============================= */
/*         COMPONENT PROPS       */
/* ============================= */

export interface WhatsAppButtonProps {
  message: string
  children?: ReactNode
}

export interface ProductCardProps {
  product: Product
}