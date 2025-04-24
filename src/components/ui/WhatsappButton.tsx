"use client";

import { contactInfo } from "@/data/data";
import Link from "next/link";

export default function WhatsappButton() {
  return (
    <Link
      href={contactInfo.whatsapp}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
    >
      <img
        src="/icons/whatsapp.png"
        alt="WhatsApp"
        className="w-12 h-12"
      />
    </Link>
  );
}
