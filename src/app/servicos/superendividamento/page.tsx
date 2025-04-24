import Cta from "@/components/sections/Cta";
import Differentials from "@/components/sections/Differentials";
import FAQSection from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import InfoListSection from "@/components/sections/InfoList";
import Team from "@/components/sections/Team";
import { contactInfo } from "@/data/contact";
import { CreditCard, PieChart, AlertTriangle, Shield, Percent, HandCoins } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const OverIndebtedness = () => {
  const listItems = [
    {
      icon: <CreditCard className="w-6 h-6 text-cyan-600" />,
      title: "Dívidas acumuladas por empréstimos, cartões de crédito e financiamentos",
    },
    {
      icon: <PieChart className="w-6 h-6 text-cyan-600" />,
      title: "Comprometimento da maior parte da renda com parcelas e descontos",
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-cyan-600" />,
      title: "Acordos desequilibrados firmados sob pressão",
    },
    {
      icon: <Shield className="w-6 h-6 text-cyan-600" />,
      title: "Cobrança judicial sem respeito ao mínimo existencial",
    },
    {
      icon: <Percent className="w-6 h-6 text-cyan-600" />,
      title: "Renegociações abusivas com juros excessivos e capitalização irregular",
    },
    {
      icon: <HandCoins className="w-6 h-6 text-cyan-600" />,
      title: "Tentativas de penhora de bens essenciais ou salários",
    },
  ];

  const faqData: FAQItem[] = [
    {
      question: "O que é superendividamento?",
      answer:
        "Superendividamento é a situação em que uma pessoa, de boa-fé, não consegue pagar todas as suas dívidas de consumo sem comprometer o mínimo necessário para uma vida digna — como alimentação, moradia e saúde.",
    },
    {
      question: "Quais tipos de dívidas entram na Lei do Superendividamento?",
      answer:
        "A lei abrange dívidas decorrentes de relações de consumo, como empréstimos, financiamentos, compras parceladas e uso de cartão de crédito. Estão excluídas dívidas com garantia real (como veículos e imóveis), crédito rural e dívidas originadas por fraude.",
    },
    {
      question: "O plano judicial de pagamento pode ter carência?",
      answer:
        "A lei abrange dívidas decorrentes de relações de consumo, como empréstimos, financiamentos, compras parceladas e uso de cartão de crédito. Estão excluídas dívidas com garantia real (como veículos e imóveis), crédito rural e dívidas originadas por fraude.",
    },
    {
      question: "O plano judicial de pagamento pode ter carência?",
      answer:
        "Sim. A Lei do Superendividamento permite que o consumidor proponha um prazo de carência no início do plano de pagamento — ou seja, um período em que não é exigido o pagamento imediato das parcelas. Esse prazo é especialmente importante para quem está em situação crítica e precisa reorganizar sua vida financeira antes de iniciar o pagamento das dívidas. A carência deve ser justificada e aprovada pelo juiz, podendo variar conforme a situação concreta e a concordância dos credores.",
    },
    {
      question: "A Lei do Superendividamento vale para qualquer consumidor?",
      answer:
        "Sim, desde que seja pessoa física, de boa-fé e que se encontre em situação de superendividamento. A lei não se aplica a quem contraiu dívidas com intenção de não pagar.",
    },
    {
      question: "É possível juntar todas as dívidas em um só processo?",
      answer:
        "Sim. A lei permite que o consumidor proponha judicialmente um plano de pagamento que unifique todas as dívidas de consumo, respeitando sua capacidade de pagamento e garantindo o mínimo existencial.",
    },
    {
      question: "Por quanto tempo posso parcelar minhas dívidas pelo plano judicial?",
      answer:
        "O plano de pagamento proposto na Justiça pode prever o parcelamento das dívidas em até 5 anos, desde que viável e aprovado pelos credores.",
    },
    {
      question: "O que é o mínimo existencial garantido por lei?",
      answer:
        "É o valor que deve ser preservado para que o consumidor consiga manter uma vida digna. Engloba despesas básicas como alimentação, moradia, saúde, transporte e educação.",
    },
    {
      question: "O que acontece se os credores não aceitarem o plano?",
      answer:
        "Se não houver acordo na audiência de conciliação, o juiz poderá instaurar um processo de repactuação forçada, avaliando os abusos e decidindo sobre a viabilidade do plano proposto.",
    },
    {
      question: "Sou idoso e estou superendividado. Tenho alguma proteção adicional?",
      answer:
        "Sim. A Lei do Superendividamento também alterou o Estatuto do Idoso, reconhecendo que idosos superendividados merecem atenção especial, sobretudo diante de práticas abusivas e concessões irresponsáveis de crédito.",
    },
  ];

  return (
    <>
      <Hero
        whatsappNumber={contactInfo.phone.secondary}
        title="Defesa Jurídica em Casos de Superendividamento"
        description="Nosso escritório é referência em Direito Bancário e na defesa de consumidores que enfrentam superendividamento — situação em que as dívidas ultrapassam a capacidade de pagamento sem comprometer o mínimo existencial. Com mais de 15 anos de experiência no mercado financeiro e profissionais que já atuaram em bancos, temos o conhecimento necessário para identificar abusos e construir soluções jurídicas eficazes."
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
        title="Atuamos em situações como:"
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
          title="Iniciar Atendimento pelo Whatsapp"
          type="link"
          href={contactInfo.whatsapp.services.overIndebtedness}
        />
      </Cta>

      <FAQSection
        title="Perguntas Frequentes"
        faqs={faqData}
        contactLink={contactInfo.whatsapp.services.overIndebtedness}
        contactLabel="Fale agora com um Especialista"
      />

      <Team />
      <Differentials buttonHref={contactInfo.whatsapp.services.overIndebtedness} />
    </>
  );
};

export default OverIndebtedness;
