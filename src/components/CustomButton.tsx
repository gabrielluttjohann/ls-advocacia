import Link from "next/link";

interface Props {
  title: string;
  href: string;
  className?: string;
  link?: boolean;
  button?: boolean;
}

const CustomButton = ({ title, href, className, link, button }: Props) => {
  const baseStyles = `font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out ${className}`;

  return link ? (
    <Link href={href} className={baseStyles}>
      {title}
    </Link>
  ) : button ? (
    <button className={baseStyles}>{title}</button>
  ) : null;
};

export default CustomButton;
