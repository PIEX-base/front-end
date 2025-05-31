import criancasImage from "../../img/home/criancas.png";
import criancasImage2 from "../../img/home/criancas2.png";
import { HandAndHeartSVG } from "../../img/home/handAndHeart";
import { HandShakeSVG } from "../../img/home/handShake";
import { HeartShapedHandSVG } from "../../img/home/heartShapedHand";

export const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <main className="relative ">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 ">
            {/* Left Content */}
            <div className="space-y-8 ">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                A Base cuida das crianças.
              </h1>

              <p className="text-lg text-gray-600 max-w-md">
                Nós contamos com a sua solidariedade para nos ajudar nesta luta
              </p>

              <div className="flex flex-col sm:flex-row gap-4 ">
                <button
                  variant="outline"
                  className="cursor-pointer border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full">
                  Saiba mais
                </button>
                <button className="cursor-pointer bg-yellow hover:bg-yellow-500 text-black font-medium px-8 py-3 rounded-full">
                  Seja um parceiro
                </button>
              </div>
            </div>

            {/* Right Content - Image with Yellow Blob */}
            <div className="col-span-1">
              {/* Children Image */}
              <div>
                <img
                  src={criancasImage}
                  alt="Crianças"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
            O que nós fazemos
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Care/Support */}
            <div className="bg-yellow rounded-3xl p-8 text-center">
              <div className="flex justify-center mb-6">
                <HandAndHeartSVG />
              </div>
              <p className="text-gray-800 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                a libero risus. Nullam sodales nisl sit amet mauris mattis
                sollicitudin.
              </p>
            </div>

            {/* Card 2 - Partnership */}
            <div className="bg-yellow rounded-3xl p-8 text-center">
              <div className="flex justify-center mb-6">
                <HeartShapedHandSVG />
              </div>
              <p className="text-gray-800 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                a libero risus. Nullam sodales nisl sit amet mauris mattis
                sollicitudin.
              </p>
            </div>

            {/* Card 3 - Community */}
            <div className="bg-yellow rounded-3xl p-8 text-center">
              <div className="flex justify-center mb-6">
                <HandShakeSVG size={100} />
              </div>
              <p className="text-gray-800 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                a libero risus. Nullam sodales nisl sit amet mauris mattis
                sollicitudin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                Nós ajudamos a moldar um futuro com{" "}
                <span className="text-yellow-400">esperança</span>
              </h2>
            </div>

            {/* Right Content - Statistics Grid */}
            <div className="grid grid-cols-2 gap-8">
              {/* Children Helped */}
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-white">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
                  </svg>
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  +500
                </div>
                <div className="text-sm text-gray-300">crianças ajudadas</div>
              </div>

              {/* Families Served */}
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-white">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  +100
                </div>
                <div className="text-sm text-gray-300">famílias atendidas</div>
              </div>

              {/* Food Baskets */}
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-white">
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                    <path d="M15 18H9" />
                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                    <circle cx="17" cy="18" r="2" />
                    <circle cx="7" cy="18" r="2" />
                  </svg>
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  +3000
                </div>
                <div className="text-sm text-gray-300">
                  cestas básicas distribuídas
                </div>
              </div>

              {/* Medical Consultations */}
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-white">
                    <path d="M3 3v18h18" />
                    <path d="M18 17V9" />
                    <path d="M13 17V5" />
                    <path d="M8 17v-3" />
                  </svg>
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  +2000
                </div>
                <div className="text-sm text-gray-300">
                  atendimentos médicos
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Supporter Section */}
      <section className="py-16 lg:pt-20 lg:pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-yellow rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="space-y-6 bg-zinc-0 flex flex-col items-center lg:items-start">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Torne-se um apoiador
                </h2>
                <p className="text-gray-800 leading-relaxed">
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae; Vivamus neque nibh, tristique
                  nec urna a, porttitor venenatis neque. Pellentesque commodo,
                  quam a luctus elementum, quam metus mollis lacus
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gray hover:bg-gray-700 text-white px-8 py-3 rounded-full">
                    Apoie agora
                  </button>

                  <button
                    variant="outline"
                    className="border-gray-800 border text-gray-800 hover:bg-gray hover:text-white px-8 py-3 rounded-full">
                    Saiba mais
                  </button>
                </div>
              </div>

              {/* Right Content - Circular Image */}
              <div className="flex justify-center lg:justify-center">
                <div className="w-64 h-64 lg:w-92 lg:h-92 rounded-full overflow-hidden">
                  <img
                    className="object-cover"
                    src={criancasImage2}
                    alt="Crianças felizes"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
            Nossos parceiros
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {/* Partner 1 */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">Logoipsum</span>
            </div>

            {/* Partner 2 */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
                </svg>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">Logoipsum</div>
                <div className="text-sm text-gray-500">Foundation</div>
              </div>
            </div>

            {/* Partner 3 */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">Logoipsum</span>
            </div>

            {/* Partner 4 */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">Logoipsum</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
