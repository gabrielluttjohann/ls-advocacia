import Cta from "@/components/sections/Cta";
import Differentials from "@/components/sections/Differentials";
import FAQSection from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import InfoListSection from "@/components/sections/InfoList";
import Team from "@/components/sections/Team";
import WhatsappButton from "@/components/ui/WhatsappButton";
import { contactInfo } from "@/data/contact";

import {
  HandCoins,
  FileX,
  Percent,
  ShieldAlert,
  RefreshCw,
  Phone,
  HeartPulse,
  CreditCard,
} from "lucide-react";

const IllegalLoans = () => {
  const listItems = [
    {
      icon: <HandCoins className="w-6 h-6 text-cyan-600" />,
      title: "Descontos indevidos em aposentadorias e salários",
    },
    {
      icon: <FileX className="w-6 h-6 text-cyan-600" />,
      title: "Empréstimos não contratados (fraude ou contratação sem autorização)",
    },
    {
      icon: <Percent className="w-6 h-6 text-cyan-600" />,
      title: "Revisão de contratos com juros abusivos e venda casada",
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-cyan-600" />,
      title: "Descontos acumulados que comprometem a subsistência",
    },

    {
      icon: <RefreshCw className="w-6 h-6 text-cyan-600" />,
      title: "Desistência da contratação dentro do prazo legal",
    },
    {
      icon: <Phone className="w-6 h-6 text-cyan-600" />,
      title: "Contratação por ligação telefônica sem gravação ou com gravação fraudulenta",
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-cyan-600" />,
      title: "Descontos em benefícios assistenciais (BPC/LOAS)",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-cyan-600" />,
      title:
        "Oferta de crédito via cartão consignado com cobrança rotativa disfarçada de empréstimo",
    },
  ];

  const faqData = [
    {
      question: "Fizeram um empréstimo no meu nome sem minha autorização. O que fazer?",
      answer:
        "Você pode anular esse contrato e exigir a devolução em dobro dos valores descontados, além de pleitear indenização por danos morais.",
    },
    {
      question: "O banco renovou meu empréstimo automaticamente. Isso é legal?",
      answer:
        "Não. A renovação automática sem manifestação expressa do consumidor é considerada prática abusiva e pode ser anulada judicialmente.",
    },
    {
      question:
        "Tenho muitos descontos no benefício e não consigo viver com o que sobra. Posso pedir redução?",
      answer:
        "Sim. A Justiça admite a revisão contratual com base no princípio da função social do contrato e da dignidade da pessoa humana, especialmente em caso de superendividamento.",
    },
    {
      question: "Cartão consignado é a mesma coisa que empréstimo?",
      answer:
        "Não. Trata-se de um produto com funcionamento diferente, muitas vezes disfarçado de empréstimo para mascarar juros exorbitantes. Pode ser questionado judicialmente.",
    },
    {
      question: "Vocês atendem clientes de todo o Brasil?",
      answer:
        "Nosso foco é a Região Sul — Rio Grande do Sul, Santa Catarina e Paraná — pois isso nos permite atuar com maior agilidade e proximidade junto às varas judiciais. Mas, em alguns casos, conseguimos atender digitalmente outras regiões mediante análise prévia.",
    },
    {
      question: "Preciso ir até o escritório para ser atendido?",
      answer:
        "Não. Embora você possa ser atendido presencialmente em nosso escritório físico, todo o atendimento pode ser feito de forma digital, com conforto e segurança. Realizamos reuniões por vídeo, assinatura eletrônica de documentos e acompanhamento completo do processo online.",
    },
    {
      question: "O atendimento é feito apenas por advogados?",
      answer:
        "Sim. Aqui você fala diretamente com advogadas e advogados experientes, com profundo conhecimento técnico e atuação exclusiva em Direito Bancário. Nada de robôs ou atendimentos terceirizados.",
    },
    {
      question: "Vocês cobram pela análise inicial do caso?",
      answer:
        "Não. Fazemos uma análise jurídica gratuita e personalizada, onde avaliamos os documentos, os descontos e os possíveis abusos cometidos pela instituição financeira antes de qualquer cobrança.",
    },
    {
      question: "Em quanto tempo terei uma resposta sobre meu caso?",
      answer: "Na maioria das vezes, retornamos com a análise imediatamente após o contato. Valorizamos a agilidade e o compromisso com quem nos procura.",
    },
    {
      question: "Quanto custa para entrar com a ação?",
      answer:
        "Os custos dependem do tipo de caso e da complexidade da ação. Após a análise gratuita, apresentamos uma proposta clara, transparente e com condições acessíveis.",
    },
  ];

  return (
    <>
      <Hero
        whatsappNumber={contactInfo.phone.secondary}
        title="Advogados Especialistas em Ilegalidades em Empréstimos Consignados"
        description="Durante 15 anos, trabalhamos para os bancos. Hoje, colocamos toda essa experiência a favor dos nossos clientes. Com conhecimento real das estratégias bancárias e expertise em crédito, oferecemos uma defesa estratégica e assertiva, agindo rapidamente para proteger seus direitos e patrimônio e garantir resultados concretos."
        links={[]}
        formLabels={{
          name: "Nome Completo",
          city: "Município",
          problem: "Descreva seu caso",
        }}
        formTitle="Fale Agora com um Advogado"
        ctaText="Falar com um Advogado Agora"
      />

      <InfoListSection
        title="Atuamos na defesa de seus direitos em situações como:"
        description=""
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
          title="Falar agora com um Advogado"
          type="link"
        />
      </Cta>

      <FAQSection
        title="Perguntas Frequentes"
        faqs={faqData}
        contactLink={contactInfo.whatsapp.secondary}
        contactLabel="Falar Agora com um Advogado"
      />


      <Team />
      <Differentials />
      <WhatsappButton  />
    </>
  );
};

export default IllegalLoans;
