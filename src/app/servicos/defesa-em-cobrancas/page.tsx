import Cta from "@/components/sections/Cta";
import Differentials from "@/components/sections/Differentials";
import FAQSection from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import InfoListSection from "@/components/sections/InfoList";
import Team from "@/components/sections/Team";
import { contactInfo } from "@/data/contact";
import {
  FileText,
  CheckCircle,
  AlertOctagon,
  Percent,
  CalendarX,
  Shield,
  FileSearch,
  Scale
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const DefenseInCollections = () => {
  
  const listItems = [
    {
      icon: <FileText className="w-6 h-6 text-cyan-600" />,
      title: "Ações de cobrança ou execução sem apresentação de contrato",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-cyan-600" />,
      title: "Cobrança de valores já quitados ou renegociados",
    },
    {
      icon: <AlertOctagon className="w-6 h-6 text-cyan-600" />,
      title: "Inclusão indevida em cadastros de inadimplentes",
    },
    {
      icon: <Percent className="w-6 h-6 text-cyan-600" />,
      title: "Juros abusivos e capitalização ilegal de encargos",
    },
    {
      icon: <CalendarX className="w-6 h-6 text-cyan-600" />,
      title: "Alegação de inadimplemento sem comprovação de mora",
    },
    {
      icon: <Shield className="w-6 h-6 text-cyan-600" />,
      title: "Tentativa de penhora de bens essenciais e impenhoráveis",
    },
    {
      icon: <FileSearch className="w-6 h-6 text-cyan-600" />,
      title: "Defesa contra abusos em contratos antigos já pagos parcialmente",
    },
    {
      icon: <Scale className="w-6 h-6 text-cyan-600" />,
      title: "Contestação de dívidas oriundas de contratos com cláusulas abusivas",
    },
  ];
  
  const faqData: FAQItem[] = [
    {
      question: "Recebi uma intimação de cobrança judicial do banco. O que devo fazer?",
      answer: "Procure um advogado imediatamente. É possível apresentar defesa e, em muitos casos, demonstrar a nulidade parcial ou total da dívida cobrada."
    },
    {
      question: "Preciso me defender no prazo da intimação ou posso esperar?",
      answer: "É fundamental apresentar defesa dentro do prazo indicado na intimação. Ao ser citado em uma ação judicial, o prazo para se manifestar é contado em dias úteis e, caso não haja defesa no tempo correto, o juiz pode considerar verdadeiros os fatos alegados pelo banco e proferir sentença favorável à instituição financeira. Por isso, buscar orientação jurídica imediata é essencial para garantir seus direitos e evitar prejuízos irreversíveis."
    },
    {
      question: "Perdi o prazo para me defender. Ainda posso fazer alguma coisa?",
      answer: "Sim, em muitos casos ainda é possível agir, mesmo após o fim do prazo para defesa. Se você foi revel (não apresentou contestação ou embargos no tempo legal), o processo pode seguir sem sua participação, mas isso não significa que todos os seus direitos estejam perdidos. É possível apresentar pedidos de nulidade por citação irregular, embargos à execução fora do prazo (se houver penhora), ou ainda ações autônomas, como a ação anulatória ou revisional, dependendo das circunstâncias e do tipo de cobrança."
    },
    {
      question: "O banco pode penhorar meus bens?",
      answer: "Depende. Existem bens protegidos por lei, como imóvel de moradia, salários e instrumentos de trabalho. Analisamos seu caso para preservar seu patrimônio."
    },
    {
      question: "O banco pode bloquear valores da minha conta por causa de uma dívida?",
      answer: "Não por conta própria. O banco não pode, por iniciativa própria, bloquear ou reter valores da sua conta corrente ou poupança para cobrar uma dívida, salvo se houver autorização expressa no contrato (como em operações com conta vinculada) — e mesmo nesses casos, há limites legais e jurisprudenciais. O bloqueio só pode ocorrer por ordem judicial, dentro de um processo, após a citação do devedor e a oportunidade de defesa."
    },
    {
      question: "A dívida já está paga, mas o banco entrou com ação. E agora?",
      answer: "Se houver quitação parcial ou total e o banco ajuizou cobrança, é possível apresentar defesa e pleitear a extinção do processo e até indenização por dano moral."
    },
    {
      question: "Posso negociar a dívida durante o processo?",
      answer: "Sim. A depender do caso, é possível negociar judicialmente, inclusive com mediação do próprio juízo."
    },
    {
      question: "Qual a diferença entre ação de cobrança, execução e ação monitória?",
      answer: "Essas são três formas diferentes que os bancos usam para cobrar uma dívida na Justiça: Ação de cobrança (quando não tem título executivo), Ação de execução (quando possui título executivo) e Ação monitória (quando tem documento que prova a dívida mas não é título executivo). Cada uma tem prazos e consequências diferentes para o devedor."
    },
    {
      question: "É possível anular juros abusivos cobrados pelo banco?",
      answer: "Sim. Se comprovado excesso nos encargos, o Judiciário pode revisar o contrato e reduzir os valores cobrados de forma ilegal."
    },
    {
      question: "O banco pode me cobrar se não há contrato assinado?",
      answer: "Não basta apenas alegar a existência da dívida. O banco deve comprovar a origem, validade e exigibilidade do crédito, inclusive apresentando o contrato assinado."
    },
    {
      question: "Vocês atendem presencialmente ou só online?",
      answer: "Atendemos de forma 100% digital ou presencialmente na Região Sul (RS, SC e PR), conforme a conveniência do cliente."
    }
  ];

  return (
    <>
      <Hero
        whatsappNumber={contactInfo.phone.secondary}
        title="Defesa Jurídica em Ações de Cobrança Bancária"
        description="Atuação estratégica e combativa na proteção de consumidores acionados judicialmente por instituições financeiras. Nosso escritório é especializado em Direito Bancário, com mais de 15 anos de experiência no mercado financeiro. Contamos com advogados que já atuaram dentro de bancos, o que nos dá conhecimento prático e privilegiado sobre o funcionamento interno das instituições. Essa vivência nos permite identificar rapidamente abusos, falhas contratuais e cobranças indevidas, oferecendo uma defesa técnica, precisa e eficaz aos nossos clientes."
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
          href={contactInfo.whatsapp.services.defenseInCollections}
        />
      </Cta>

      <FAQSection
        title="Perguntas Frequentes"
        faqs={faqData}
        contactLink={contactInfo.whatsapp.services.defenseInCollections}
        contactLabel="Fale agora com um Especialista"
      />

      <Team />
      <Differentials buttonHref={contactInfo.whatsapp.services.defenseInCollections} />
    </>
  );
};

export default DefenseInCollections;
