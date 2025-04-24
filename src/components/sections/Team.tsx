
"use client";
import img1 from "/icons/geile.jpg";
import img2 from "/icons/adriana.jpg";

const teamMembers = [
  {
    name: "Geile Luttjohann",
    role: "OAB/RS 102.625",
    image: img1.src,
    title: "Pós-Graduada em Direito Bancário",
    description:
      "Com 15 anos de experiência dentro do setor bancário, Geile Luttjohann conhece por dentro e por fora o funcionamento das instituições financeiras. Como executiva de crédito, trabalhou diretamente na concessão, renegociação e cobrança de dívidas, compreendendo exatamente quais estratégias os bancos utilizam e como revertê-las em favor do cliente, possui certificações em Crédito em Risco (FGV), Gestão Financeira e Desempenho Empresarial (Insper), Contabilidade Financeira (FGV) e Falência e Recuperação de Empresas (FGV).",
  },
  {
    name: "Adriana Soares Schaumloeffel ",
    role: "OAB/RS 136.447",
    image: img2.src, // Replace with the actual image URL
    title: "Especialista em Negociação de Dívidas",
    description:
      "Com uma trajetória consolidada na negociação de dívidas a Dra. Adriana Soares Schaumloeffel é reconhecida por sua habilidade em intermediação de acordos, proporcionando aos clientes condições vantajosas para recuperação financeira. Seja na renegociação de contratos complexos, redução de juros abusivos ou defesa contra cobranças agressivas, a Dra. Adriana utiliza sua vasta experiência para buscar as melhores soluções, evitando a judicialização desnecessária e garantindo economia real para seus clientes.",
  },
];

export default function Team() {
  return (
    <section
      id="about"
      className="py-16 bg-gray-100 scroll-my-32"
    >
      <div className="responsive-container flex flex-col">
        <h2 className="text-center text-4xl font-bold text-gray-900 mb-4 relative pb-6">
          Quem Somos
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-cyan-600 rounded-full"></span>
        </h2>
 
        <div className="mt-10 flex flex-col  md:flex-row gap-10 items-center justify-between">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row justify-between gap-6 items-start  p-6 rounded-lg  md:w-1/2"
            >
              <div className="flex w-full text-center lg:text-left flex-col lg:w-[30%]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="lg:h-60 object-cover h-full rounded-lg"
                />

                <h3 className="text-lg font-bold mt-4">{member.name}</h3>
                <p className="text-blue">{member.role}</p>
              </div>

              <div className="flex flex-col lg:w-[70%]">
                <h4 className="text-gray-600 font-semibold mt-2 ">{member.title}</h4>
                <p className="text-gray-700 mt-2">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
