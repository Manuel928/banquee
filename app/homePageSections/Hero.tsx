import Image from "next/image";
import cards from "@/assets/cards.svg";
import { ArrowRight, CheckIcon, } from "lucide-react";
import Button from "@/components/ui/button";
import { dmSans } from "../layout";

const list = [
  "Instant Transfer",
  "Payments Worldwide",
  "Savings Account",
  "100% Mobile Banking",
];

const Hero = () => {
  return (
    <div className="px-[30px] md:px-20 lg:px-[140px] flex flex-col pt-8 lg:py-10 lg:items-center justify-center lg:flex-row gap-20 lg:gap-[164px]">
      <div className="flex flex-col justify-center space-y-5 lg:space-y-8 md:max-w-[600px]">
        <h1 className={`${dmSans.className} leading-[110%] text-5xl lg:text-7xl font-bold`}>
          Banking <br /> Starts Here.
        </h1>
        <p className="">
          Unlock a powerful banking experience that brings security,
          flexibility, and smart automation together to help you reach your
          financial goals faster.
        </p>
        <div className="grid gap-4 md:grid-cols-2 gap-y-4 max-w-[310px] md:max-w-full">
          {list.map((text, index) => (
            <div className="flex items-center gap-4" key={index}>
              <div className="bg-[#E8F2EE] p-1 flex items-center justify-center rounded-full">
                <CheckIcon size={14} color="#5BB5A2" />
              </div>
              {text}
            </div>
          ))}
        </div>

        <div className="flex flex-row items-center gap-2 md:justify-center lg:justify-start lg:gap-8 pt-8">
          <Button variant="filled">Open Account</Button>
          <Button variant="plain">
            <span>Compare Cards</span>
            <ArrowRight />
          </Button>
        </div>
      </div>
      <Image
        src={cards}
        className="hidden lg:block w-[373px] h-[450px] md:w-[399px] md:h-[577px]"
        alt="hero-image"
      />
    </div>
  );
};

export default Hero;
