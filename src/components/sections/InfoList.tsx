import { ReactNode } from "react";
import Link from "next/link"; // Import the Link component from Next.js

type Item = {
  icon: ReactNode;
  title: string;
  description?: string;
  href?: string; // Add href property to Item type
};

type SectionProps = {
  id?: string;
  title: string;
  description?: string;
  items: Item[];
};

const InfoListSection = ({ id, title, description, items }: SectionProps) => {
  return (
    <section
      id={id}
      className="scroll-my-36 py-16 bg-gray-50"
    >
      <div className=" responsive-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 relative pb-4 inline-block">
            {title}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-cyan-600 rounded-full"></span>
          </h2>
          {description && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>}
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
          <ul className="divide-y divide-gray-200">
            {items.map((item, index) => (
              <li
                key={index}
                className={`hover:bg-[#00B8DB] text-black hover:text-white px-2 py-4 flex items-center space-x-4 ${
                  item.href ? "cursor-pointer" : ""
                }`}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="flex items-center space-x-4 w-full"
                  >
                    <div className="p-2 bg-cyan-100 rounded-md">{item.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      {item.description && (
                        <p className="text-sm text-gray-700 group-hover:text-white">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </Link>
                ) : (
                  <>
                    <div className="p-2 bg-cyan-100 rounded-md">{item.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      {item.description && (
                        <p className="text-sm text-gray-700 group-hover:text-white">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InfoListSection;
