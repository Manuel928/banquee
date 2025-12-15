import React from "react";
import { dmSans } from "../layout";
import stackedCards from "@/assets/stackedCards.svg";
import Image from "next/image";
import Button from "@/components/ui/button";

const Accounts = () => {
  return (
    <div className="flex flex-col items-center justify-center px-[60px] md:px-50 lg:px-[440px] py-12 lg:py-[70px]">
      <div className="flex flex-col items-center justify-center space-y-5">
        <p>Account</p>
        <h1
          className={`${dmSans.className} text-center leading-[110%] text-3xl lg:text-5xl font-bold`}
        >
          Perfect card for your needs.
        </h1>
        <p className="text-[#1A191E] text-center mt-3 lg:mt-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et.
        </p>

        <Image src={stackedCards} className="mt-8" alt="stacked cards" />
        <div className="flex items-center mt-5 gap-4">
          <Button variant="filled">Open account</Button>
          <Button variant="plain" border="gray" textColor="black">
            Compare cards
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
