"use client";
import heroImg from "../../../public/icons/hero.png";
import Link from "next/link";
import CustomButton from "../ui/CustomButton";

interface HeroLink {
  text: string;
  href: string;
  color?: string; // opcional (default: 'text-cyan-400')
}

interface HeroProps {
  whatsappNumber: string;
  title: string;
  description: string;
  links: HeroLink[];
  formLabels?: {
    name?: string;
    city?: string;
    problem?: string;
  };
  formTitle?: string;
  ctaText?: string;
}

const Hero = ({
  whatsappNumber,
  title = "Especialistas em Direito Bancário com Mais de 15 Anos de Experiência no Setor Financeiro",
  description = "Na Luttjohann & Soares Advocacia, trazemos para você a experiência de mais de 15 anos atuando diretamente no setor bancário.",
  links = [
    { text: "Quem Somos", href: "#about" },
    { text: "Nossos Serviços", href: "#services" },
  ],
  formLabels = {
    name: "Nome",
    city: "Município",
    problem: "Como podemos lhe auxiliar?",
  },
  formTitle = "Iniciar Atendimento",
  ctaText = "Iniciar Atendimento",
}: HeroProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cleanPhoneNumber = (number: string) => {
      return number.replace("(", "").replace(")", "").replace(" ", "").replace("-", "");
    };
    const form = event.currentTarget;
    const firstName = (form.elements.namedItem("firstName") as HTMLInputElement).value;
    const address = (form.elements.namedItem("address") as HTMLInputElement).value;
    const problem = (form.elements.namedItem("problem") as HTMLInputElement).value;
    const cleanedPhoneNumber = cleanPhoneNumber(whatsappNumber);
    const message = `Olá, meu nome é *${firstName}*.\nSou de *${address}*\n\n${problem}`;
    const whatsappLink = `https://wa.me/55${cleanedPhoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <section className="relative">
      <img
        src={heroImg.src}
        className="absolute inset-0 h-full w-full object-cover"
        alt="Imagem principal"
      />

      <div className="py-24 relative bg-gray-900/80">
        <svg
          className="absolute inset-x-0 -bottom-1 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>

        <div className="relative overflow-hidden px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 responsive-container lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="mb-12 w-full max-w-xl xl:mb-0 xl:w-7/12 xl:pr-16">
              <h2 className="mb-6 max-w-xl font-sans text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none">
                {title}
              </h2>
              <p className="mb-4 max-w-2xl text-base text-gray-200 md:text-xl">{description}</p>
              <div className="flex items-center gap-3">
                {links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className={`inline-flex items-center font-semibold tracking-wider ${
                      link.color || "text-cyan-400"
                    } transition-colors duration-200 hover:text-teal-300`}
                  >
                    {link.text}
                    <svg
                      className="ml-2 inline-block w-3"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-full max-w-xl xl:w-5/12 xl:px-8">
              <div className="overflow-hidden rounded-xl border-t-4 border-cyan-600 bg-white p-7 shadow-2xl shadow-cyan-600 sm:p-10">
                <h3 className="mb-4 text-xl font-bold text-cyan-900 sm:mb-6 sm:text-center sm:text-2xl">
                  {formTitle}
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="firstName"
                      className="mb-1 inline-block font-medium text-cyan-900"
                    >
                      {formLabels.name}
                    </label>
                    <input
                      placeholder={`Digite seu ${formLabels.name?.toLowerCase() || "nome"}`}
                      type="text"
                      className="mb-2 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm ring-cyan-200 transition duration-200 focus:border-cyan-400 focus:outline-none focus:ring"
                      id="firstName"
                      name="firstName"
                      required
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="address"
                      className="mb-1 inline-block font-medium text-cyan-900"
                    >
                      {formLabels.city}
                    </label>
                    <input
                      placeholder={`Informe seu ${formLabels.city?.toLowerCase() || "município"}`}
                      type="text"
                      className="mb-2 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm ring-cyan-200 transition duration-200 focus:border-cyan-400 focus:outline-none focus:ring"
                      id="address"
                      name="address"
                      required
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="problem"
                      className="mb-1 inline-block font-medium text-cyan-900"
                    >
                      {formLabels.problem}
                    </label>
                    <input
                      placeholder="Digite sua demanda"
                      type="text"
                      className="mb-2 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm ring-cyan-200 transition duration-200 focus:border-cyan-400 focus:outline-none focus:ring"
                      id="problem"
                      name="problem"
                      required
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <CustomButton
                      className="cursor-pointer inline-flex h-12 w-full items-center justify-center rounded-xl bg-cyan-600 px-6 font-medium tracking-wide text-white shadow-md ring-cyan-200 transition duration-200 hover:bg-cyan-700 focus:outline-none focus:ring"
                      type="submit"
                      title={ctaText}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
