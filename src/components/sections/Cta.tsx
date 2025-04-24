import React, { ReactNode } from "react";
import CustomButton from "../ui/CustomButton";

type CtaLayout = "centered" | "split" | "card" | "minimal" | "withImage";

interface CtaProps {
  children: ReactNode;
  layout?: CtaLayout;
  className?: string;
  imageUrl?: string;
  imageAlt?: string;
}

interface CtaTitleProps {
  children: ReactNode;
  className?: string;
}

interface CtaDescriptionProps {
  children: ReactNode;
  className?: string;
}

interface CtaButtonProps {
  title: string;
  type: "link" | "button";
  href?: string;
  className?: string;
  onClick?: () => void;
}

const layoutClasses = {
  centered: "py-16 px-6 text-center",
  split: "py-12 px-6 flex flex-col md:flex-row items-center justify-between gap-8",
  card: "p-8 rounded-xl shadow-lg border",
  minimal: "py-8 px-6 border-t border-b",
  withImage: "py-0 px-0 overflow-hidden rounded-lg flex flex-col md:flex-row",
};

const contentWrapperClasses = {
  centered: "max-w-4xl mx-auto",
  split: "max-w-6xl mx-auto w-full",
  card: "max-w-3xl mx-auto",
  minimal: "max-w-4xl mx-auto",
  withImage: "w-full",
};

const Cta = ({
  children,
  layout = "centered",
  className = "",
  imageUrl,
  imageAlt = "",
}: CtaProps) => {
  const baseClasses = layoutClasses[layout];
  const wrapperClasses = contentWrapperClasses[layout];

  return (
    <section className={`${baseClasses} ${className}`}>
      {layout === "withImage" && imageUrl && (
        <div className="md:w-1/2 h-64 md:h-auto">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className={`${wrapperClasses} ${layout === "withImage" ? "md:w-1/2 p-8 md:p-12" : ""}`}>
        {children}
      </div>
    </section>
  );
};

const Title = ({ children, className = "" }: CtaTitleProps) => {
  return <h2 className={`text-3xl font-bold mb-4 ${className}`}>{children}</h2>;
};

const Description = ({ children, className = "" }: CtaDescriptionProps) => {
  return <p className={`text-lg mb-6 ${className}`}>{children}</p>;
};

const Button = ({ title, type, href, className = "" }: CtaButtonProps) => {
  return (
    <CustomButton
      className={className}
      title={title}
      type={type}
      href={href}
    />
  );
};

// Atribui os subcomponentes ao componente principal
Cta.Title = Title;
Cta.Description = Description;
Cta.Button = Button;

export default Cta;
