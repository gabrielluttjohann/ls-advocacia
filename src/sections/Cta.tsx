import { contact } from "@/data/contact";
import Link from "next/link";

interface DifferentialsProps {
  title: string;
  description: string;
}

const differentials: DifferentialsProps[] = [
  {
    title: "Profissionais Atualizados",
    description:
      "Nossa equipe acompanha constantemente as mudanças na legislação para oferecer as melhores estratégias jurídicas, garantindo segurança e eficiência.",
  },
  {
    title: "Plantão 24h",
    description:
      "Disponibilidade total para atender situações urgentes a qualquer momento, oferecendo suporte rápido e eficaz sempre que necessário.",
  },
  {
    title: "Atendimento Presencial e Online",
    description:
      "Oferecemos atendimento presencial em Sapiranga (RS) e Vitória (ES) para quem busca um acompanhamento próximo e exclusivo. Para maior comodidade, também atendemos de forma nacional, 100% online, garantindo a mesma qualidade e eficiência, onde quer que você esteja.",
  },
];

const Cta = () => {
  return (
    <section id="differentials" className="bg-black lg:py-20 md:py-16 py-8 ">
      <div className="responsive-container px-6 lg:px-8">
        <div className="flex flex-wrap justify-between gap-6 lg:gap-24">
          <div className="w-full lg:w-1/2">
            {differentials.map((item, index) => (
              <div key={index} className="text-white mb-6">
                <h2 className="text-3xl border-b-4 my-3 py-3 inline-block border-yellow-600">
                  {item.title}
                </h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-[30%] my-3 py-3">
            <h2 className="text-white text-4xl mb-4">
              Proteja seus direitos com quem entende do assunto!
            </h2>
            <p className="text-white mb-5">
              Entre em contato agora e tenha suporte jurídico de excelência, com
              atendimento personalizado, ágil e eficiente. Seja presencial ou
              online, estamos prontos para te ajudar!
            </p>
            <Link
              href={contact.headOffice.whatsappLink}
              className="inline-block my-3 px-7 py-4 rounded-full text-white font-bold bg-yellow-600"
            >
              Iniciar Atendimento
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
