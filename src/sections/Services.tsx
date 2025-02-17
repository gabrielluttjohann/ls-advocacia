"use client";
import { useState } from "react";
import FlipCard from "@/components/ui/flip-card/FlipCard";
import { services } from "@/data/services";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="services" className="scroll-mt-28   lg:py-24 md:py-16 py-8 px-4 md:px-8  ">
      <div className="responsive-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <FlipCard
              image={service.image}
              key={index}
              buttonTitle="Saiba Mais"
              cardDescription={service.description}
              cardTitle={service.title}
              isFlipped={activeIndex === index}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
