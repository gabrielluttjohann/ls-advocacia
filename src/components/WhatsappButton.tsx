import whatsappImg from "@/assets/WhatsApp.png";
import { contact } from "@/data/contact";
import Link from "next/link";

export default function WhatsappButton() {
  return (
    <div className="fixed bottom-7 right-4 z-50">
      <Link
        href={contact.headOffice.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={whatsappImg.src}
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 drop-shadow-lg"
          alt="WhatsApp"
        />
      </Link>
    </div>
  );
}
