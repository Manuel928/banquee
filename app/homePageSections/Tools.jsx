import Webflow from "@/assets/Webflow.svg";
import Shopify from "@/assets/Shopify.svg";
import Zapier from "@/assets/Zapier.svg";
import Bitcoin from "@/assets/Bitcoin.svg";
import PayPal from "@/assets/PayPal.svg";
import Mastercard from "@/assets/Mastercard.svg";
import Visa from "@/assets/Visa.svg";
import GooglePay from "@/assets/GooglePay.svg";
import ApplePay from "@/assets/ApplePay.svg";
import AmazonPay from "@/assets/AmazonPay.svg";
import Image from "next/image";
import { CheckIcon } from "lucide-react";
import { dmSans } from "../layout";

const Tools = () => {
  const brands = [
    {
      imgSrc: <Image src={Webflow} alt="Webflow logo" />,
    },
    {
      imgSrc: <Image src={Shopify} alt="Shopify logo" />,
    },
    {
      imgSrc: <Image src={Zapier} alt="Zapier logo" />,
    },
    {
      imgSrc: <Image src={Bitcoin} alt="Bitcoin logo" />,
    },
    {
      imgSrc: <Image src={PayPal} alt="PayPal logo" />,
    },
    {
      imgSrc: <Image src={Mastercard} alt="Mastercard logo" />,
    },
    {
      imgSrc: <Image src={Visa} alt="Visa logo" />,
    },
    {
      imgSrc: <Image src={GooglePay} alt="GooglePay logo" />,
    },
    {
      imgSrc: <Image src={ApplePay} alt="ApplePay logo" />,
    },
    {
      imgSrc: <Image src={AmazonPay} alt="Amazon pay logo" />,
    },
  ];

  const list = [
    "Secure and encrypted integration",
    "Fully API Interface",
    "Payments worldwide",
  ];
  return (
    <div className="px-[30px] md:px-20 lg:px-[140px] mt-[200px] md:mt-[270px] lg:mt-0 py-12 lg:py-[70px]">
      <div className="space-y-16">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-wrap gap-4">
            {brands.slice(0, 4).map((brand, index) => (
              <div
                key={index}
                className="bg-[#F8F8F8] p-4 inline-flex items-center justify-center rounded-2xl"
              >
                {brand.imgSrc}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {brands.slice(4, 10).map((brand, index) => (
              <div
                key={index}
                className="bg-[#F8F8F8] p-4 inline-flex items-center justify-center rounded-2xl"
              >
                {brand.imgSrc}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-[163px] lg:items-center">
          <div className="lg:max-w-[538px] space-y-5">
            <p>Tools</p>

            <h1
              className={`${dmSans.className} pb-2 leading-[110%] text-3xl lg:text-5xl font-medium`}
            >
              Seamless <br /> integration
            </h1>
            <p className="text-[#1A191E] mt-3 lg:mt-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et.
            </p>
          </div>

          <div className="grid gap-4">
            {list.map((text, index) => (
              <div className="flex items-center gap-4" key={index}>
                <div className="bg-[#E8F2EE] p-2 flex items-center justify-center rounded-full">
                  <CheckIcon size={14} color="#5BB5A2" />
                </div>
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
