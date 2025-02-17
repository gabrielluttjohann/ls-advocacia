"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

import heroBg from "@/assets/hero/background.png";
import { contact } from "@/data/contact";

const Hero = () => {
  const [clientes, setClientes] = useState<number>(0);
  const [processos, setProcessos] = useState<number>(0);
  const [empresas, setEmpresas] = useState<number>(0);

  useEffect(() => {
    // Função para animar o contador
    const animateCounter = (
      target: number,
      setter: (value: number) => void
    ) => {
      let count = 0;
      const increment = Math.ceil(target / 100);
      const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
          count = target;
          clearInterval(interval);
        }
        setter(count);
      }, 20);
    };

    animateCounter(3000, setClientes);
    animateCounter(1200, setProcessos);
    animateCounter(60, setEmpresas);
  }, []);

  return (
    <section className="pt-24 md:pt-0 min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* div bgImage */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroBg.src})` }}
      />

      {/* Conteúdo Principal */}
      <div
        className="responsive-container h-[80%] w-full px-4 relative"
        style={{ zIndex: 2 }}
      >
        <div className="w-full h-full flex flex-col lg:flex-row items-end rounded-xl overflow-hidden">
          {/* right content */}
          <div className="w-full lg:w-[40%] h-full  text-white p-4 lg:pl-4 lg:pr-24 lg:py-4 font-semibold flex flex-col justify-center lg:pt-36 gap-4 lg:gap-6 text-sm lg:text-lg">
            <h1 className="text-5xl">
              Mais de 8 Anos de Referência em Defesa e Estratégia Jurídica
            </h1>
            <p>
              Com matriz em Sapiranga e atuação em todo o Rio Grande do Sul,
              Santa Catarina e uma filial em Vitória, no Espírito Santo, a LS
              Advocacia é referência há mais de 8 anos na defesa dos direitos de
              seus clientes. Atuamos com excelência em processos judiciais,
              litígios e assessoria jurídica, garantindo estratégia, segurança e
              os melhores resultados para mais de 3.000 clientes atendidos.
            </p>
            <Link
              href={contact.headOffice.whatsappLink}
              className="bg-white text-black mt-4 lg:mt-8 px-4 py-2 lg:py-4 max-w-sm rounded-lg text-sm lg:text-base text-center hover:bg-gray-100 transition-colors duration-300"
            >
              Fale Agora Com um Advogado
            </Link>
          </div>

          {/* left content */}
          <div className="text-white flex flex-wrap justify-center items-center gap-4 lg:gap-6 lg:w-[70%] text-4xl lg:text-8xl my-4 font-bold">
            <div className="flex items-center flex-col">
              <p>{clientes}+</p>
              <p className="text-lg lg:text-3xl">Clientes atendidos</p>
            </div>
            <div className="flex items-center flex-col">
              <p>{processos}+</p>
              <p className="text-lg lg:text-3xl">Processos ativos</p>
            </div>
            <div className="flex items-center flex-col">
              <p>{empresas}+</p>
              <p className="text-lg lg:text-3xl">Empresas Atendidas</p>
            </div>
          </div>
          {/* end of left content */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
