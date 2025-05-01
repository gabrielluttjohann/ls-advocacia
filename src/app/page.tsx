import Cta from "@/components/sections/Cta";
import Differentials from "@/components/sections/Differentials";
import { ExperienceCounter } from "@/components/sections/ExperienceCounter";
import Hero from "@/components/sections/Hero";
import InfoListSection from "@/components/sections/InfoList";
import Steps from "@/components/sections/Steps";
import Team from "@/components/sections/Team";
import WhatsappButton from "@/components/ui/WhatsappButton";
import { contactInfo } from "@/data/contact";
import {
  ShieldAlert,
  Handshake,
  Scale,
  Percent,
  FileSearch,
  Gavel,
  Landmark,
  Wheat,
  Factory,
  Shield,
} from "lucide-react";

const Home = () => {
  const listItems = [
    {
      icon: <ShieldAlert className="w-6 h-6 text-cyan-600" />,
      title: "Abusos e Fraudes Bancárias",
      href: "/servicos/abusos-e-fraudes",
    },
    {
      icon: <Handshake className="w-6 h-6 text-cyan-600" />,
      title: "Negociação Extrajudicial de Dívidas",
      href: "/servicos/negociacao-de-dividas",
    },
    {
      icon: <Scale className="w-6 h-6 text-cyan-600" />,
      title: "Superendividamento",
      href: "/servicos/superendividamento",
    },
    {
      icon: <Percent className="w-6 h-6 text-cyan-600" />,
      title: "Revisional de Juros",
      href: "/servicos/revisao-de-taxas-de-juros",
    },
    {
      icon: <FileSearch className="w-6 h-6 text-cyan-600" />,
      title: "Ilegalidades em Consignados",
      href: "/servicos/consignado-ilegal",
    },
    {
      icon: <Gavel className="w-6 h-6 text-cyan-600" />,
      title: "Defesa em Ações de Cobranças e Execuções Bancárias",
      href: "/servicos/defesa-em-cobrancas",
    },
    {
      icon: <Landmark className="w-6 h-6 text-cyan-600" />,
      title: "Bloqueio de Valores em Conta",
      href: "/servicos/bens-impenhoraveis",
    },
    {
      icon: <Shield className="w-6 h-6 text-cyan-600" />,
      title: "Pedidos de Impenhorabilidade de Bens",
      href: "/servicos/bens-impenhoraveis",
    },
    {
      icon: <Wheat className="w-6 h-6 text-cyan-600" />,
      title: "Defesa Bancária do Produtor Rural",
      href: "/servicos/defesa-de-produtores-rurais",
    },

    {
      icon: <Factory className="w-6 h-6 text-cyan-600" />,
      title: "Defesa Bancária Empresarials",
      href: "/servicos/dividas-empresariais",
    },
  ];

  return (
    <>
      <Hero
        whatsappNumber={contactInfo.phone.main}
        title="Escritório de Advocacia Especialista em Direito Bancário com Mais de 15 Anos de Experiência no Setor Financeiro"
        description="Durante 15 anos, trabalhamos para os bancos. Hoje, colocamos toda essa experiência a favor dos nossos clientes. Com conhecimento real das estratégias bancárias e expertise em crédito, oferecemos uma defesa estratégica e assertiva, agindo rapidamente para proteger seus direitos e patrimônio e garantir resultados concretos."
        links={[
          { text: "Serviços", href: "#servicos", color: "text-blue" },
          { text: "Diferenciais", href: "#diferenciais", color: "text-cyan-500" },
        ]}
        formLabels={{
          name: "Nome Completo",
          city: "Município",
          problem: "Descreva seu caso",
        }}
        formTitle="Fale Agora com um Advogado"
        ctaText="Falar com um Advogado Agora"
      />

      <InfoListSection
        id="servicos"
        title="Áreas de Atuação"
        description=""
        items={listItems}
      />

      <Cta
        className="bg-cyan-600 text-white"
        layout="centered"
      >
        <Cta.Title className="text-4xl">Precisa de Assessoria Jurídica Especializada?</Cta.Title>
        <Cta.Description className="mb-10">
          Nossa equipe está pronta para oferecer a melhor solução para o seu caso. Clique no botão
          abaixo e inicia agora seu atendimento pelo whatsapp.
        </Cta.Description>
        <Cta.Button
          className="bg-white text-cyan-600"
          title="Falar Agora com um Advogado"
          type="link"
          isMainPage
        />
      </Cta>
      <ExperienceCounter />
      <Steps />
      <Team />
      <Differentials isMainPage />
      <WhatsappButton isMainPage />
    </>
  );
};

export default Home;
