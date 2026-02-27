// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import { CarrinhoProvider } from './components/CarrinhoContext'
import CarrinhoDrawer from './components/CarrinhoDrawer'
import { PropsWithChildren } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'VN Pods - Os melhores pods do mercado',
  description: 'Encontre os melhores pods e acessórios com entrega rápida',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <CarrinhoProvider>
          {children}
          <CarrinhoDrawer />
        </CarrinhoProvider>
      </body>
    </html>
  )
}