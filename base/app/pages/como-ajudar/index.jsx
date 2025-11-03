"use client"

import { Heart, UtensilsCrossed, BookOpen } from "lucide-react"

export default function ComoAjudar() {
  const formasAjudar = [
    {
      id: 1,
      titulo: "Doações de Alimentos",
      descricao:
        "Doe alimentos não-perecíveis durante os cultos de Santa Ceia. Sua contribuição alimenta famílias que precisam.",
      icon: Heart,
      cor: "bg-yellow-50 border-yellow-200",
      corBotao: "bg-yellow-400 hover:bg-yellow-500",
      detalhe: "Todo primeiro domingo do mês",
    },
    {
      id: 2,
      titulo: "Serviço Comunitário",
      descricao: "Voluntarie seu tempo servindo refeições nas mesas comunitárias. Juntos, alimentamos corpo e alma.",
      icon: UtensilsCrossed,
      cor: "bg-blue-50 border-blue-200",
      corBotao: "bg-blue-400 hover:bg-blue-500",
      detalhe: "Quartas e sábados à noite",
    },
    {
      id: 3,
      titulo: "Reforço Escolar",
      descricao:
        "Se você tem conhecimento, compartilhe! Ajude crianças da comunidade com reforço escolar e lições de casa.",
      icon: BookOpen,
      cor: "bg-green-50 border-green-200",
      corBotao: "bg-green-400 hover:bg-green-500",
      detalhe: "Terças e quintas, das 14h às 17h",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Como Você Pode Ajudar</h1>
          <p className="text-lg text-gray-600">
            Existem várias formas de contribuir e fazer diferença na vida de pessoas da nossa comunidade
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Impact Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
            <p className="text-3xl font-bold text-yellow-500 mb-2">500+</p>
            <p className="text-gray-600">Refeições servidas mensalmente</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
            <p className="text-3xl font-bold text-blue-500 mb-2">150+</p>
            <p className="text-gray-600">Voluntários ativos</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
            <p className="text-3xl font-bold text-green-500 mb-2">80+</p>
            <p className="text-gray-600">Crianças em reforço escolar</p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {formasAjudar.map((forma) => {
            const IconComponent = forma.icon
            return (
              <div
                key={forma.id}
                className={`${forma.cor} border-2 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer`}
              >
                {/* Icon */}
                <div className="mb-4">
                  <IconComponent className="w-12 h-12 text-gray-700" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{forma.titulo}</h3>

                {/* Description */}
                <p className="text-gray-700 mb-4 leading-relaxed">{forma.descricao}</p>

                {/* Detail */}
                <p className="text-sm text-gray-600 mb-6 font-medium">{forma.detalhe}</p>

                {/* Button */}
                <button
                  className={`${forma.corBotao} text-white font-semibold py-2 px-6 rounded-lg w-full transition-colors duration-200`}
                >
                  Saiba Mais
                </button>
              </div>
            )
          })}
        </div>

        {/* Why Help Section */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Por que ajudar?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-3xl">🤝</div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Transforme vidas</h4>
                <p className="text-gray-600">Sua ação tem impacto real e duradouro na comunidade</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">💪</div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Fortaleça relacionamentos</h4>
                <p className="text-gray-600">Conheça novas pessoas e construa laços significativos</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">✨</div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Viva com propósito</h4>
                <p className="text-gray-600">Descubra o sentido de servir e dar de si mesmo</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">🌱</div>
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Cresça como pessoa</h4>
                <p className="text-gray-600">Desenvolva novas habilidades e valores pessoais</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pronto para fazer diferença?</h2>
          <p className="text-lg text-gray-800 mb-8">
            Entre em contato conosco e descubra qual é a melhor forma para você ajudar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Quero Voluntariar
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors border-2 border-white">
              Entrar em Contato
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
