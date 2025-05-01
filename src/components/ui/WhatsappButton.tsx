"use client";

import { contactInfo } from "@/data/contact";
import wImg from "../../../public/icons/whatsapp.png";

import Link from "next/link";

export default function WhatsappButton({ isMainPage }: { isMainPage?: boolean }) {
  const href = isMainPage ? contactInfo.whatsapp.main : contactInfo.whatsapp.secondary;

  return (
    <Link
      href={href}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={wImg.src}
        alt="WhatsApp"
        className="w-12 h-12"
      />
    </Link>
  );
}
