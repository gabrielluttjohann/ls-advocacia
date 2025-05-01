import React from "react";

interface CardProps {
  id?: number;
  title: string;
  content: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ id, title, content, className = "" }) => {
  return (
    <div className={`bg-white border border-gray-200 shadow-lg rounded-2xl p-6 text-left ${className}`}>
      <div className="flex items-center md:justify-center">
        {id && (
          <div className="text-blue border border-gray-200 inline-flex px-5 py-4 rounded-full font-bold text-xl mb-2">
            {id}.
          </div>
        )}
      </div>
      <h3 className="text-xl mt-4 font-semibold mb-2">{title}</h3>
      <p className="text-medium mt-4 text-gray-600">{content}</p>
    </div>
  );
};
