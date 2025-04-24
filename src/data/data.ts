interface NavbarProps {
  title: string;
  url: string;
}

export const navbarItems: NavbarProps[] = [
  {
    title: "Início",
    url: "/",
  },
  {
    title: "Serviços",
    url: "#servicos",
  },
  {
    title: "Diferenciais",
    url: "#diferenciais",
  },
];

export const contactInfo = {
  email: "contato@luttjohannsoares.com.br",
  phone: "(51) 98956-0443",
  address: "Rua Tamandaré, 140, sala 901 - Novo Hamburgo, RS",
  whatsapp:
    "https://wa.me/5551989560443?text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20falar%20com%20um%20advogado.",
  cnpj: "59.911.037/0001-14",
  officeOAB: "OAB/RS 16.316",
};
