import { Heart, Users, DollarSign, Gift, HandHeart, CreditCard } from "lucide-react"

export default function Doacoes() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <main className="relative">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Faça sua Doação
              </h1>

              <p className="text-lg text-gray-600 max-w-md">
                Sua contribuição faz a diferença na vida de muitas famílias. Com sua doação, conseguimos manter nossos
                projetos ativos e expandir nosso impacto na Comunidade do Reino.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-3 rounded-full">
                  Doar Agora
                </button>
                <button className="cursor-pointer border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full">
                  Saiba Mais
                </button>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="col-span-1">
              <div className="bg-yellow-100 rounded-lg p-8 text-center">
                <Heart size={120} className="text-yellow-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Transforme Vidas</h3>
                <p className="text-gray-600">Cada doação é um gesto de amor que multiplica esperança</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Donation Options Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">Como Você Pode Ajudar</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Option 1 - Money */}
            <div className="bg-yellow-400 rounded-3xl p-8 text-center">
              <div className="flex justify-center mb-6">
                <DollarSign size={80} className="text-gray-800" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Doação em Dinheiro</h3>
              <p className="text-gray-800 leading-relaxed">
                Contribuições financeiras que nos permitem comprar alimentos, materiais escolares e manter nossos
                projetos funcionando.
              </p>
            </div>

            {/* Option 2 - Items */}
            <div className="bg-yellow-400 rounded-3xl p-8 text-center">
              <div className="flex justify-center mb-6">
                <Gift size={80} className="text-gray-800" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Doação de Itens</h3>
              <p className="text-gray-800 leading-relaxed">
                Alimentos não perecíveis, roupas, materiais escolares e outros itens essenciais para as famílias da
                comunidade.
              </p>
            </div>

            {/* Option 3 - Time */}
            <div className="bg-yellow-400 rounded-3xl p-8 text-center">
              <div className="flex justify-center mb-6">
                <HandHeart size={80} className="text-gray-800" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Doação de Tempo</h3>
              <p className="text-gray-800 leading-relaxed">
                Seja voluntário em nossos projetos, oferecendo seu tempo e habilidades para ajudar nossa comunidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Call to Action */}
      <section className="py-16 lg:pt-20 lg:pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-yellow-400 rounded-3xl p-8 lg:p-12">
            <div className="text-center space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Sua doação transforma vidas</h2>
              <p className="text-gray-800 leading-relaxed max-w-2xl mx-auto">
                Cada contribuição, por menor que seja, faz uma diferença real na vida das famílias da Comunidade do
                Reino. Junte-se a nós nessa missão!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full flex items-center justify-center gap-2">
                  <CreditCard size={20} />
                  Doar Online
                </button>
                <button className="border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3 rounded-full">
                  Outras Formas de Doar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
