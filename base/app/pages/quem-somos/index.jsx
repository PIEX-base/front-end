import Imagem1 from "../../img/home/quemsomos_imagem1.png";
import Imagem2 from "../../img/home/quemsomos_imagem2.png";
import Imagem3 from "../../img/home/quemsomos_imagem3.jpg";
import Imagem4 from "../../img/home/quemsomos_imagem4.jpg";
export const QuemSomos = () => {
  return (
    // <div className="w-full px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col min-h-screen text-black pt-12 mx-auto w-full">
      <h1 className="text-4xl font-bold mb-4 flex justify-start">
        Quem Somos Nós?
      </h1>

      <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-8 w-full max-w-7xl">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Nossa missão</h2>
          <p className="text-lg">
            Somos uma ONG não governamental que busca servir a cidade de Juiz de
            Fora em Minas Gerais. Nossa missão é manifestar o Reino de Deus
            através do serviço social, esporte e educação, criando oportunidades
            para crianças e jovens de comunidades.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={Imagem1}
            alt="imagem1"
            className="rounded-full object-cover border-4 border-yellow-500 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-8 w-full">
        <div className="flex justify-center md:justify-start">
          <img
            src={Imagem2}
            alt="imagem2"
            className="rounded-full border-4 border-yellow-500 object-cover w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">O que fazemos</h2>
          <p className="text-lg">
            Nossa ONG atende hoje, principalmente, a comunidade do Rato,
            localizado no bairro Santo Teresinha, proporcionando às crianças e
            aos adolescentes grandes oportunidades de esporte. Nossos atletas já
            participaram de várias competições de jiu-jitsu e todos eles
            trouxeram de volta casa medalhas e a esperança de uma vida melhor.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-8 w-full">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Temos também</h2>
          <p className="text-lg">
            Nossa ONG atende hoje, principalmente, a comunidade do Rato,
            localizado no bairro Santo Teresinha, proporcionando às crianças e
            aos adolescentes grandes oportunidades de esporte. Nossos atletas já
            participaram de várias competições de jiu-jitsu e todos eles
            trouxeram de volta casa medalhas e a esperança de uma vida melhor.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={Imagem3}
            alt="imagem3"
            className="rounded-full border-4 border-yellow-500 object-cover w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-8 w-full">
        <div className="flex justify-center md:justify-start">
          <img
            src={Imagem4}
            alt="imagem4"
            className="rounded-full object-cover border-4 border-yellow-500 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 ">Faça parte</h2>
          <p className="text-lg">
            Durante nossas jornadas temos contado com parceiros mantenedores que
            tornam nossa missão possível. Pessoas vêm disponibilizando seus
            recursos, tempo e talentos para o nosso negócio emprestado. Faça
            parte você também e caminhe junto conosco.
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
};
