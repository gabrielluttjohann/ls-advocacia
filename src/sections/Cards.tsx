import React from "react";

const Cards = () => {
  return (
    <section className="bg-[#010506] lg:py-24 md:py-16 py-8   ">
      <div className="container mr-auto ">
        <div className=" w-full  ">
          <div className="ml-[14%] mr-[14%]   ">
            <div className="grid grid-cols-1 lg:grid-cols-3  text-white  lg:divide-x-4 max-lg:divide-y-4  divide-amber-500">
              <div className="lg:px-10 max-lg:py-10">
                <h2 className="text-xl mb-3">Demandas Judiciais</h2>
                <p>
                  Defendemos seus direitos com estratégia e comprometimento.
                  Atuamos em processos judiciais nas mais diversas áreas,
                  buscando sempre a melhor solução para cada caso.
                </p>
              </div>

              <div className="lg:px-10 max-lg:py-10">
                <h2 className="text-xl mb-3">
                  Assessoria Jurídica para Empresas
                </h2>
                <p>
                  Segurança e suporte jurídico para o seu negócio. Oferecemos
                  consultoria preventiva e estratégica para garantir que sua
                  empresa esteja sempre protegida e bem assessorada.
                </p>
              </div>

              <div className="lg:px-10 max-lg:py-10">
                <h2 className="text-xl mb-3">Acordos e Mediações</h2>
                <p className="">
                  Resolvemos conflitos de forma ágil e eficaz. Buscamos soluções
                  extrajudiciais para garantir acordos vantajosos, evitando
                  desgastes e reduzindo custos para nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
