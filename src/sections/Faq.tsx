"use client";
import Link from "next/link";
import { useState } from "react";

interface ItemProps {
  title: string;
  children: React.ReactNode;
}

const Item = ({ title, children }: ItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded shadow-sm">
      <button
        type="button"
        aria-label={isOpen ? "Close item" : "Open item"} // Dynamically change aria-label
        title={isOpen ? "Close item" : "Open item"} // Dynamically change title
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export const Faq = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col mb-16 sm:text-center">
          <Link href="/" className="mb-6 sm:mx-auto">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                />
              </svg>
            </div>
          </Link>
          <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                    width="52"
                    height="24"
                  />
                </svg>
              </span>
              Perguntas frequentes sobre nossos serviços jurídicos
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Aqui você encontra respostas para as principais dúvidas sobre
              nossos serviços jurídicos e como podemos ajudá-lo.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <Item title="Quais áreas do direito o escritório atende?">
            Atuamos em diversas áreas, incluindo direito civil, direito
            empresarial, direito de família, direito trabalhista, entre outras.
          </Item>
          <Item title="Como posso saber se tenho direito a uma ação judicial?">
            Para saber se você tem direito a uma ação judicial, recomendamos uma
            consulta com um de nossos advogados, que avaliará seu caso com base
            nas informações fornecidas.
          </Item>
          <Item title="Quais são os custos de uma consulta jurídica?">
            O valor da consulta jurídica pode variar dependendo da complexidade
            do caso e da área de atuação. Entre em contato conosco para mais
            detalhes sobre nossa política de preços.
          </Item>
          <Item title="Como posso iniciar um processo judicial com o escritório?">
            O primeiro passo é agendar uma consulta para avaliarmos seu caso.
            Após a análise, discutiremos as opções legais e os passos
            necessários para dar início ao processo.
          </Item>
          <Item title="Como posso acompanhar o andamento do meu processo?">
            Mantemos nossos clientes informados sobre o andamento do processo
            regularmente. Você também pode entrar em contato diretamente com
            nossa equipe para obter atualizações.
          </Item>
        </div>
      </div>
    </div>
  );
};

export default Faq;
