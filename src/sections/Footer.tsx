import logo from "@/assets/logo/logo-white.png";
import { contact } from "@/data/contact";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gradient-to-r from-black to-gray-900">
      <div className="px-4 pt-16 mx-auto container md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href={"/"}>
              <Image
                src={logo.src}
                alt="Logo"
                width={128}
                height={100}
                className="h-auto"
              />
            </Link>
          </div>

          {/* Contato Matriz */}
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-white">
              Matriz
            </p>
            <div className="flex">
              <p className="mr-1 text-white">Telefone:</p>
              <Link
                href={contact.headOffice.whatsappLink}
                className="text-white"
              >
                {contact.headOffice.phone}
              </Link>
            </div>
            <div className="flex">
              <p className="mr-1 text-white">Email:</p>
              <Link
                href={`mailto:${contact.headOffice.email}`}
                className="text-white"
              >
                {contact.headOffice.email}
              </Link>
            </div>
            <div className="flex">
              <p className="mr-1 text-white">Endereço:</p>
              <Link
                href={contact.headOffice.mapsLink}
                target="_blank"
                className="text-white"
              >
                {contact.headOffice.address}
              </Link>
            </div>
          </div>

          {/* Contato Filial */}
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-white">
              Filial
            </p>
            <div className="flex">
              <p className="mr-1 text-white">Telefone:</p>
              <Link
                href={contact.branchOffice.whatsappLink}
                className="text-white"
              >
                {contact.branchOffice.phone}
              </Link>
            </div>
            <div className="flex">
              <p className="mr-1 text-white">Email:</p>
              <Link
                href={`mailto:${contact.branchOffice.email}`}
                className="text-white"
              >
                {contact.branchOffice.email}
              </Link>
            </div>
            <div className="flex">
              <p className="mr-1 text-white">Endereço:</p>
              <Link
                href={contact.branchOffice.mapsLink}
                target="_blank"
                className="text-white"
              >
                {contact.branchOffice.address}
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-white">
            © Copyright {currentYear} LS Advocacia. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
