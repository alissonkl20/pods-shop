// app/components/Footer.tsx
'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Footer() {
  const router = useRouter()

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    
    if (window.location.pathname !== '/') {
      router.push(`/#${sectionId}`)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleInstagramClick = () => {
    window.open('https://instagram.com/nvshop', '_blank')
  }

  const handleEmailClick = () => {
    window.location.href = 'mailto:contato@nvpods.com?subject=Contato%20via%20Site'
  }

  const handleAddressClick = () => {
    window.open('https://maps.google.com/?q=Jaraguá+do+Sul+SC', '_blank')
  }

  return (
    <footer className="bg-black text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e descrição */}
          <div>
            <Link href="/" className="inline-block">
              <h3 className="text-lg font-semibold mb-4 hover:text-pink-500 transition-colors">
                <span className="text-pink-600">VN</span> Pods
              </h3>
            </Link>
            <p className="text-gray-100">
              Os melhores pods e acessórios para sua experiência vaping.
            </p>
          </div>
          
          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-600">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-100">
              <li>
                <a 
                  href="/#" 
                  onClick={(e) => handleScroll(e, 'inicio')}
                  className="hover:text-pink-400 transition cursor-pointer"
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="/#products" 
                  onClick={(e) => handleScroll(e, 'products')}
                  className="hover:text-pink-400 transition cursor-pointer"
                >
                  Produtos
                </a>
              </li>
              <li>
                <a 
                  href="/#about" 
                  onClick={(e) => handleScroll(e, 'about')}
                  className="hover:text-pink-400 transition cursor-pointer"
                >
                  Sobre
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contato com links clicáveis */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-600">Contato</h3>
            <ul className="space-y-2 text-gray-100">
              <li>
                <button 
                  onClick={handleInstagramClick}
                  className="hover:text-pink-400 transition flex items-center gap-2"
                >
                  <span>📱</span>
                  <span className="hover:underline">Instagram: @nvpods</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={handleEmailClick}
                  className="hover:text-pink-400 transition flex items-center gap-2"
                >
                  <span>📧</span>
                  <span className="hover:underline">contato@nvpods.com</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={handleAddressClick}
                  className="hover:text-pink-400 transition flex items-center gap-2"
                >
                  <span>📍</span>
                  <span className="hover:underline">Jaraguá do Sul - SC</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-pink-600">
            &copy; {new Date().getFullYear()} - Para maiores de 18 anos
          </p>
        </div>
      </div>
    </footer>
  )
}