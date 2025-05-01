import Cta from "@/components/sections/Cta";
import Differentials from "@/components/sections/Differentials";
import FAQSection from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import InfoListSection from "@/components/sections/InfoList";
import Team from "@/components/sections/Team";
import WhatsappButton from "@/components/ui/WhatsappButton";
import { contactInfo } from "@/data/contact";
import {
  Handshake,
  FileSearch,
  Scale,
  Gavel,
  Shield,
  User,
  FileText,
  PieChart,
  Users,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const BusinessDebts = () => {
  const listItems = [
    {
      icon: <Handshake className="w-6 h-6 text-cyan-600" />,
      title: "Renegociação estratégica de dívidas com bancos e fornecedores",
    },
    {
      icon: <FileSearch className="w-6 h-6 text-cyan-600" />,
      title: "Revisão de contratos com juros abusivos e encargos indevidos",
    },
    {
      icon: <Scale className="w-6 h-6 text-cyan-600" />,
      title: "Ações judiciais para reequilíbrio contratual e revisão de cláusulas leoninas",
    },
    {
      icon: <Gavel className="w-6 h-6 text-cyan-600" />,
      title: "Suspensão de execuções, bloqueios e penhoras ilegais",
    },
    {
      icon: <Shield className="w-6 h-6 text-cyan-600" />,
      title: "Defesa contra protestos indevidos e cobranças abusivas",
    },
    {
      icon: <User className="w-6 h-6 text-cyan-600" />,
      title: "Proteção patrimonial dos sócios e blindagem jurídica",
    },
    {
      icon: <FileText className="w-6 h-6 text-cyan-600" />,
      title: "Elaboração de acordos extrajudiciais com segurança jurídica",
    },
    {
      icon: <PieChart className="w-6 h-6 text-cyan-600" />,
      title: "Consultoria para planejamento financeiro e reorganização empresarial",
    },
    {
      icon: <Users className="w-6 h-6 text-cyan-600" />,
      title: "Atuação integrada com contadores e peritos financeiros",
    },
  ];

  const faqData: FAQItem[] = [
    {
      question:
        "A empresa está com dívidas bancárias acumuladas. Existe solução jurídica para isso?",
      answer:
        "Sim. Nosso escritório atua na revisão de contratos com cláusulas abusivas, renegociação de condições de pagamento e, quando necessário, propositura de ações para reequilíbrio contratual. A abordagem é sempre técnica e estratégica, com base em fundamentos legais e análise documental detalhada.",
    },
    {
      question: "Estamos sendo cobrados judicialmente. Ainda é possível se defender?",
      answer:
        "Sim. Mesmo com a cobrança em fase judicial, é possível apresentar defesas específicas como embargos à execução, alegar excesso de cobrança, contestar juros indevidos e, em alguns casos, suspender medidas como penhora ou bloqueio de valores.",
    },
    {
      question:
        "Nossa empresa renegociou dívidas várias vezes, mas o saldo só aumenta. Isso pode ser revisto?",
      answer:
        "Sim. Em muitos casos, sucessivas renegociações geram encargos desproporcionais. É possível revisar os contratos, apurar a legalidade dos juros e encargos cobrados, e buscar judicialmente um valor mais justo.",
    },
    {
      question: "Os bens dos sócios podem ser atingidos em caso de dívidas da empresa?",
      answer:
        "Dependendo do tipo societário e dos contratos assinados, pode haver responsabilidade patrimonial dos sócios, especialmente em casos de garantias pessoais. Entretanto, existem instrumentos jurídicos capazes de limitar esse risco e proteger o patrimônio pessoal de forma lícita e eficaz.",
    },
    {
      question: "É possível buscar um acordo com os credores com segurança jurídica?",
      answer:
        "Sim. Atuamos também na condução de negociações extrajudiciais, com análise técnica dos contratos, definição de estratégias e formalização de acordos seguros, evitando cláusulas prejudiciais e novos encargos excessivos.",
    },
    {
      question: "A atuação do advogado é só em ações judiciais?",
      answer:
        "Não. Nossa atuação é preventiva, consultiva e contenciosa. Ajudamos a identificar riscos contratuais, propomos alternativas seguras de reestruturação financeira e acompanhamos todo o processo, com suporte técnico-jurídico em todas as fases.",
    },
    {
      question: "Vocês possuem equipe multidisciplinar para atender empresas?",
      answer:
        "Sim. Trabalhamos com advogados especialistas em direito bancário e empresarial, além de parceiros contábeis e financeiros que auxiliam na análise de contratos, fluxo de caixa e simulações de viabilidade. O atendimento é técnico, personalizado e focado na realidade da empresa.",
    },
    {
      question: "O atendimento é apenas presencial ou posso ser atendido à distância?",
      answer:
        "Nosso escritório oferece atendimento presencial, online e também por visita à empresa, conforme a necessidade do cliente. Entendemos que o empresário precisa de agilidade e praticidade, por isso, disponibilizamos reuniões por videoconferência, análise documental digital e comunicação constante por WhatsApp e e-mail.",
    },
    {
      question: "O escritório faz visitas à sede da empresa?",
      answer:
        "Sim. Quando necessário, realizamos visitas técnicas diretamente na empresa, especialmente em situações que exigem compreensão da dinâmica operacional, organização de documentos ou reuniões estratégicas com vários setores. Essa abordagem garante uma atuação mais próxima e personalizada.",
    },
    {
      question: "Atendem empresas de quais regiões?",
      answer:
        "Atuamos prioritariamente nos três estados do Sul do Brasil — Rio Grande do Sul, Santa Catarina e Paraná.",
    },
  ];

  return (
    <>
      <Hero
        whatsappNumber={contactInfo.phone.secondary}
        title="Advogados Especialistas na Defesa Bancária de Empresas"
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
        title="Como podemos ajudar sua empresa:"
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
          title="Falar Agora com um Advogado"
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
      <WhatsappButton />
    </>
  );
};

export default BusinessDebts;
