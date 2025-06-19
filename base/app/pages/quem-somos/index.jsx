import Imagem1 from "../../img/home/quemsomos_imagem1.png";
import Imagem2 from "../../img/home/quemsomos_imagem2.png";
import Imagem3 from "../../img/home/quemsomos_imagem3.jpg";
import Imagem4 from "../../img/home/quemsomos_imagem4.jpg";
export const QuemSomos = () => {
  return (
    <div className="min-h-screen text-black pt-12">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Quem Somos Nós?</h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4">Nossa missão</h2>
            <p className="text-lg">
            Servir a Comunidade do Reino com ações práticas de amor e cuidado, oferecendo 
atividades que promovemo desenvolvimento integral de crianças e famílias : 
como esportes, música, discipulado, educação e terapia com o objetivo de empoderá-los 
para que sejam protagonistas de suas histórias e instrumentos de transformação onde vivem.
            </p>
          </div>
          <div className="flex justify-center md:w-1/2 order-1 md:order-2">
            <img
              src={Imagem1}
              alt="imagem1"
              className="rounded-full object-cover border-4 border-yellow-500 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          <div className="flex justify-center md:w-1/2 order-1">
            <img
              src={Imagem2}
              alt="imagem2"
              className="rounded-full border-4 border-yellow-500 object-cover w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
            />
          </div>
          <div className="md:w-1/2 order-2">
            <h2 className="text-3xl font-bold mb-4">Qual o nosso propósito?</h2>
            <p className="text-lg">
            Manifestar o Reino de Deus por meio do serviço, semeando esperança,
dignidade e propósito na vida das crianças da Comunidade do Reino, 
acreditando que cada uma carrega em si o potencial para impactar o mundo ao seu redor.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4">Como atuamos?</h2>
            <p className="text-lg">
            Nossa ONG atua, principalmente, na comunidade do Rato, situada no bairro Santo Teresinha. Atualmente, 25 famílias são beneficiadas com a entrega regular de cestas básicas. Além disso, oferecemos às crianças e adolescentes diversas oportunidades de desenvolvimento por meio do esporte. Nossos atletas já participaram de várias competições de jiu-jitsu, conquistando medalhas e, acima de tudo, renovando a esperança de um futuro melhor. As famílias atendidas também têm acesso a atendimentos terapêuticos e reforço escolar, ampliando o cuidado e o apoio social que oferecemos.
            </p>
          </div>
          <div className="flex justify-center md:w-1/2 order-1 md:order-2">
            <img
              src={Imagem3}
              alt="imagem3"
              className="rounded-full border-4 border-yellow-500 object-cover w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          <div className="flex justify-center md:w-1/2 order-1">
            <img
              src={Imagem4}
              alt="imagem4"
              className="rounded-full object-cover border-4 border-yellow-500 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
            />
          </div>
          <div className="md:w-1/2 order-2">
            <h2 className="text-3xl font-bold mb-4">Faça parte</h2>
            <p className="text-lg">
              Durante nossas jornadas temos contado com parceiros mantenedores
              que tornam nossa missão possível. Pessoas vêm disponibilizando
              seus recursos, tempo e talentos para o nosso negócio emprestado.
              Faça parte você também e caminhe junto conosco.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
