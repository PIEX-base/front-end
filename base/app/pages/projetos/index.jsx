import {
  Heart,
  Users,
  BookOpen,
  Utensils,
  Stethoscope,
  Home,
} from "lucide-react";
import Imagem1 from "../../img/projetos/educaBase.jpg";
import Imagem2 from "../../img/projetos/educaBase2.jpg";
import Imagem3 from "../../img/projetos/alimentos.jpg";
import Imagem4 from "../../img/projetos/consultas.jpg";
import Imagem5 from "../../img/projetos/judo.jpeg";
import Imagem6 from "../../img/projetos/voluntario.jpg";

export default function Projetos() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <main className="relative">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Nossos Projetos
              </h1>

              <p className="text-lg text-gray-600 max-w-md">
                Conheça as iniciativas que transformam vidas na Comunidade do
                Reino através do amor e cuidado
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="cursor-pointer border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full">
                  Ver todos os projetos
                </button>
                <button className="cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-3 rounded-full">
                  Participe
                </button>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="col-span-1">
              <div>
                <img
                  src={Imagem1}
                  alt="Crianças em atividades dos projetos"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Featured Projects Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
            Projetos em Destaque
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 - Education */}
            <div className="bg-yellow-400 rounded-3xl p-8 text-center">
              <div className="flex justify-center mb-6">
                <BookOpen size={80} className="text-gray-800" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Reforço Escolar
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Oferecemos apoio educacional para crianças e adolescentes,
                ajudando no desenvolvimento acadêmico e pessoal através de aulas
                de reforço e atividades pedagógicas.
              </p>
            </div>

            {/* Project 2 - Nutrition */}
            <div className="bg-yellow-400 rounded-3xl p-8 text-center">
              <div className="flex justify-center mb-6">
                <Utensils size={80} className="text-gray-800" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Alimentação Solidária
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Distribuição de cestas básicas para as famílias da Comunidade do
                Reino, garantindo segurança alimentar e nutricional.
              </p>
            </div>

            {/* Project 3 - Health */}
            <div className="bg-yellow-400 rounded-3xl p-8 text-center">
              <div className="flex justify-center mb-6">
                <Stethoscope size={80} className="text-gray-800" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Cuidados Terapêuticos
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Realização de cuidados terapêuticos para as crianças e adutos,
                proporcionando bem-estar físico, emocional e promoção da saúde
                integral.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
            Todos os Nossos Projetos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <img
                  src={Imagem2}
                  alt="Projeto Educa Base"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="flex items-center mb-3">
                <BookOpen size={24} className="text-yellow-500 mr-2" />
                <span className="text-sm font-medium text-gray-600">
                  EDUCAÇÃO
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Educa Base
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Atendimento de reforço escolar para crianças e jovens da
                comunidade, oferecendo apoio no aprendizado e fortalecendo o
                desempenho escolar.{" "}
              </p>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <img
                  src={Imagem3}
                  alt="Projeto de cestas básicas"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="flex items-center mb-3">
                <Utensils size={24} className="text-green-500 mr-2" />

                <span className="text-sm font-medium text-gray-600">
                  ALIMENTAÇÃO
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Arrecadação de Alimentos
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Campanhas de arrecadação de alimentos para montagem de cestas
                básicas, mobilizando a comunidade em ações de solidariedade e
                combate à fome.
              </p>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <img
                  src={Imagem4}
                  alt="Projeto Apoio Familiar"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="flex items-center mb-3">
                <Users size={24} className="text-blue-500 mr-2" />
                <span className="text-sm font-medium text-gray-600">
                  FAMÍLIA
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Apoio Familiar
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Orientação e suporte psicossocial para famílias em situação de
                vulnerabilidade social.
              </p>
            </div>

            {/* Project Card 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <img
                  src={Imagem5}
                  alt="Projeto Esporte"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="flex items-center mb-3">
                <Heart size={24} className="text-red-500 mr-2" />
                <span className="text-sm font-medium text-gray-600">
                  ESPORTE
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Jiu Jtsu</h3>
              <p className="text-gray-600 text-sm mb-4">
                Aulas de Jiu-Jitsu para crianças e jovens da comunidade,
                promovendo disciplina, autocontrole e desenvolvimento físico
                saudável.{" "}
              </p>
              <button className="text-yellow-600 font-medium text-sm hover:text-yellow-700">
                Saiba mais →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="bg-gray-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                Impacto dos nossos{" "}
                <span className="text-yellow-400">projetos</span>
              </h2>
              <p className="text-gray-300 mt-4">
                Cada projeto representa uma oportunidade de transformação e
                esperança para nossa comunidade.
              </p>
            </div>

            {/* Right Content - Statistics Grid */}
            <div className="grid grid-cols-2 gap-8">
              {/* Active Projects */}
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <BookOpen size={32} className="text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  9
                </div>
                <div className="text-sm text-gray-300">
                  crianças no Educa Base
                </div>
              </div>

              {/* Beneficiaries */}
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Users size={32} className="text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  +120
                </div>
                <div className="text-sm text-gray-300">famílias atendidas</div>
              </div>

              {/* Volunteers */}
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Heart size={32} className="text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  +20
                </div>
                <div className="text-sm text-gray-300">voluntários ativos</div>
              </div>

              {/* Years of Impact */}
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Home size={32} className="text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  10
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  10
                </div>

                <div className="text-sm text-gray-300">anos de impacto</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:pt-20 lg:pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-yellow-400 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="space-y-6 flex flex-col items-center lg:items-start">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Faça parte dos nossos projetos
                </h2>
                <p className="text-gray-800 leading-relaxed">
                  Seja voluntário, faça uma doação ou indique alguém que
                  precisa. Juntos podemos transformar mais vidas!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full">
                    Seja voluntário
                  </button>
                  <button className="border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3 rounded-full">
                    Fazer doação
                  </button>
                </div>
              </div>

              {/* Right Content - Image */}
              <div className="flex justify-center lg:justify-center">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden">
                  <img
                    src={Imagem6}
                    alt="Voluntários trabalhando nos projetos"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
