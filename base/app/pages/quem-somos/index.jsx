import Imagem1 from "../../img/home/quemsomos_imagem1.png";
import Imagem3 from "../../img/home/quemsomos_imagem3.jpg";
export const QuemSomos = () => {
  return (
    <div className="flex flex-col  min-h-screen text-black px-24 pt-13 ">
      <h1 className="text-4xl font-bold mb-4 flex justify-start">Quem Somos Nós?</h1>
      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Nossa missão</h2>
          <p className="text-lg">
            Somos uma ONG não governamental que busca servir a cidade de Juiz de Fora em Minas Gerais.
            Nossa missão é manifestar o Reino de Deus através do serviço social,
            esporte e educação, criando oportunidades para crianças e jovens de comunidades.
          </p>
        </div>
        <div className="ml-30 flex justify-center md:justify-end">
          <img
            src={Imagem1}
            alt="imagem1"
            className="rounded-full object-cover w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
          />
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-4 text-center">O que fazemos</h2>
      <p className="text-lg text-center mb-8">
        Nossa ONG atende hoje, principalmente, a comunidade do Rato, localizado
        no bairro Santo Teresinha, proporcionando às crianças e aos adolescentes
        grandes oportunidades de esporte. Nossos atletas já participaram de várias
        competições de jiu-jitsu e todos eles trouxeram de volta casa medalhas
        e a esperança de uma vida melhor.
      </p>

    <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Temos também</h2>
          <p className="text-lg">
             Nossa ONG atende hoje, principalmente, a comunidade do Rato, localizado
        no bairro Santo Teresinha, proporcionando às crianças e aos adolescentes
        grandes oportunidades de esporte. Nossos atletas já participaram de várias
        competições de jiu-jitsu e todos eles trouxeram de volta casa medalhas
        e a esperança de uma vida melhor.
          </p>
        </div>
        <div className="ml-30 flex justify-center md:justify-end">
          <img
            src={Imagem3}
            alt="imagem3"
            className="rounded-full object-cover w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
          />
        </div>
      </div>

    
      <h2 className="text-3xl font-bold mb-4 text-center">Faça parte</h2>
      <p className="text-lg text-center mb-8">
        Durante nossas jornadas temos contado com parceiros mantenedores que
        tornam nossa missão possível. Pessoas vêm disponibilizando seus recursos,
        tempo e talentos para o nosso negócio emprestado. Faça parte você também
        e caminhe junto conosco.
      </p>
    </div>
  );
};
