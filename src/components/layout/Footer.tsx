import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { navbarItems } from "@/data/data";
import { contactInfo } from "@/data/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const contactItems = [
    {
      icon: (
        <Phone
          size={18}
          className="min-w-4"
        />
      ),
      text: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
    },
    {
      icon: (
        <Mail
          size={18}
          className="min-w-4"
        />
      ),
      text: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: (
        <MapPin
          size={18}
          className="min-w-4"
        />
      ),
      text: contactInfo.address,
    },
  ];

  return (
    <footer className="w-full py-14 bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className=" mx-auto">
          {/* Logo/Nome do Escritório */}
          <div className="flex justify-center mb-12">
            <Link href="/">
              <img
                src="icons/logo-2.png"
                alt="Logo"
                className="w-64 h-32 hover:scale-125 transition-all duration-500"
              />
            </Link>
          </div>

          {/* Links de Navegação */}
          <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-12 mb-12 border-b border-gray-200  ">
            {navbarItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.url}
                  className="text-gray-700 hover:text-blue transition-colors font-medium"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Informações de Contato */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-5">Contato</h3>
              <ul className="space-y-4">
                {contactItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-center md:justify-start"
                  >
                    <div className="flex items-start">
                      <span className="mt-0.5 mr-3 text-blue">{item.icon}</span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span className="text-gray-600">{item.text}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-5">Informações Jurídicas</h3>
              <ul className="space-y-3">
                <li className="text-gray-600">CNPJ: {contactInfo.cnpj}</li>
                <li className="text-gray-600">{contactInfo.officeOAB}</li>
                <li className="text-gray-600">Sócios Responsáveis</li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-5">Atendimento</h3>
              <ul className="space-y-3">
                <li className="text-gray-600">Segunda a Sexta-feira</li>
                <li className="text-gray-600">08:30 - 18:30</li>
                <li className="text-gray-600">Plantão Jurídico 24h</li>
              </ul>
            </div>
          </div>

          {/* Direitos Autorais */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} Lüttjohann & Soares Advocacia. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-xs mt-2">Desenvolvido com excelência jurídica</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
