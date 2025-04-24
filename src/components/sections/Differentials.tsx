import { UserCheck, ShieldCheck, Briefcase, Scale, CheckCircle } from "lucide-react";
import CustomButton from "../ui/CustomButton";

const Differentials = ({buttonHref}: {buttonHref: string}) => {
  const differentials = [
    {
      title: "Atendimento Personalizado",
      description:
        "Cada caso é analisado individualmente, com soluções adaptadas às suas necessidades específicas.",
      icon: (
        <UserCheck
          size={32}
          className="text-blue"
        />
      ),
    },
    {
      title: "Transparência Absoluta",
      description:
        "Mantemos você informado em todas as etapas do processo, com comunicação clara e sem promessas irreais.",
      icon: (
        <ShieldCheck
          size={32}
          className="text-blue"
        />
      ),
    },
    {
      title: "Experiência Comprovada",
      description:
        "15+ anos de atuação especializada no setor bancário, com profundo conhecimento das estratégias credoras.",
      icon: (
        <Briefcase
          size={32}
          className="text-blue"
        />
      ),
    },
    {
      title: "Compromisso Ético",
      description:
        "Atuamos rigorosamente dentro da lei, priorizando honestidade e integridade em todas as nossas ações.",
      icon: (
        <Scale
          size={32}
          className="text-blue"
        />
      ),
    },
    {
      title: "Resultados Tangíveis",
      description:
        "Soluções práticas e mensuráveis, focadas na proteção efetiva dos seus direitos e patrimônio.",
      icon: (
        <CheckCircle
          size={32}
          className="text-blue"
        />
      ),
    },
  ];

  return (
    <section
      id="diferenciais"
      className="scroll-mt-32 py-28 bg-gray-900 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-16 lg:mb-20 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight lg:leading-[3.5rem] max-w-2xl mx-auto lg:mx-0">
              Excelência Jurídica com <span className="text-cyan-400">Transparência</span> e{" "}
              <span className="text-cyan-400">Ética</span>
            </h2>
          </div>
          <div className="lg:w-1/2 text-center lg:text-left lg:pl-12">
            <p className="text-lg md:text-xl font-light text-gray-300 mb-6 leading-relaxed">
              Na Luttjohann & Soares Advocacia, combinamos expertise técnica com absoluta seriedade.
              Cada caso recebe análise personalizada, com orientações claras sobre possibilidades,
              riscos e estratégias juridicamente fundamentadas.
            </p>
            <CustomButton
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium shadow-lg hover:shadow-cyan-500/30 transition-all"
              title="Fale com nossa equipe jurídica"
              type="link"
              href={buttonHref}
            />
          </div>
        </div>

        {/* Differential Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((differential, index) => (
            <div
              key={index}
              className="group relative bg-white  rounded-xl p-8 transition-all duration-300 hover:bg-blue"
            >
              <div className="bg-blue/10 rounded-full flex justify-center items-center mb-6 w-16 h-16 group-hover:bg-white transition-colors duration-300">
                {differential.icon}
              </div>
              <h4 className="text-xl font-semibold text-black group-hover:text-white mb-4">{differential.title}</h4>
              <p className="text-gray-700 font-light leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                {differential.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
