import { ClipboardCheck, FileSearch, Calculator, Scale, BarChart2 } from "lucide-react";
import Link from "next/link";

const Services = () => {
  const nuclei = [
    {
      title: "Núcleo de Direito Bancário para Pessoas Físicas",
      description:
        "Voltado à proteção dos direitos do consumidor bancário, com estratégias para revisão de dívidas, combate ao superendividamento e resguardo patrimonial.",
      services: [
        "Negociação Extrajudicial de Dívidas Bancárias",
        "Ações Revisionais de Contratos de Financiamento e Empréstimos",
        "Defesa em Casos de Superendividamento (Lei nº 14.181/2021)",
        "Auditoria de Dívidas Bancárias e Cartões de Crédito",
        "Contestação de Cláusulas Abusivas em Contratos Bancários",
        "Defesa em Ações Judiciais de Cobrança",
        "Pedidos de Impenhorabilidade de Bens e Valores (inclusive salariais)",
        "Defesa em Ações de Busca e Apreensão de Veículos",
        "Ações de Nulidade de Leilões Irregulares",
        "Atuação em Casos de Fraudes Bancárias e Golpes Financeiros",
        "Ações de Indenização por Abusos Bancários",
        "Defesa em Ações Judiciais de Cobrança",
        "Pedidos de Impenhorabilidade de Bens e Valores (inclusive salariais)",
        "Defesa em Ações de Busca e Apreensão de Veículos",
        "Ações de Nulidade de Leilões Irregulares",
        "Atuação em Casos de Fraudes Bancárias e Golpes Financeiros",
        "Ações de Indenização por Abusos Bancários",
      ],
      buttonUrl:
        "https://wa.me/5551989560443?text=Ol%C3%A1%2C%20sou%20pessoa%20f%C3%ADsica%20e%20gostaria%20de%20falar%20com%20um%20advogado%20especializado%20em%20direito%20banc%C3%A1rio",
      buttonText: "Fale Agora com uma Especialista",
      color: "bg-cyan-600/10 border-cyan-600/30",
    },
    {
      title: "Núcleo de Direito Bancário para Empresas",
      description:
        "Assessoria estratégica a empresas em suas relações bancárias, com foco na gestão de passivos financeiros e proteção dos ativos da atividade empresarial.",
      services: [
        "Renegociação de Dívidas e Contratos Empresariais",
        "Contestação de Cláusulas Abusivas em Empréstimos",
        "Defesa contra Ações de Cobrança",
        "Impenhorabilidade de Equipamentos e Imóveis",
        "Recuperação Judicial de Empresas",
        "Planejamento Bancário Preventivo",
        "Nulidade de Leilões",
        "Consultoria em Financiamentos e Crédito Empresarial",
        "Ações Revisionais de Contratos de Financiamento e Empréstimos",
      ],
      buttonUrl:
        "https://wa.me/5551989560443?text=Ol%C3%A1%21%20represento%20uma%20empresa%20e%20gostaria%20de%20falar%20com%20um%20advogado%20especializado%20em%20direito%20banc%C3%A1rio",
      buttonText: "Fale Agora com uma Especialista",
      color: "bg-gray-900/10 border-gray-900/30",
    },
    {
      title: "Núcleo de Direito Bancário para Produtores Rurais",
      description:
        "Atendimento especializado a produtores rurais, com foco na defesa da atividade agropecuária e regularização de contratos com instituições financeiras.",
      services: [
        "Negociação Extrajudicial de Dívidas Rurais",
        "Prorrogação Administrativa de Dívidas com Instituições Financeiras",
        "Pedido Judicial de Prorrogação de Dívidas Rurais",
        "Revisão e Auditoria de Contratos de Financiamento Rural",
        "Revisão de Cláusulas Abusivas em Contratos Rurais",
        "Atuação em Casos de Negativa Indevida de Seguros Agrícolas",
        "Defesa em Ações Judiciais de Cobrança Bancária",
        "Defesa de Impenhorabilidade de Imóveis e Equipamentos Rurais",
        "Recuperação Judicial do Produtor Rural",
        "Ações de Nulidade de Leilões Irregulares",
        "Cobrança Judicial de Indenização Securitária Agrícola",
      ],
      buttonUrl:
        "https://wa.me/5551989560443?text=Ol%C3%A1%2C%20sou%20produtor%20rural%20e%20gostaria%20de%20falar%20com%20um%20advogado%20especialista%20em%20direito%20banc%C3%A1rio",
      buttonText: "Fale Agora com uma Especialista",
      color: "bg-cyan-600/10 border-gray-900/30",
    },
  ];

  const technicalSupport = {
    title: "Apoio Técnico e Pericial",
    description:
      "Em demandas bancárias complexas, utilizamos, sempre que necessário, apoio técnico e pericial independente, com o objetivo de reforçar a base probatória das ações judiciais que patrocinamos.",
    items: [
      {
        text: "Laudos técnicos em ações revisionais",
        icon: <ClipboardCheck className="w-6 h-6 text-white" />,
      },
      {
        text: "Auditorias bancárias para identificação de encargos indevidos",
        icon: <FileSearch className="w-6 h-6 text-white" />,
      },
      {
        text: "Provas periciais para impugnação de cálculos judiciais",
        icon: <Calculator className="w-6 h-6 text-white" />,
      },
      {
        text: "Pareceres contábeis e financeiros",
        icon: <BarChart2 className="w-6 h-6 text-cyan-600" />,
      },
      {
        text: "Simulações de amortização e identificação de cobranças indevidas",
        icon: <Scale className="w-6 h-6 text-cyan-600" />,
      },
    ],
  };
  return (
    <>
      <section
        id="services"
        className="relative py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="responsive-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative pb-6">
              Soluções em Direito Bancário para Pessoa Físicas, Empresas e Produtores Rurais
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-cyan-600 rounded-full"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Atuação especializada em direito bancário com soluções personalizadas para cada perfil
              de cliente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {nuclei.map((nucleo, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col"
              >
                {/* Card Header */}
                <div
                  className={`p-6 ${
                    index === 0
                      ? "bg-cyan-600"
                      : index === 1
                      ? "bg-gray-900"
                      : "bg-gradient-to-r from-cyan-600 to-gray-900"
                  }`}
                >
                  <h3 className="text-xl font-bold text-white">{nucleo.title}</h3>
                  <p className="text-white/90 mt-2 text-sm">{nucleo.description}</p>
                </div>

                {/* Services List with Scroll */}
                <div className="p-6 flex-grow overflow-y-auto max-h-[300px] custom-scrollbar">
                  <div className="space-y-3">
                    {nucleo.services.map((service, i) => (
                      <div
                        key={i}
                        className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div
                          className={`flex-shrink-0 mt-0.5 mr-3 p-1 rounded-full ${
                            index === 0
                              ? "bg-cyan-100 text-cyan-600"
                              : index === 1
                              ? "bg-gray-100 text-gray-900"
                              : "bg-gradient-to-r from-cyan-100 to-gray-100 text-cyan-600"
                          }`}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <p className="text-gray-700 text-sm">{service}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fixed Footer */}
                <div className="p-6 border-t border-gray-100">
                  <Link
                    href={nucleo.buttonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center w-full px-6 py-3 font-medium rounded-lg transition-all duration-200 ${
                      index === 0
                        ? "bg-cyan-600 hover:bg-cyan-700"
                        : index === 1
                        ? "bg-gray-900 hover:bg-gray-800"
                        : "bg-gradient-to-r from-cyan-600 to-gray-900 hover:from-cyan-700 hover:to-gray-800"
                    } text-white shadow-md hover:shadow-lg text-sm`}
                  >
                    {nucleo.buttonText}
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Support Section */}
        <div className="responsive-container">
          <div className="bg-gradient-to-r from-cyan-600 to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-12 text-white">
                <h2 className="text-3xl font-bold mb-4">{technicalSupport.title}</h2>
                <p className="text-cyan-100 mb-8">{technicalSupport.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  {technicalSupport.items.slice(0, 3).map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center"
                    >
                      <div className="p-2 mr-3 bg-white/10 rounded-lg">{item.icon}</div>
                      <span className="text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-1/2 bg-white p-12">
                <div className="h-full flex flex-col justify-center">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Nossa Abordagem</h3>
                    <p className="text-gray-600">
                      Utilizamos ferramentas técnicas especializadas para garantir a melhor
                      estratégia em cada caso.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {technicalSupport.items.slice(3).map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="p-2 mr-4 bg-cyan-600/10 rounded-lg">{item.icon}</div>
                        <div>
                          <h4 className="font-medium text-gray-900">{item.text}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
