import Cta from "@/components/sections/Cta";
import Differentials from "@/components/sections/Differentials";
import FAQSection from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import InfoListSection from "@/components/sections/InfoList";
import Team from "@/components/sections/Team";
import { contactInfo } from "@/data/contact";
import {
  CalendarClock,
  Percent,
  WalletMinimal,
  PhoneOff,
  FileBadge,
  FileCheck,
  Handshake
} from 'lucide-react';


interface FAQItem {
  question: string;
  answer: string;
}

const NegotiatingDebts = () => {
  const listItems = [
    {
      icon: <CalendarClock className="w-6 h-6 text-cyan-600" />,
      title: "Parcelamento de dívidas em atraso com prazos estendidos",
    },
    {
      icon: <Percent className="w-6 h-6 text-cyan-600" />,
      title: "Redução de juros, multas e encargos contratuais",
    },
    {
      icon: <WalletMinimal className="w-6 h-6 text-cyan-600" />,
      title: "Descontos para quitação à vista",
    },
    {
      icon: <PhoneOff className="w-6 h-6 text-cyan-600" />,
      title: "Suspensão de cobranças agressivas e ligações abusivas",
    },
    {
      icon: <FileBadge className="w-6 h-6 text-cyan-600" />,
      title: "Cancelamento de negativação (SPC/Serasa) após acordo",
    },
    {
      icon: <FileCheck className="w-6 h-6 text-cyan-600" />,
      title: "Regularização de contratos em situação de inadimplemento",
    },
    {
      icon: <Handshake className="w-6 h-6 text-cyan-600" />,
      title: "Acordos com bancos, financeiras, prestadores de serviço e até particulares",
    },
  ];

  const faqData: FAQItem[] = [
    {
      question: "Vale a pena fazer acordo direto com o banco?",
      answer:
        "Depende. Em muitos casos, os bancos oferecem acordos com parcelas impagáveis, juros disfarçados ou cláusulas prejudiciais. Sem orientação jurídica, o consumidor pode acabar assumindo um compromisso ainda mais desequilibrado. Um advogado experiente analisa a proposta, aponta abusos e garante que o acordo seja legal e justo.",
    },
    {
      question: "Negociação extrajudicial é melhor do que entrar com ação?",
      answer:
        "Na maioria das vezes, sim. Resolver fora do Judiciário evita custas, demora e desgaste emocional. Mas é fundamental que a negociação seja feita com respaldo técnico, porque, se as condições forem abusivas ou o acordo for mal redigido, você pode ter ainda mais prejuízo.",
    },
    {
      question: "Quais são os riscos de negociar uma dívida por conta própria?",
      answer:
        "Assinar um acordo sem entender todas as cláusulas pode gerar renúncia de direitos, inclusão de juros capitalizados, perda de garantias legais e até abertura para novas cobranças no futuro. Com o suporte jurídico, esses riscos são evitados.",
    },
    {
      question:
        "Vocês contam com profissionais que entendem de cálculos para negociar com os bancos?",
      answer:
        "Sim. Nosso escritório trabalha com peritos auxiliares especializados em cálculos bancários, o que nos permite apresentar propostas de negociação baseadas em dados precisos e contestar simulações feitas pelos bancos que contenham juros excessivos, encargos indevidos ou amortizações incorretas.",
    },
    {
      question: "O banco se nega a negociar. Posso fazer algo?",
      answer:
        "Sim. Um advogado pode formalizar a tentativa de acordo extrajudicial e, caso haja recusa injustificada ou prática abusiva, é possível ingressar com medidas judiciais para suspender cobranças ou revisar os débitos.",
    },
    {
      question: "É verdade que posso conseguir descontos maiores com ajuda de um advogado?",
      answer:
        "Em muitos casos, sim. Bancos e financeiras tendem a respeitar mais propostas feitas com respaldo jurídico, pois sabem que a outra parte conhece seus direitos. Além disso, conseguimos negociar prazos realistas e proteger o cliente de condições desleais.",
    },
    {
      question: "Mesmo com dívidas altas, vale tentar negociar?",
      answer:
        "Com certeza. Inclusive, quanto maior a dívida, mais o banco tende a flexibilizar, especialmente com intermediação profissional. O importante é apresentar um plano viável e amparado por argumentos jurídicos sólidos.",
    },
    {
      question: "Estou sendo cobrado judicialmente. Ainda posso negociar fora do processo?",
      answer:
        "Sim. Em muitos casos, mesmo com ação em andamento, é possível suspender o processo e fazer um acordo extrajudicial. O advogado atua tanto na negociação quanto na formalização da retirada da ação, garantindo segurança jurídica.",
    },
    {
      question:
        "Me sinto envergonhado por dever e tenho medo de conversar com o banco. Isso é comum?",
      answer:
        "Sim, e você não está sozinho. Muitos clientes se sentem culpados ou constrangidos por estarem endividados, mas a verdade é que muitas vezes o sistema financeiro é feito para empurrar contratos difíceis de entender e juros abusivos. Nosso papel é te proteger, resgatar sua dignidade financeira e construir soluções viáveis com respeito e segurança.",
    },
    {
      question: "Tenho medo de perder minha casa ou meu salário. A negociação pode evitar isso?",
      answer:
        "Sim. A negociação extrajudicial pode impedir bloqueios, penhoras e medidas mais graves, especialmente quando feita de forma técnica e antecipada. Nosso trabalho é agir antes que a situação se agrave, protegendo o que é essencial para sua vida — sua moradia, sua renda e sua tranquilidade.",
    },
    {
      question: "Já tentei negociar antes e só piorou. Por que seria diferente com um advogado?",
      answer:
        "Porque agora você não está mais sozinho diante do banco. Com respaldo jurídico, toda proposta é feita com análise de cláusulas, cálculos e proteção contratual. Nós sabemos identificar armadilhas, contestar abusos e garantir que o que for acordado será justo, legal e viável para você.",
    },
  ];

  return (
    <>
      <Hero
        whatsappNumber={contactInfo.phone.secondary}
        title="Negociação Extrajudicial de Dívidas"
        description="Nosso escritório atua com foco em defesas bancárias e renegociação de dívidas, com conhecimento técnico e experiência prática acumulada em mais de 15 anos de atuação no mercado financeiro. Com profissionais que já trabalharam dentro de instituições bancárias, temos a expertise necessária para conduzir acordos realistas, sustentáveis e juridicamente seguros."
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
        title="O que podemos negociar para você?"
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
          href={contactInfo.whatsapp.services.debtRenegotiation}
        />
      </Cta>

      <FAQSection
        title="Perguntas Frequentes"
        faqs={faqData}
        contactLink={contactInfo.whatsapp.services.debtRenegotiation}
        contactLabel="Fale agora com um Especialista"
      />

      <Team />
      <Differentials buttonHref={contactInfo.whatsapp.services.debtRenegotiation} />
    </>
  );
};

export default NegotiatingDebts;
