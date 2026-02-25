import './globals.css'
import { Inter } from 'next/font/google'
import { CarrinhoProvider } from './components/CarrinhoContext'
import CarrinhoDrawer from './components/CarrinhoDrawer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pods Shop - Os melhores pods do mercado',
  description: 'Encontre os melhores pods e acessórios com entrega rápida',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <CarrinhoProvider>
          <main className="min-h-screen bg-gray-50">
            {children}
            <CarrinhoDrawer />
          </main>
        </CarrinhoProvider>
      </body>
    </html>
  )
}