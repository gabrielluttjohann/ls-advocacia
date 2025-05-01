import { contactInfo } from "@/data/contact";
import { Card } from "../ui/Card";
import CustomButton from "../ui/CustomButton";

export default function Steps() {
  const steps = [
    {
      title: "Atendimento direto com um advogado",
      content:
        "Sem robôs, atendentes ou filas. Você fala com um especialista que escuta, orienta e já inicia a análise do seu caso.",
    },
    {
      title: "Estratégia personalizada e petição jurídica",
      content:
        "Seu caso não vira um modelo padrão: um advogado experiente prepara a petição com estratégia clara e personalizada.",
    },
    {
      title: "Dupla revisão para garantir excelência",
      content:
        "Antes de seguir ao Judiciário, outro advogado revisa a peça para garantir clareza, precisão técnica e a melhor defesa possível.",
    },
    {
      title: "Protocolo rápido e acompanhamento do caso",
      content:
        "Com seus documentos em mãos, protocolamos em até 5 dias úteis. Casos urgentes? Enviamos em até 24 horas — com acompanhamento completo.",
    },
  ];

  return (
    <div className="min-h-[90vh] flex flex-col">
      {/* Parte de cima */}
      <div className="bg-[#101828] w-full pt-20 pb-20 lg:pb-60 flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Seu problema jurídico resolvido com agilidade
          </h1>
          <p className="text-base md:text-lg w-[90%] text-gray-300">
            Você é atendido por um advogado, sem burocracia, e sua ação vai ao Judiciário em até 5
            dias. Veja como trabalhamos:
          </p>
        </div>
      </div>

      {/* Parte de baixo */}
      <div className="relative bg-white w-full px-4 py-12 pb-20 lg:pb-32">
        {/* Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto md:mt-10 
                     relative lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-full mt-8"
        >
          {steps.map((step, index) => (
            <Card
              key={index}
              id={index + 1}
              title={step.title}
              content={step.content}
            />
          ))}
        </div>

        {/* Botão */}
        <div className="mt-16 lg:mt-74 flex justify-center">
          <CustomButton
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium shadow-lg hover:shadow-cyan-500/30 transition-all"
            title="Falar Agora com um Advogado"
            type="link"
            href={contactInfo.whatsapp.main}
          />
        </div>
      </div>
    </div>
  );
}
