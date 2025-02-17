import { StaticImageData } from "next/image";

interface FlipCardProps {
  cardTitle: string;
  cardDescription: string;
  buttonTitle: string;
  isFlipped: boolean;
  onClick: () => void;
  image: StaticImageData;
}

const FlipCard = ({
  cardDescription,
  cardTitle,
  buttonTitle,
  isFlipped,
  image,
  onClick,
}: FlipCardProps) => {
  return (
    <div
      className={`relative w-full lg:w-[290px] 2xl:w-[350px] lg:h-[450px]  h-[400px] rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
        isFlipped ? "bg-black text-white" : "text-white"
      }`}
      style={
        !isFlipped
          ? {
              backgroundImage: `url(${image.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
      onClick={onClick}
    >
      {/* Overlay para escurecer a imagem */}
      {!isFlipped && <div className="absolute inset-0 bg-black/50"></div>}

      <div className="relative z-10 p-5 flex flex-col h-full justify-center items-center">
        {!isFlipped ? (
          <div className="text-center">
            <h2 className="text-xl font-bold">{cardTitle}</h2>
            <button className="mt-4 px-4 py-2 bg-white text-black rounded-lg">
              {buttonTitle}
            </button>
          </div>
        ) : (
          <div>{cardDescription}</div>
        )}
      </div>
    </div>
  );
};

export default FlipCard;
