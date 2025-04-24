import Cta from "@/components/sections/Cta";
import Differentials from "@/components/sections/Differentials";
import FAQSection from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import InfoListSection from "@/components/sections/InfoList";
import Team from "@/components/sections/Team";
import { contactInfo } from "@/data/contact";

import {
  Home,
  Briefcase,
  Landmark,
  HandCoins,
  Car,
  Hammer,
  Tractor,
  Package,
  Flower,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const UnseizableDebts = () => {
  const listItems = [
    {
      icon: <HandCoins className="w-6 h-6 text-cyan-600" />,
      title: "Salários, aposentadorias, pensões e benefícios sociais",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-cyan-600" />,
      title: "Honorários de profissionais liberais",
    },
    {
      icon: <Landmark className="w-6 h-6 text-cyan-600" />,
      title: "Valores em conta bancária até 40 salários-mínimos",
    },
    {
      icon: <Home className="w-6 h-6 text-cyan-600" />,
      title: "Imóvel residencial da família (bem de família)",
    },
    {
      icon: <Car className="w-6 h-6 text-cyan-600" />,
      title: "Instrumentos de trabalho (incluindo veículo)",
    },
    {
      icon: <Hammer className="w-6 h-6 text-cyan-600" />,
      title: "Máquinas, equipamentos e ferramentas empresariais essenciais",
    },
    {
      icon: <Tractor className="w-6 h-6 text-cyan-600" />,
      title: "Pequena propriedade rural trabalhada pela família",
    },
    {
      icon: <Tractor className="w-6 h-6 text-cyan-600" />,
      title: "Tratores, colheitadeiras e máquinas agrícolas essenciais",
    },
    {
      icon: <Flower className="w-6 h-6 text-cyan-600" />,
      title: "Animais, sementes e insumos da produção rural",
    },
    {
      icon: <Package className="w-6 h-6 text-cyan-600" />,
      title: "Produtos agrícolas armazenados para consumo ou venda direta",
    },
  ];

  const faqData: FAQItem[] = [
    {
      question: "O valor bloqueado na minha conta vai ser liberado automaticamente com o tempo?",
      answer:
        "Não. Para que os valores bloqueados sejam liberados, é necessário apresentar um pedido judicial fundamentado, com base na impenhorabilidade ou ilegalidade da penhora. A Justiça não faz a liberação automática.",
    },
    {
      question: "Quanto tempo demora para desbloquear um valor?",
      answer:
        "Depende da análise do juiz e da vara em que tramita o processo, mas na maioria dos casos ajuizamos o pedido em até 24 horas, com possibilidade de liminar ou decisão urgente em poucos dias, especialmente quando se trata de salário, aposentadoria ou verba alimentar.",
    },
    {
      question: "O bloqueio vai parar sozinho?",
      answer:
        "Não. Se não houver manifestação judicial ou defesa, o bloqueio pode continuar ocorrendo por tempo indeterminado — e pode ser reativado diversas vezes, inclusive sobre novas contas ou saldos.",
    },
    {
      question:
        "O que é “teimosinha”? Por que continuam bloqueando minha conta mesmo depois de pagar?",
      answer:
        "A chamada “penhora on-line por teimosinha” é um sistema automático do Sisbajud que reativa buscas em contas bancárias mesmo após bloqueios anteriores. Ela só cessa com ordem judicial expressa de suspensão, que deve ser solicitada após o pagamento ou defesa.",
    },
    {
      question: "Minha conta está com mais de um bloqueio. É normal?",
      answer:
        "Sim. É comum que uma pessoa tenha mais de uma ordem de penhora ao mesmo tempo, vinda de processos diferentes ou do mesmo processo em fases distintas. Cada uma precisa ser analisada isoladamente para avaliar as possibilidades de liberação.",
    },
    {
      question: "E se o bloqueio for de salário, aposentadoria ou benefício do INSS?",
      answer:
        "Esses valores são protegidos por lei e considerados impenhoráveis. Fazemos o pedido de desbloqueio imediato, inclusive com possibilidade de liminar em 24 a 48 horas.",
    },
    {
      question:
        "É possível resolver apenas com o pedido de desbloqueio, ou preciso de uma defesa completa?",
      answer:
        "Depende do caso. Em algumas situações, atuamos exclusivamente no pedido de desbloqueio. Em outras, é necessário formular também uma defesa no processo principal, como embargos à execução ou impugnação. Avaliamos caso a caso e propomos a melhor estratégia.",
    },
    {
      question: "Mesmo que o valor não pareça impenhorável, ainda posso tentar o desbloqueio?",
      answer:
        "Sim. Em muitos casos, mesmo sem uma evidência imediata de impenhorabilidade, conseguimos demonstrar ilegalidades ou abusos na penhora, justificando o pedido de desbloqueio com bons fundamentos jurídicos.",
    },
    {
      question: "E se for uma empresa com conta bloqueada?",
      answer:
        "Também atuamos na defesa de empresas e empresários, buscando o desbloqueio de valores essenciais à atividade empresarial e demonstrando que a penhora compromete a função social da empresa e o pagamento de salários.",
    },
    {
      question: "Vocês analisam o meu caso antes de eu contratar?",
      answer:
        "Sim. Oferecemos uma análise jurídica inicial gratuita, onde avaliamos o tipo de bloqueio, os fundamentos possíveis e a melhor estratégia de atuação para o seu caso específico.",
    },
    {
      question: "Já paguei a dívida. Por que ainda estão bloqueando minhas contas?",
      answer:
        "Se não houver comunicação formal ao juízo ou pedido de levantamento da penhora, os sistemas continuam realizando buscas. É fundamental que seja solicitada a baixa da ordem judicial de bloqueio, o que fazemos de forma rápida e fundamentada.",
    },
    {
      question: "Meu veículo pode ser penhorado? Existe alguma forma de protegê-lo?",
      answer:
        "Sim, ele pode ser protegido — desde que seja comprovadamente indispensável ao exercício da sua atividade profissional. A legislação prevê a impenhorabilidade de instrumentos de trabalho, o que pode incluir veículos utilizados como ferramenta essencial para o sustento do devedor ou da empresa.",
    },
    {
      question: "Máquinas e veículos da minha empresa podem ser penhorados?",
      answer:
        "Nem sempre. Quando esses bens são indispensáveis para a atividade econômica da empresa, como maquinário, equipamentos de produção ou veículos de entrega, é possível pedir a impenhorabilidade ou a substituição da penhora. O importante é comprovar que o bem é essencial para a continuidade do negócio.",
    },
    {
      question: "Sou produtor rural. Posso perder minha terra por uma dívida?",
      answer:
        "Se for uma pequena propriedade rural trabalhada pela família, a resposta é não. A Constituição Federal e o Código de Processo Civil protegem esse tipo de propriedade, que é considerada impenhorável.",
    },
    {
      question:
        "E os meus equipamentos agrícolas — como tratores e colheitadeiras? Posso protegê-los da penhora?",
      answer:
        "Sim. Equipamentos agrícolas indispensáveis à atividade rural são impenhoráveis por lei. Tratores, colheitadeiras e outras máquinas utilizadas diretamente na produção são considerados instrumentos de trabalho e, portanto, não podem ser penhorados, especialmente quando se trata de pequenos produtores ou agricultura familiar.",
    },
    {
      question: "Mesmo sendo empresário ou produtor, posso pedir a liberação de um bem penhorado?",
      answer:
        "Sim. Tanto empresas quanto produtores podem solicitar o desbloqueio, substituição ou exclusão da penhora, desde que exista fundamento legal e prova de essencialidade. Cada caso exige uma análise criteriosa, e é isso que fazemos aqui.",
    },
    {
      question: "Em quais estados vocês atuam?",
      answer:
        "Atuamos exclusivamente na Região Sul do Brasil — nos estados do Rio Grande do Sul, Santa Catarina e Paraná. Nosso foco regional é uma escolha estratégica: muitas vezes, as demandas exigem presença em audiências, análise de documentos físicos ou contato próximo com varas judiciais. Estar na mesma região nos permite oferecer um atendimento mais ágil, técnico e personalizado, com maior segurança para o cliente e efetividade na condução dos processos. Com sede no Rio Grande do Sul e estrutura preparada para atendimento digital, conseguimos unir proximidade geográfica e atuação moderna, sempre com foco na excelência em Direito Bancário.",
    },
  ];

  return (
    <>
      <Hero
        whatsappNumber={contactInfo.phone.secondary}
        title="Pedido de Desbloqueio de Valores e Defesa da Impenhorabilidade de Bens"
        description="Atuação rápida e eficaz para proteger seu patrimônio, com a confiança de um escritório que atua exclusivamente em Direito Bancário e é composto por profissionais com mais de 15 anos de experiência, incluindo vivência direta no interior de instituições financeiras. Conhecimento estratégico adquirido dentro dos bancos, aplicado com excelência na defesa de nossos clientes."
        links={[]}
        formLabels={{
          name: "Nome Completo",
          city: "Município",
          problem: "Descreva seu caso",
        }}
        formTitle="Agende uma Consulta"
        ctaText="Enviar Mensagem"
      />

      <InfoListSection
        title="Bens e Valores Impenhoráveis por Lei"
        description="Determinados bens e valores são protegidos por lei e não podem ser penhorados ou bloqueados, mesmo diante de dívidas. Conheça os principais exemplos:"
        items={listItems}
      />

      <Cta
        className="bg-cyan-600 text-white"
        layout="centered"
      >
        <Cta.Title className="text-4xl">Precisa de Assessoria Jurídica Especializada?</Cta.Title>
        <Cta.Description className="mb-10">
          Nossa equipe está pronta para oferecer a melhor solução para o seu caso. Clique no botão
          abaixo e inicia agora seu atendimento pelo whatsapp.
        </Cta.Description>
        <Cta.Button
          className="bg-white text-cyan-600"
          title="Iniciar Atendimento pelo Whatsapp"
          type="link"
          href={contactInfo.whatsapp.services.unattachableAssets}
        />
      </Cta>

      <FAQSection
        title="Perguntas Frequentes"
        description="Tire suas dúvidas sobre bloqueios e penhoras."
        faqs={faqData}
        contactLink={contactInfo.whatsapp.services.unattachableAssets}
        contactLabel="Fale agora com um Especialista"
      />

      <Team />
      <Differentials buttonHref={contactInfo.whatsapp.services.unattachableAssets} />
    </>
  );
};

export default UnseizableDebts;
