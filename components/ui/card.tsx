import { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  title: string;
  text: string;
}

const Card = ({ icon, title, text }: CardProps) => {
  return (
    <div className="w-full h-full flex flex-col space-y-4 rounded-2xl p-8 border border-[#E8E8E8]">
      <div className="bg-[#E8F2EE] rounded-full w-[50px] h-[50px] flex items-center justify-center">
        {icon}
      </div>
      <div className="space-y-2">
        <p className="text-[17px] font-semibold">{title}</p>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Card;
