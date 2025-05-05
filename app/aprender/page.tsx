import Image from "next/image";
import ilustrationHome from "@/public/images/ilustration-one.svg";
import ilustrationTwo from "@/public/images/ilustration-two.svg";
import ilustrationThree from "@/public/images/ilustration-three.svg";
import ilustrationFour from "@/public/images/ilustration-four.svg";
export default function AprenderPage() {
  return (
    <div className="space-y-6 py-6">
      <div className="flex items-center space-x-6">
        <div className="w-1/2">
          <h2 className="text-4xl mb-3 text-blue-900 font-semibold">
            💧 O que é saneamento básico?
          </h2>
          <p className="mb-3">
            Saneamento básico é o conjunto de serviços que garantem o
            abastecimento de água potável, o tratamento de esgoto, a coleta de
            lixo e o manejo das águas pluviais.
          </p>
          <p>
            Saneamento vai muito além de esgoto tratado. Envolve um conjunto de
            serviços essenciais para a saúde pública e qualidade de vida:
            abastecimento de água potável, coleta e tratamento de esgoto, manejo
            de resíduos sólidos e drenagem urbana. Quando o saneamento é
            eficiente, as doenças diminuem, o meio ambiente agradece e as
            comunidades vivem melhor.
          </p>
        </div>
        <div className="w-1/2">
          <Image
            src={ilustrationHome}
            alt="Saneamento"
            width={512}
            height={512}
          />
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div className="w-1/2">
          <Image
            src={ilustrationThree}
            alt="Saneamento"
            width={512}
            height={512}
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-4xl mb-6 text-blue-900 font-semibold">
            🏠 Cuidados com a água em casa
          </h2>
          <p className="mb-3">
            É em casa que a mudança começa. Práticas responsáveis no dia a dia
            reduzem o consumo, protegem o meio ambiente e ainda ajudam na conta
            de água.
          </p>
          <p>
            Atenção especial para banheiros, cozinha e áreas externas. Escolha
            equipamentos mais econômicos, evite o desperdício e envolva toda a
            família nessa missão. Água não nasce na torneira — e não dá pra
            viver sem ela.
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-6">
      <div className="w-1/2">
          <h2 className="text-4xl mb-6 text-blue-900 font-semibold">
            🚿 A importância da água e seu uso consciente.
          </h2>
          <p className="mb-3">
            A água é essencial para todas as formas de vida na Terra. Nosso
            corpo é composto por mais de 60% de água, e ela participa de quase
            todos os processos vitais — da digestão à regulação da temperatura.
            Sem água limpa e acessível, não há saúde, agricultura, nem
            desenvolvimento sustentável. Cuidar desse recurso é cuidar da vida.
          </p>
          <p>
            Usar água de forma consciente significa evitar desperdícios e adotar
            hábitos que preservem esse recurso tão precioso. É fechar a torneira
            enquanto escova os dentes, consertar vazamentos, reutilizar a água
            da máquina de lavar e não demorar no banho. Pode parecer pouco, mas
            pequenas atitudes fazem uma diferença enorme no mundo.
          </p>
        </div>
        <div className="w-1/2">
          <Image
            src={ilustrationTwo}
            alt="Saneamento"
            width={512}
            height={512}
          />
        </div>
      </div>
      <div className="flex items-center space-x-6">
      <div className="w-1/2">
          <Image
            src={ilustrationFour}
            alt="Saneamento"
            width={512}
            height={512}
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-4xl mb-6 text-blue-900 font-semibold">
            ✅Boas práticas de uso consciente da água.
          </h2>
          <ul>
            <li className="mb-3">
              <strong>Feche a torneira ao escovar os dentes:</strong> você pode
              economizar até 12 litros por minuto.
            </li>
            <li className="mb-3">
              <strong>Reaproveite a água da máquina de lavar:</strong> use para
              lavar o quintal, o carro ou o banheiro.
            </li>
            <li className="mb-3">
              <strong>Verifique vazamentos com frequência:</strong> se houver
              vazamento, procure um profissional.
            </li>
            <li className="mb-3">
              <strong>Capte e use água da chuva para regar plantas:</strong> use
              o lixo para coleta seletiva.
            </li>
            <li>
              <strong>Evite jogar lixo em bueiros:</strong>entupimentos causam
              enchentes e contaminam a água que bebemos.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
