import Cta from "@/components/sections/Cta";
import Differentials from "@/components/sections/Differentials";
import FAQSection from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import InfoListSection from "@/components/sections/InfoList";
import Team from "@/components/sections/Team";
import WhatsappButton from "@/components/ui/WhatsappButton";
import { contactInfo } from "@/data/contact";
import {
  Receipt,
  CreditCard,
  AlertCircle,
  Shield,
  Package,
  FileSearch,
  RefreshCw,
  FileText,
  PhoneOff,
  ShieldOff,
  ArrowLeftRight,
  HandCoins,
  Banknote,
  Lock,
  FileX,
  Percent,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const BankAbuseAndFraud = () => {
  const listItems = [
    {
      icon: <Percent className="w-6 h-6 text-cyan-600" />,
      title: "Juros Abusivos"
    },
    {
      icon: <Receipt className="w-6 h-6 text-cyan-600" />,
      title: "Cobrança de tarifas ou pacotes de serviços não contratados",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-cyan-600" />,
      title: "Débitos Indevidos em Conta Bancária",
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-cyan-600" />,
      title: "Inclusão Indevida no SPC/Serasa",
    },
    {
      icon: <Shield className="w-6 h-6 text-cyan-600" />,
      title: "Venda casada de seguros, cartões ou produtos financeiros",
    },
    {
      icon: <Package className="w-6 h-6 text-cyan-600" />,
      title: "Cartões de crédito enviados sem solicitação, com ativação automática",
    },
    {
      icon: <FileSearch className="w-6 h-6 text-cyan-600" />,
      title: "Renegociação com cláusulas ocultas ou juros abusivos disfarçados",
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-cyan-600" />,
      title: "Renovação automática de contratos sem autorização expressa",
    },
    {
      icon: <FileText className="w-6 h-6 text-cyan-600" />,
      title: "Contratos confusos ou assinados sem compreensão total do cliente",
    },
    {
      icon: <PhoneOff className="w-6 h-6 text-cyan-600" />,
      title: "Assédio comercial para concessão de crédito (principalmente contra idosos)",
    },
    {
      icon: <ShieldOff className="w-6 h-6 text-cyan-600" />,
      title: "Fraudes digitais (clonagem de cartões, golpes por SMS, WhatsApp ou telefone)",
    },
    {
      icon: <ArrowLeftRight className="w-6 h-6 text-cyan-600" />,
      title: "Transferências ou empréstimos realizados sem autorização do titular",
    },
    {
      icon: <HandCoins className="w-6 h-6 text-cyan-600" />,
      title: "Cobrança de valores de empréstimos não reconhecidos",
    },
    {
      icon: <Banknote className="w-6 h-6 text-cyan-600" />,
      title: "Descontos indevidos em conta ou benefício previdenciário",
    },
    {
      icon: <Lock className="w-6 h-6 text-cyan-600" />,
      title: "Acesso indevido por terceiros ou falhas graves de segurança bancária",
    },
    {
      icon: <FileX className="w-6 h-6 text-cyan-600" />,
      title: "Recusa injustificada em fornecer contratos, gravações ou documentos",
    },
  ];

  const faqData: FAQItem[] = [
    {
      question:
        "Fizeram um empréstimo no meu nome sem minha autorização. O banco pode ser responsabilizado?",
      answer:
        "Sim. Quando há contratação fraudulenta ou operação sem consentimento, o banco responde objetivamente pela falha na prestação do serviço. Você pode pedir a anulação do contrato, devolução em dobro dos valores descontados e indenização por danos morais.",
    },
    {
      question: "Fui vítima de golpe e o dinheiro saiu da minha conta. A culpa é só minha?",
      answer:
        "Não. O banco tem dever de segurança e deve adotar mecanismos eficazes de proteção contra fraudes. Em muitos casos, o Judiciário reconhece que a instituição financeira é responsável pelos danos causados por falhas no sistema ou omissão na proteção do cliente.",
    },
    {
      question: "O banco incluiu meu nome no SPC/Serasa sem me avisar. Isso é legal?",
      answer:
        "Não. Antes de negativar seu nome, o banco é obrigado a notificar previamente o consumidor. A ausência dessa notificação configura inclusão indevida e gera o direito à retirada do registro, além de indenização por dano moral.",
    },
    {
      question: "Já paguei a dívida, mas meu nome continua negativado. O que posso fazer?",
      answer:
        "A manutenção do nome em cadastros restritivos após a quitação é uma grave ilegalidade. O banco deve retirar o registro em até 5 dias úteis após o pagamento. O descumprimento dá direito à indenização por danos morais, independentemente de comprovação de prejuízo.",
    },
    {
      question: "Estão cobrando uma dívida que já paguei. O que posso fazer?",
      answer:
        "Trata-se de repetição do indébito. Você pode ingressar com ação para declarar a inexigibilidade da dívida, exigir a devolução do que foi pago indevidamente em dobro (art. 42, parágrafo único, do CDC) e pleitear indenização, se houver dano moral.",
    },
    {
      question: "Meu nome foi negativado por uma dívida antiga que já prescreveu. Isso pode?",
      answer:
        "Não. Dívidas prescritas não podem ser cobradas judicialmente nem manter registros ativos em cadastros como SPC ou Serasa. A inscrição indevida pode ser anulada e gerar direito a reparação.",
    },
    {
      question: "O banco pode renovar automaticamente um contrato sem minha autorização?",
      answer:
        "Não. A renovação automática de contratos sem o consentimento expresso do consumidor é considerada prática abusiva. O consumidor tem o direito de ser informado sobre a renovação e de optar por aceitá-la ou não.",
    },
    {
      question:
        "O banco se recusa a fornecer cópias de contratos ou gravações de atendimentos. Isso é permitido?",
      answer:
        "Não. O consumidor tem o direito de acessar informações e documentos relacionados aos serviços contratados. A recusa injustificada por parte do banco pode ser considerada prática abusiva e passível de sanções.",
    },
    {
      question:
        "Estão descontando valores indevidos da minha conta ou benefício previdenciário. O que posso fazer?",
      answer:
        "Descontos não autorizados são ilegais. O consumidor pode contestar os débitos, solicitar a devolução dos valores e, se necessário, buscar reparação por danos materiais e morais.",
    },
  ];

  return (
    <>
      <Hero
        whatsappNumber={contactInfo.phone.secondary}
        title="Advogados Especialistas em Abusos e Fraudes Bancárias"
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
        title="Exemplos comuns de abusos e fraudes bancárias"
        description="Identificamos e combatemos abusos contratuais, fraudes digitais, práticas enganosas e cobranças indevidas que colocam o consumidor em desvantagem, muitas vezes sem sequer perceber que está sendo lesado."
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

export default BankAbuseAndFraud;
