import { StaticImageData } from "next/image";
import service1 from "@/assets/services/1.png";
import service2 from "@/assets/services/2.png";
import service3 from "@/assets/services/3.png";
import service4 from "@/assets/services/4.png";
import service5 from "@/assets/services/5.png";
import service6 from "@/assets/services/6.png";
import service7 from "@/assets/services/7.png";
import service8 from "@/assets/services/8.png";

interface ServicesProps {
  title: string;
  description: string;
  image: StaticImageData;
}

export const services: ServicesProps[] = [
  {
    image: service1,
    title: "Núcleo de Direito Empresarial e Tributário",
    description:
      "Presta consultoria e assessoria jurídica para empresas em questões societárias, contratos comerciais, fusões, aquisições e dissoluções. Atua na recuperação de crédito, reestruturação empresarial e defesa em disputas judiciais e arbitrais. Além disso, orienta sobre compliance e mitigação de riscos legais no ambiente corporativo. No âmbito tributário, assessora empresas na redução da carga tributária, planejamento fiscal, recuperação de tributos e defesa em execuções fiscais e autuações da Receita Federal e demais órgãos fiscalizadores.",
  },
  {
    image: service2,
    title: "Núcleo de Direito Civil, Contratual e Imobiliário",
    description:
      "Especializado na regulamentação de relações jurídicas entre particulares, abrangendo obrigações, disputas contratuais, responsabilidade civil e indenizações. Atua na elaboração, revisão e execução de contratos, bem como na defesa de direitos patrimoniais, posse e propriedade de bens móveis e imóveis. No direito imobiliário, auxilia na compra, venda, locação, regularização de imóveis e disputas judiciais envolvendo condomínios, usucapião e reintegração de posse.",
  },
  {
    image: service3,
    title: "Núcleo de Direito de Família e Sucessões",
    description:
      "Atua na proteção das relações familiares, incluindo divórcios, guarda de filhos, pensão alimentícia e partilha de bens. Oferece assessoria na elaboração de testamentos, inventários e planejamento sucessório, garantindo segurança patrimonial e respeito à vontade das partes envolvidas.",
  },
  {
    image: service4,
    title: "Núcleo de Direito do Consumidor e Bancário",
    description:
      "Representa consumidores em disputas contra fornecedores e instituições financeiras, incluindo fraudes, cobranças indevidas, negativações indevidas e cláusulas abusivas. Atua na defesa de clientes contra bancos e financeiras em litígios envolvendo financiamentos, juros abusivos e contratos bancários, garantindo equilíbrio nas relações de consumo.",
  },
  {
    image: service5,
    title: "Núcleo de Direito do Trabalho e Previdenciário",
    description:
      "Atende trabalhadores e empresas em questões relacionadas a vínculos empregatícios, rescisões, assédio moral, acidentes de trabalho e direitos trabalhistas. No âmbito previdenciário, representa segurados do INSS e servidores públicos na obtenção e revisão de aposentadorias, benefícios assistenciais, auxílio-doença e pensões, garantindo acesso aos direitos negados.",
  },
  {
    image: service6,
    title: "Núcleo de Direito Administrativo e de Trânsito",
    description:
      "Presta assessoria em processos contra órgãos públicos, licitações, contratos administrativos e defesa de servidores públicos em sindicâncias e processos disciplinares. Atua na defesa de condutores em infrações de trânsito, suspensão e cassação da CNH, além de processos administrativos e judiciais relacionados ao direito de dirigir.",
  },
  {
    image: service7,
    title: "Núcleo de Direito da Saúde",
    description:
      "Representa pacientes e profissionais da saúde em ações contra planos de saúde, hospitais e o Estado. Atua em casos de negativa de cobertura, erro médico, falta de medicamentos e indenizações por falhas no atendimento. Defende direitos de pacientes para garantir acesso a tratamentos e procedimentos médicos necessários.",
  },
  {
    image: service8,
    title: "Núcleo de Direito Penal e Compliance",
    description:
      "Atua na defesa de clientes em investigações criminais, abrangendo crimes contra o patrimônio, fraudes, estelionato, delitos financeiros e crimes empresariais. Oferece consultoria para empresas na implementação de programas de compliance, prevenindo riscos e garantindo a conformidade com a legislação penal e regulatória.",
  },
];
