import team1 from "../../public/fernanda.png";
import team2 from "../../public/mauricio.png";
import team3 from "../../public/aline.png";
import team4 from "../../public/maysa.png";
import team5 from "../../public/tomas.png";
import Image, { StaticImageData } from "next/image";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl: StaticImageData;
}

const teamMembers: TeamMember[] = [
  {
    name: "Dra. Fernanda Lima",
    role: "OAB/RS 72.525",
    description:
      "Graduada em Direito pela Fundação Universidade Federal do Rio Grande (FURG). Pós-graduada em Direito do Trabalho e Processo do Trabalho pela Escola Superior Verbo Jurídico. Pós-graduada em Advocacia Previdenciária pela Escola Brasileira de Direito (EBRADI). Possui mais de 15 anos de experiência na área trabalhista.",
    imageUrl: team1,
  },
  {
    name: "Dr. Mauricio Sant'Anna",
    role: "OAB/RS 127.675",
    description:
      "Advogado graduado pela UNISINOS, com uma trajetória profissional notável. Trabalhou como auxiliar de diversos juízes por 15 anos, com foco nas áreas cíveis e criminais. Possui certificações nas áreas de Direito Criminal, Execução da Pena, Direito Previdenciário, Societário, Empresarial, Família, Sucessões e Direito Administrativo.",
    imageUrl: team2,
  },
  {
    name: "Dra. Aline Silva",
    role: "OAB/RS 111.470",
    description:
      "Graduada em Direito pela Universidade FEEVALE, com pós-graduação em Advocacia Corporativa pela FMP e Direito do Trabalho pela Verbo Jurídico. Possui diversas certificações em Direito de Família, Trânsito e Direito Civil.",
    imageUrl: team3,
  },
  {
    name: "Dra. Maysa Ramos",
    role: "OAB/ES 41818",
    description:
      "Advogada responsável pela filial localizada na cidade de Vitória, Espírito Santo.",
    imageUrl: team4,
  },
  {
    name: "Dr. Tomas Tonin",
    role: "OAB/RS 121.356",
    description:
      "Advogado atuante nos estados do Rio Grande do Sul, Santa Catarina e Paraná.",
    imageUrl: team5,
  },
];

const Team = () => {
  return (
    <div id="team" className="scroll-mt-28   responsive-container text-center px-4 py-16 mx-auto lg:py-20">
      {/* Título e descrição da seção */}
      <div className="flex flex-col justify-center items-center mb-14">
        <h2 className=" font-semibold text-gray-900 text-4xl">
          Conheça nossa equipe
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-5xl ">
          Nossa equipe é formada por profissionais altamente qualificados,
          comprometidos com a excelência e o sucesso dos nossos clientes.
        </p>
      </div>

      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-5 ">
        {teamMembers.map((member, index) => (
          <div className="flex items-center flex-col" key={index}>
            <Image
              width={100}
              height={100}
              className="object-cover w-24 h-24 rounded-full shadow"
              src={member.imageUrl.src}
              alt={member.name}
            />
            <div className="flex flex-col justify-center mt-2">
              <p className="text-lg font-bold">{member.name}</p>
              <p className="mb-4 text-xs text-gray-800">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
