import { ArrowRight } from "lucide-react";
import { dmSans } from "../layout";
import laptop from "@/assets/laptop.svg";
import bicycle from "@/assets/bicycle.svg";
import airplane from "@/assets/airplane.svg";
import add from "@/assets/add.svg";
import camera from "@/assets/camera.svg";
import ColorfulCard from "@/components/ui/colorfulCard";

const savingsList = [
  {
    className: "bg-[#E8F2EE]",
    image: laptop,
    title: "New Laptop",
    price: "400",
  },
  {
    className: "bg-[#F1DFDF]",
    image: bicycle,
    title: "New Bicycle",
    price: "400",
  },
  {
    className: "bg-[#DFE1F1]",
    image: airplane,
    title: "Holiday",
    price: "3000",
  },
  {
    className: "bg-[#CCD6DD]",
    image: camera,
    title: "Camera",
    price: "100",
  },
  {
    className: "bg-[#F8F8F8]",
    image: add,
  },
];

const Savings = () => {
  return (
    <div className="px-[30px] md:px-20 lg:px-[140px] py-12 mt-[70px] lg:py-[70px] overflow-x-hidden">
      <div className="space-y-4 relative">
        <p className="text-sm">Saving Accounts</p>
        <h2
          className={`${dmSans.className} max-w-[600px] mt-8 text-4xl lg:text-5xl font-bold leading-[110%]`}
        >
          Organize your <br /> money the right way.
        </h2>
        <p className="max-w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="flex items-center gap-1 cursor-pointer duration-150 absolute -bottom-12 lg:-bottom-3 right-0">
          <p className="text-[#5BB5A2] font-semibold">All Features</p>
          <ArrowRight color="#5BB5A2" />
        </div>
      </div>

      <div className="mt-20 lg:mt-16 h-full grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-[33px]">
        {savingsList.map((list, index) => (
          <ColorfulCard
            key={index}
            className={list.className}
            image={list.image}
            title={list.title}
            price={list.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Savings;
