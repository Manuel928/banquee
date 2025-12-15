import { ArrowRight, CheckIcon } from "lucide-react";
import Image from "next/image";
import notifications from "@/assets/notifications.svg";

import React from "react";
import { dmSans } from "../layout";
import Button from "@/components/ui/button";

const list = [
  "Instant Transfer",
  "Payments Worldwide",
  "Savings Account",
  "100% Mobile Banking",
];

const Notifications = () => {
  return (
    <div className="flex flex-col text-[#1A191E] lg:flex-row lg:items-center justify-between h-[636px] bg-white px-[30px] md:px-20 lg:px-[140px] py-12 lg:py-[70px] w-full">
      <div className="flex flex-col justify-center items-start space-y-5 lg:space-y-8 md:max-w-[560px]">
        <p>Notifications</p>
        <h1
          className={`${dmSans.className} leading-[110%] text-3xl lg:text-5xl font-bold`}
        >
          Stay notified
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

        <Button variant="plain" className="flex items-center gap-1">
          <span>Compare plans</span>
          <ArrowRight color="#5BB5A2"/>
        </Button>
      </div>

      <Image
        src={notifications}
        className="pt-10 md:pt-12 lg:mt-24 w-[449px] h-[473px]"
        alt="notifications"
      />
    </div>
  );
};

export default Notifications;
