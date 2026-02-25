export default function Footer() {
  return (
    <footer className="bg-black text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
               <span className="text-pink-600">NV</span> Pods
               </h3>
            <p className="text-gray-400">
              Os melhores pods e acessórios para sua experiência vaping.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-600">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-100">
              <li><a href="#inicio" className="hover:text-pink-400 transition">Início</a></li>
              <li><a href="#produtos" className="hover:text-pink-400 transition">Produtos</a></li>
              <li><a href="#sobre" className="hover:text-pink-400 transition">Sobre</a></li>
              <li><a href="#contato" className="hover:text-pink-400 transition">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-600">Contato</h3>
            <ul className="space-y-2 text-gray-100">
              <li>📱 Instagram: NVSHOP</li>
              <li>📧 Email: contato@podsshop.com</li>
              <li>📍 Jaraguá do Sul</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-pink-600">
          <p>&copy; Para maiores de 18 anos</p>
        </div>
      </div>
    </footer>
  )
}