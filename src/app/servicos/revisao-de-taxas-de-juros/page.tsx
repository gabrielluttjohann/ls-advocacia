import Cta from "@/components/sections/Cta";
import Differentials from "@/components/sections/Differentials";
import FAQSection from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import InfoListSection from "@/components/sections/InfoList";
import Team from "@/components/sections/Team";
import WhatsappButton from "@/components/ui/WhatsappButton";
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
        "A verificação da abusividade dos juros pode variar de acordo com o entendimento de cada tribunal e das particularidades do contrato. No entanto, um dos principais indicativos é quando os juros contratados estão 30% ou mais acima da média praticada no mercado — o que já acende um sinal de alerta para possível ilegalidade.",
    },
    {
      question:
        "Estou com parcelas em atraso. A ação revisional suspende a dívida ou impede a retomada do bem?",
      answer: `
        Depende. A simples propositura da ação não suspende automaticamente a exigibilidade da dívida nem impede atos como negativação ou retomada do bem financiado (como veículos ou imóveis). No entanto, é possível, desde o início do processo, requerer tutela antecipada ao juízo, pedindo:
        <br /> <br />
        •	Suspensão da cobrança ou da execução do contrato;
        <br />
        •	Impedimento de busca e apreensão ou leilão do bem;
        <br />
        •	Depósito judicial das parcelas incontroversas.
        <br /> <br />
        A concessão dessas medidas depende da análise do caso concreto e da presença dos requisitos legais, como o risco de dano irreparável e a aparente abusividade contratual. Por isso, é essencial contar com um advogado experiente que fundamente bem o pedido e apresente os documentos necessários.

        `,
    },
    {
      question: "É possível revisar um contrato mesmo que ele já esteja quitado?",
      answer:
        "Sim. A revisão de contratos já encerrados ou quitados é possível, desde que ainda esteja dentro do prazo prescricional, que em regra é de 10 anos a contar da data do pagamento indevido ou do término da relação contratual. Mesmo após a quitação, se houver indícios de cobranças abusivas, como juros excessivos, taxas ocultas ou encargos indevidos, o consumidor pode buscar judicialmente a restituição dos valores pagos a maior, com correção monetária e, em muitos casos, com juros e devolução em dobro, conforme prevê o Código de Defesa do Consumidor.",
    },
    {
      question:
        "Qual a diferença entre juros remuneratórios e juros de mora? Ambos podem ser abusivos?",
      answer: `
       Sim, ambos podem ser considerados abusivos, ainda que em contextos diferentes.
       <br /> <br />
       Juros remuneratórios são aqueles cobrados durante a vigência regular do contrato, como forma de remuneração pelo crédito concedido. São pactuados entre as partes, mas não podem ser aplicados de forma excessiva ou sem transparência. A jurisprudência do STJ permite sua livre pactuação desde que não ultrapassem, de forma desproporcional, a média de mercado divulgada pelo Banco Central.
       <br /> <br />
       Juros de mora, por sua vez, incidem apenas após o inadimplemento (ou seja, quando o consumidor atrasa ou deixa de pagar a dívida). Seu objetivo é penalizar a mora e compensar o credor pelo atraso. Embora o patamar legal seja de 1% ao mês (12% ao ano), há contratos em que as instituições cobram valores superiores — como 2% ou mais ao mês — o que configura abusividade e pode ser objeto de revisão judicial.
       <br /> <br />
       Importante:
       <br />
       •	Quando os juros remuneratórios estão 30% ou mais acima da média do mercado, isso já pode configurar indício de abusividade.
       <br />
       •	Juros de mora acima do limite legal (1% ao mês) também são frequentemente reconhecidos como ilegais ou abusivos pelos tribunais.
       <br />
       •	A cobrança conjunta de juros remuneratórios compostos, juros de mora elevados e multa contratual pode tornar o contrato excessivamente oneroso e ensejar a revisão judicial por violação ao Código de Defesa do Consumidor.
       `,
    },
    {
      question: "E nos contratos de crédito rural? Os limites de juros são diferentes?",
      answer: `
       Sim, no crédito rural as regras sobre juros são mais rigorosas e definidas por normas específicas, especialmente em contratos subsidiados por políticas públicas de fomento agropecuário.
       <br /> <br />
       Juros remuneratórios são os pactuados no momento da contratação e visam remunerar o capital emprestado durante a vigência normal do contrato.
       <br /> <br />
       Nos financiamentos agrícolas com recursos controlados (como PRONAF, PRONAMP, Moderfrota, etc.), as taxas de juros são reguladas pelo Conselho Monetário Nacional (CMN) e publicadas em resoluções específicas. Portanto, não podem ser livremente pactuadas como nos contratos comuns — devem respeitar os tetos legais estabelecidos para cada linha de crédito.
       <br /> <br />
       Juros de mora, por outro lado, são aplicáveis apenas em caso de inadimplência. Em contratos de crédito rural, a cobrança dos juros moratórios deve respeitar o limite legal de 1% ao ano, conforme o art. 5º do Decreto-Lei nº 167/1967, que rege as cédulas de crédito rural. Portanto, a imposição de juros

       `,
    },
    {
      question: "O banco pode cobrar Tarifa de Cadastro no contrato?",
      answer: `
        A cobrança da Tarifa de Cadastro só é legal se realizada uma única vez, no início do relacionamento contratual, ou seja, se você teve relacionamento anterior com o banco, a cobrança de nova tarifa é ilegal.
        <br /> <br />
        Qualquer cobrança adicional, repetida ou embutida de forma disfarçada em outras tarifas é considerada ilegal.
        <br /> <br />
        Além disso, a cobrança só é válida se o valor for razoável e estiver expressamente informado no contrato. Quando essas condições não são respeitadas, estamos diante de uma prática abusiva, que viola o Código de Defesa do Consumidor e permite a restituição dos valores pagos indevidamente, com correção e, em alguns casos, em dobro.

        `,
    },
    {
      question: "Quando a cobrança do seguro é considerada abusiva?",
      answer: `
       A cobrança do seguro é considerada abusiva nas seguintes situações:
       <br /> <br />
       •	Imposição da contratação do seguro como condição para a concessão do crédito.
       <br />
       •	Ausência de consentimento expresso do consumidor para a contratação do seguro.
       <br />
       •	Falta de transparência nas informações sobre o seguro, como valores, cobertura e condições.
       <br />
       •	Impossibilidade de escolha da seguradora pelo consumidor, sendo esta indicada exclusivamente pela instituição financeira.
       `,
    },
    {
      question: "Posso entrar com a ação e parar de pagar o contrato?",
      answer:
        "Cada caso exige análise técnica. Em algumas situações, é possível pedir ao juiz a suspensão dos pagamentos ou o depósito judicial do valor incontroverso, para evitar prejuízos enquanto a ação é julgada.",
    },
    {
      question: "É verdade que bancos fazem renegociações que aumentam ainda mais a dívida?",
      answer:
        "Sim. Em vez de aliviar, muitas renegociações apenas reagrupam o saldo devedor com novas taxas e encargos, tornando a dívida ainda mais difícil de quitar. Essas condições podem ser revistas judicialmente.",
    },
    {
      question: "Vocês atendem clientes de quais estados?",
      answer:
        "Nosso foco é a Região Sul — Rio Grande do Sul, Santa Catarina e Paraná — pois isso nos permite atuar com agilidade e proximidade junto aos fóruns e tribunais. Casos de outras regiões podem ser avaliados individualmente.",
    },
    {
      question: "Preciso comparecer ao escritório para ser atendido?",
      answer:
        "Não é necessário. Embora você possa ir pessoalmente até a nossa sede, nosso atendimento pode ser totalmente digital, com reuniões por vídeo, envio de documentos online, assinaturas eletrônicas e acompanhamento integral à distância. Tudo com praticidade, segurança e transparência.",
    },
    {
      question: "Quem analisa meu caso? São advogados?",
      answer:
        "Sim. Aqui, você é atendido exclusivamente por advogados experientes, com atuação exclusiva em Direito Bancário. Não utilizamos robôs e plataformas automáticas.",
    },
    {
      question: "Em quanto tempo terei uma resposta sobre meu caso?",
      answer:
        "Em geral, damos retorno no mesmo dia do contato, após o envio dos documentos. Nossa equipe prioriza a agilidade e o comprometimento com cada cliente.",
    },
    {
      question: "Quanto custa para entrar com a ação?",
      answer:
        "Os honorários são proporcionais à complexidade do caso. Nossa proposta é sempre apresentada com transparência, sem surpresas, e com condições acessíveis e respeito as tabelas da OAB.",
    },
  ];

  return (
    <>
      <Hero
        whatsappNumber={contactInfo.phone.secondary}
        title="Advogados Especialistas em Revisão de Juros Abusivos"
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
      <WhatsappButton  />
    </>
  );
};

export default ReviewingInterestRates;
