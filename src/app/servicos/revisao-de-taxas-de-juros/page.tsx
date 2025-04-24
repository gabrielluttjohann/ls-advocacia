import Cta from "@/components/sections/Cta";
import Differentials from "@/components/sections/Differentials";
import FAQSection from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import InfoListSection from "@/components/sections/InfoList";
import Team from "@/components/sections/Team";
import { contactInfo } from "@/data/contact";
import {
  Percent,
  Calculator,
  ShieldAlert,
  CreditCard,
  RefreshCw,
  FileWarning,
  TrendingUp,
  Presentation,
  FileSearch,
  Wallet,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const ReviewingInterestRates = () => {
  const listItems = [
    {
      icon: <Percent className="w-6 h-6 text-cyan-600" />,
      title: "Financiamentos com juros acima da média de mercado",
    },
    {
      icon: <Calculator className="w-6 h-6 text-cyan-600" />,
      title: "Contratos com capitalização indevida de juros (anatocismo)",
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-cyan-600" />,
      title: "Inclusão de seguros, tarifas e taxas sem consentimento expresso",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-cyan-600" />,
      title: "Cartões de crédito rotativo com encargos disfarçados",
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-cyan-600" />,
      title: "Renegociações que agravam o endividamento",
    },
    {
      icon: <FileWarning className="w-6 h-6 text-cyan-600" />,
      title: "Cláusulas abusivas ou de difícil compreensão",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-cyan-600" />,
      title: "Saldo devedor que aumenta mesmo após anos de pagamento",
    },
    {
      icon: <Presentation className="w-6 h-6 text-cyan-600" />,
      title: "Simulações contratuais distorcidas ou ofertas enganosas",
    },
    {
      icon: <FileSearch className="w-6 h-6 text-cyan-600" />,
      title: "Cobrança de encargos não previstos no contrato original",
    },
    {
      icon: <Wallet className="w-6 h-6 text-cyan-600" />,
      title: "Dificuldade para quitação ou comprometimento da renda familiar",
    },
  ];

  const faqData: FAQItem[] = [
    {
      question: "Como saber se estou pagando juros abusivos?",
      answer:
        "A abusividade dos juros pode ser verificada quando estão 30% ou mais acima da média de mercado. Analisamos seu contrato comparando com índices oficiais do Banco Central para identificar cobranças excessivas.",
    },
    {
      question:
        "Estou com parcelas em atraso. A ação revisional suspende a dívida ou impede a retomada do bem?",
      answer:
        "A ação por si só não suspende automaticamente, mas podemos requerer medidas cautelares para proteger seu patrimônio enquanto o processo tramita, incluindo suspensão de cobranças e bloqueio de penhoras.",
    },
    {
      question: "É possível revisar um contrato mesmo que ele já esteja quitado?",
      answer:
        "Sim, desde que dentro do prazo prescricional (normalmente 10 anos). Podemos buscar a restituição de valores pagos indevidamente, com correção monetária e, em muitos casos, devolução em dobro conforme o CDC.",
    },
    {
      question:
        "Qual a diferença entre juros remuneratórios e juros de mora? Ambos podem ser abusivos?",
      answer:
        "Juros remuneratórios são cobrados durante a vigência do contrato, enquanto juros de mora só após inadimplência. Ambos podem ser abusivos se ultrapassarem padrões legais ou de mercado.",
    },
    {
      question: "E nos contratos de crédito rural? Os limites de juros são diferentes?",
      answer:
        "Sim, o crédito rural tem regras específicas com tetos definidos por resoluções do CMN. Juros de mora não podem ultrapassar 1% ao ano nestes contratos.",
    },
    {
      question: "O banco pode cobrar Tarifa de Cadastro no contrato?",
      answer:
        "Só é permitido cobrar uma única vez no início do relacionamento. Cobranças repetidas ou valores excessivos são ilegais e podem ser restituídos.",
    },
    {
      question: "Quando a cobrança do seguro é considerada abusiva?",
      answer:
        "Quando é imposta como condição para o crédito, sem consentimento expresso ou quando há falta de transparência nas informações sobre cobertura e valores.",
    },
    {
      question: "Posso entrar com a ação e parar de pagar o contrato?",
      answer:
        "Cada caso é analisado individualmente. Em algumas situações podemos pedir judicialmente a suspensão dos pagamentos ou depósito em juízo dos valores incontroversos.",
    },
    {
      question: "É verdade que bancos fazem renegociações que aumentam ainda mais a dívida?",
      answer:
        "Sim. Muitas renegociações apenas reagrupam o saldo com novas taxas, piorando a situação. Podemos revisar judicialmente essas condições abusivas.",
    },
    {
      question: "Vocês atendem clientes de quais estados?",
      answer:
        "Atuamos principalmente na Região Sul (RS, SC e PR), mas analisamos casos de outras regiões conforme a viabilidade jurídica.",
    },
    {
      question: "Preciso comparecer ao escritório para ser atendido?",
      answer:
        "Não. Oferecemos atendimento 100% digital com reuniões por vídeo, envio de documentos online e acompanhamento à distância, mantendo toda a segurança e qualidade.",
    },
    {
      question: "Quem analisa meu caso? São advogados?",
      answer:
        "Sim. Você será atendido exclusivamente por advogados especialistas em Direito Bancário, sem uso de plataformas automáticas ou robôs.",
    },
    {
      question: "Em quanto tempo terei uma resposta sobre meu caso?",
      answer:
        "Normalmente no mesmo dia do contato, após análise dos documentos. Priorizamos agilidade e transparência no atendimento.",
    },
    {
      question: "Quanto custa para entrar com a ação?",
      answer:
        "Nossos honorários seguem a tabela da OAB e são proporcionais à complexidade do caso. Apresentamos proposta transparente sem custos ocultos.",
    },
  ];

  return (
    <>
      <Hero
        whatsappNumber={contactInfo.phone.secondary}
        title="Defesa Estratégica em Ações Revisionais de Juros"
        description="Atuação técnica, ética e eficaz na proteção de consumidores contra cláusulas abusivas em contratos bancários. Nosso escritório é especializado em Direito Bancário, com destaque para a atuação em demandas que envolvem cobranças indevidas, juros abusivos e desequilíbrio contratual em financiamentos, empréstimos, cartões de crédito e renegociações bancárias. Com mais de 15 anos de experiência no setor financeiro, temos expertise para identificar rapidamente práticas ilegais e proteger os direitos do consumidor."
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
        title="Atuação técnica, ética e eficaz na proteção de consumidores contra cláusulas abusivas em contratos bancários"
        description="Atuamos na defesa de seus direitos em situações como:"
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
          href={contactInfo.whatsapp.services.interestRateReview}
        />
      </Cta>

      <FAQSection
        title="Perguntas Frequentes"
        faqs={faqData}
        contactLink={contactInfo.whatsapp.services.interestRateReview}
        contactLabel="Fale agora com um Especialista"
      />

      <Team />
      <Differentials buttonHref={contactInfo.whatsapp.services.interestRateReview} />
    </>
  );
};

export default ReviewingInterestRates;
