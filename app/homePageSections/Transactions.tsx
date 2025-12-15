import React from "react";
import { dmSans } from "../layout";
import { CheckIcon } from "lucide-react";

import transactionsImage from "@/assets/transactionsImage.svg";
import Image from "next/image";

const list = [
  "Instant Transfer",
  "Payments Worldwide",
  "Savings Account",
  "100% Mobile Banking",
];
const Transactions = () => {
  return (
    <div className="flex flex-col text-[#1A191E] lg:flex-row lg:items-center justify-between h-[636px] bg-[#E8F2EE] px-[30px] md:px-20 lg:px-[140px] py-12 lg:py-[70px] w-full overflow-y-hidden">
      <div className="flex flex-col justify-center space-y-5 lg:space-y-8 md:max-w-[560px]">
        <h1
          className={`${dmSans.className} leading-[110%] text-3xl lg:text-5xl font-bold`}
        >
          Send & receive money instantly
        </h1>
        <p className="text-[#1A191E] mt-3 lg:mt-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et.
        </p>
        <div className="grid gap-4">
          {list.map((text, index) => (
            <div className="flex items-center gap-4" key={index}>
              <div className="bg-[#5BB5A2] p-1 flex items-center justify-center rounded-full">
                <CheckIcon size={14} color="#ffffff" />
              </div>
              {text}
            </div>
          ))}
        </div>
      </div>

      <Image src={transactionsImage} className="pt-10 md:pt-12 lg:mt-24" alt="transactionsImage" />
    </div>
  );
};

export default Transactions;
