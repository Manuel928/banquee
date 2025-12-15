import clsx from "clsx";
import Image from "next/image";

interface CardProps {
  className: string;
  image: string;
  title?: string;
  price?: string;
}
const ColorfulCard = ({ className, image, title, price }: CardProps) => {
  return (
    <div className="flex flex-col">
      <div
        className={clsx(
          "flex items-center justify-center w-full h-[170px] lg:h-[214px] lg:w-[214px] rounded-2xl",
          className
        )}
      >
        <Image src={image} alt={image} />
      </div>

      <div className="space-y-1 mt-4">
        <p className="font-semibold">{title}</p>
        <p className="text-sm"> {price && "$"} {price}</p>
      </div>
    </div>
  );
};

export default ColorfulCard;
