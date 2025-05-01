"use client";

import Link from "next/link";

interface ButtonProps {
  className?: string;
  title: string;
  type?: "link" | "button" | "submit";
  prefixIcon?: React.ReactNode;
  href?: string;
}

const CustomButton = ({ className, title, type = "link", prefixIcon, href }: ButtonProps) => {
  const baseStyles =
    "inline-flex flex-wrap font-semibold py-3 px-6 rounded-full text-lg transition";

  if (!href && type !== "link") {
    return (
      <button
        className={`${baseStyles} ${className}`}
        type={type}
      >
        {prefixIcon} {title}
      </button>
    );
  }

  if (href && type === "link") {
    return (
      <Link
        className={`${baseStyles} ${className}`}
        href={href}
        prefetch={false}
        target="_blank"
        rel="noopener noreferrer"
      >
        {prefixIcon} {title}
      </Link>
    );
  }
};

export default CustomButton;
