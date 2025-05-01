import Cta from "@/components/sections/Cta";
import Differentials from "@/components/sections/Differentials";
import FAQSection from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import InfoListSection from "@/components/sections/InfoList";
import Team from "@/components/sections/Team";
import WhatsappButton from "@/components/ui/WhatsappButton";
import { contactInfo } from "@/data/contact";

import {
  CloudRain,
  FileSearch,
  RefreshCw,
  Shield,
  FileText,
  Tractor,
  Gavel,
  Home,
  Calculator,
  Handshake,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const DefendingFarmers = () => {
  const listItems = [
    {
      icon: <CloudRain className="w-6 h-6 text-cyan-600" />,
      title:
        "Pedido de prorrogação judicial de dívidas rurais por fatores climáticos ou inadimplência justificada",
    },
    {
      icon: <FileSearch className="w-6 h-6 text-cyan-600" />,
      title: "Revisão de contratos bancários com juros abusivos e encargos ocultos",
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-cyan-600" />,
      title:
        "Contestação de renegociações indevidas com substituição da taxa subsidiada por juros de mercado",
    },
    {
      icon: <Shield className="w-6 h-6 text-cyan-600" />,
      title: "Defesa contra seguro rural embutido obrigatoriamente ou com valores superfaturados",
    },
    {
      icon: <FileText className="w-6 h-6 text-cyan-600" />,
      title:
        "Ações judiciais por negativa indevida de indenização pelo Proagro ou outros seguros agrícolas",
    },
    {
      icon: <Tractor className="w-6 h-6 text-cyan-600" />,
      title: "Contestação do desvirtuamento do crédito rural",
    },
    {
      icon: <Gavel className="w-6 h-6 text-cyan-600" />,
      title: "Defesa em ações de execução e suspensão de penhoras sobre bens essenciais",
    },
    {
      icon: <Home className="w-6 h-6 text-cyan-600" />,
      title:
        "Proteção do imóvel rural impenhorável e dos instrumentos de trabalho indispensáveis à produção",
    },
    {
      icon: <Calculator className="w-6 h-6 text-cyan-600" />,
      title: "Assessoria técnica com apoio de peritos em cálculos rurais e revisão contratual",
    },
    {
      icon: <Handshake className="w-6 h-6 text-cyan-600" />,
      title: "Elaboração de acordos extrajudiciais formalizados com segurança jurídica",
    },
  ];

  const faqData: FAQItem[] = [
    {
      question: "Estou endividado com o banco. Posso pedir mais prazo para pagar?",
      answer:
        "Sim! Se a dificuldade surgiu por fatores como seca, excesso de chuvas ou problemas de mercado, é possível pedir judicialmente a prorrogação da dívida rural, evitando o colapso financeiro e protegendo sua produção. Muitos bancos negam isso, mas a Justiça reconhece esse direito em diversas situações.",
    },
    {
      question:
        "Fiz uma renegociação, mas trocaram o juro subsidiado por um bem maior. Isso é legal?",
      answer:
        "Não, e é muito comum! Essa prática tem nome: desvirtuamento do crédito rural. Ela prejudica o produtor ao transformar um financiamento rural em um empréstimo comum, com juros de mercado. Isso pode ser anulado judicialmente, com revisão completa do contrato.",
    },
    {
      question: "O banco embutiu um seguro rural no meu contrato. Eu sou obrigado a pagar?",
      answer:
        "Depende. Se o seguro foi imposto sem explicação clara ou está superfaturado, ele pode ser considerado ilegal. Além disso, se você teve um sinistro e o seguro (como o Proagro) não pagou, é possível buscar na Justiça a indenização devida.",
    },
    {
      question: "Meu trator, minha colheitadeira ou o imóvel podem ser penhorados?",
      answer:
        "Em regra, não! A Constituição protege o imóvel rural utilizado para a produção e a subsistência da família, bem como os instrumentos essenciais ao trabalho, como máquinas e implementos agrícolas. Se o banco ou credor está ameaçando a penhora, é possível suspender isso judicialmente.",
    },
    {
      question: "E se o banco me colocou na Justiça para cobrar a dívida? Ainda posso me defender?",
      answer:
        "Sim, e deve! Mesmo após o início de uma ação de execução, é possível apresentar defesa técnica, pedir a revisão dos valores cobrados, questionar cláusulas abusivas e até negociar com segurança jurídica, com apoio do Judiciário.",
    },
    {
      question: "Os juros que estou pagando estão muito altos. Isso pode ser revisto?",
      answer:
        "Pode, sim! Se os juros ultrapassam os limites legais ou estão escondendo encargos indevidos, é possível ajuizar uma ação revisional. O Código de Defesa do Consumidor também protege o produtor em contratos bancários — e muitos juízes reconhecem o abuso das instituições financeiras.",
    },
    {
      question: "Ouvi falar que o crédito rural tem regras diferentes. Isso é verdade?",
      answer:
        "Com certeza. O crédito rural é regulado por normas específicas, como o Manual de Crédito Rural (MCR), que exige juros menores, transparência e vínculo com a atividade produtiva. Quando o banco desrespeita essas regras, o produtor pode contestar judicialmente.",
    },
    {
      question: "Posso fazer um acordo extrajudicial e parcelar com segurança?",
      answer:
        "Sim, e recomendamos! Com apoio jurídico, é possível formalizar acordos extrajudiciais bem redigidos, que evitam novas surpresas ou cláusulas escondidas. É uma forma estratégica de reorganizar a dívida sem perder o controle do patrimônio.",
    },
    {
      question: "Tenho medo de perder tudo. Existe alguma forma de proteger meu patrimônio rural?",
      answer:
        "Existe, sim. Com uma defesa técnica bem feita, é possível suspender penhoras indevidas, rever contratos injustos e proteger sua propriedade e os bens que garantem sua produção. Nosso escritório atua justamente para isso: garantir que você continue produzindo com dignidade.",
    },
    {
      question: "Meu Proagro foi negado, mesmo com perda total. Posso contestar?",
      answer:
        "Sim, pode e deve! Muitos produtores têm indenizações indevidamente negadas por erros das seguradoras ou dos bancos. A Justiça reconhece o direito à indenização, especialmente quando há prova da perda e cumprimento das exigências do seguro.",
    },
    {
      question: "O advogado pode ir até a minha propriedade rural?",
      answer:
        "Sim! Sabemos que muitos produtores estão em áreas afastadas ou têm dificuldade de se deslocar até a cidade. Por isso, nosso escritório oferece atendimento personalizado, inclusive com visitas à propriedade, quando necessário. Nosso objetivo é entender a realidade no campo, conversar com você com calma e prestar uma defesa sob medida para o seu caso.",
    },
    {
      question: "O escritório atende produtores rurais em quais regiões?",
      answer:
        "Atuamos especialmente no Sul do Brasil – Rio Grande do Sul, Santa Catarina e Paraná –, com foco em produtores familiares, médios e grandes. A depender do caso, também prestamos consultoria a distância com acompanhamento completo por telefone, videochamada e WhatsApp, garantindo praticidade e agilidade.",
    },
    {
      question:
        "O escritório tem profissionais especializados em contratos rurais e cálculos bancários?",
      answer: `
        Sim, contamos com uma equipe multidisciplinar que reúne: <br />
        • Advogados especialistas em Direito Bancário e Agrário, com experiência em revisões de contrato, execuções judiciais e defesa patrimonial;<br />
        • Consultores técnicos com experiência prática em gestão rural e análise contratual;<br />
        • Peritos contábeis parceiros, que realizam cálculos de juros, encargos e simulações financeiras para embasar as ações com segurança.<br /><br />
        Esse trabalho em conjunto garante resultados sólidos e defesas bem fundamentadas.
      `,
    },
    {
      question:
        "Se eu quiser apenas um parecer ou orientação, posso contratar sem entrar com ação?",
      answer:
        "Com certeza. Nem toda situação exige uma ação judicial. Se o que você precisa é entender seus direitos, revisar um contrato ou tirar dúvidas sobre uma cobrança, oferecemos consultoria individual e parecer técnico com explicações claras, análise dos documentos e orientações práticas para que você tome a melhor decisão.",
    },
    {
      question: "O escritório também auxilia em renegociações diretamente com o banco?",
      answer:
        "Sim. Muitas vezes, conseguimos resolver a situação de forma extrajudicial, com segurança e técnica, sem precisar ir ao Judiciário. Nesses casos, atuamos diretamente na negociação com o banco, redigimos os termos com clareza e evitamos que o produtor assine acordos prejudiciais ou com cláusulas abusivas escondidas.",
    },
    {
      question: "Vocês cuidam de tudo ou o produtor precisa correr atrás dos documentos sozinho?",
      answer:
        "Nós sabemos que o tempo no campo é corrido. Por isso, auxiliamos em todo o processo de organização dos documentos, análise dos contratos, pedidos bancários e encaminhamentos jurídicos. Nosso time acompanha cada etapa de perto para deixar você tranquilo e com mais tempo para cuidar da produção.",
    },
    {
      question: "Por que devo confiar no escritório?",
      answer:
        `Nosso diferencial é a experiência prática e o compromisso com o resultado. São mais de 15 anos de atuação em Direito Bancário, com profissionais que já trabalharam dentro de bancos, conhecem as estratégias das instituições financeiras e sabem como proteger quem produz. <br /><br />
        Além disso, temos uma atuação ética, técnica e transparente, com explicações claras, linguagem acessível e atendimento acolhedor. Aqui, você não é um número — é alguém que a gente quer ver prosperando.`,
    },
  ];

  return (
    <>
      <Hero
        whatsappNumber={contactInfo.phone.secondary}
        title="Advogados Especialistas na Defesa Bancária do Produtor Rural"
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
        title="Como podemos ajudar você:"
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

export default DefendingFarmers;
