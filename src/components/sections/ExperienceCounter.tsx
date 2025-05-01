"use client"; // Client-side component

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ExperienceCounter() {
  const [processCount, setProcessCount] = useState(0);
  const [outOfCourtNegotiationsCount, setoutOfCourtNegotiationsCount] = useState(0);
  const targetProcesses = 1000;
  const outOfCourtNegotiations = 150; // Exemplo: 15 anos de experiência

  useEffect(() => {
    // Animação do counter
    const duration = 3; // segundos
    const increment = targetProcesses / (duration * 60); // 60fps
    const outOfCourtNegotiationsIncrement = outOfCourtNegotiations / (duration * 60);

    let current = 0;
    let currentYears = 0;
    const timer = setInterval(() => {
      current += increment;
      currentYears += outOfCourtNegotiationsIncrement;
      setProcessCount(Math.min(Math.floor(current), targetProcesses));
      setoutOfCourtNegotiationsCount(Math.min(Math.floor(currentYears), outOfCourtNegotiations));

      if (current >= targetProcesses && currentYears >= outOfCourtNegotiations) {
        clearInterval(timer);
      }
    }, 1000 / 60); // ~60fps

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-20 px-4 text-black">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Experiência que Transforma Resultados
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Conhecimento prático adquirido em milhares de casos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Counter de Processos */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-blue backdrop-blur-sm p-8 rounded-xl border border-dark-blue"
          >
            <div className="text-6xl font-bold text-white mb-2">{processCount}+</div>
            <h3 className="text-2xl text-white font-semibold">Processos Judiciais</h3>
            <p className="text-gray-200 mt-2">
              Nossas sócias fundadoras já atuaram em mais de {targetProcesses}+ casos
            </p>
          </motion.div>

          {/* Counter de Anos (opcional) */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-blue backdrop-blur-sm p-8 rounded-xl border border-dark-blue"
          >
            <div className="text-6xl font-bold text-white mb-2">{outOfCourtNegotiationsCount}+</div>
            <h3 className="text-2xl text-white font-semibold">Negociações Extrajudiciais</h3>
            <p className="text-gray-200 mt-2">Negociações eficazes direto com os bancos.</p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 text-xl italic text-gray-400 max-w-4xl mx-auto"
        >
          Agilidade, técnica e segurança aplicadas em cada caso, com a solidez de quem já vivenciou
          mais de mil desafios jurídicos.
        </motion.p>
      </div>
    </section>
  );
}
