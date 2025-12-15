import Image from "next/image";
import flashlightLine from "@/assets/flashlightLine.svg";
import chartLine from "@/assets/chartLine.svg";
import safeFill from "@/assets/safeFill.svg";
import smartphoneLine from "@/assets/smartphoneLine.svg";
import wifiLine from "@/assets/wifiLine.svg";
import bankCardLine from "@/assets/bankCardLine.svg";
import balanceScreenshot from "@/assets/balanceScreenshot.svg";
import { dmSans } from "../layout";
import Card from "@/components/ui/card";

const cardMap = [
  {
    icon: <Image src={flashlightLine} alt="flashlight-line" />,
    title: "Instant transactions",
    text: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
  },
  {
    icon: <Image src={safeFill} alt="safefill" />,
    title: "Saving accounts",
    text: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
  },
  {
    icon: <Image src={smartphoneLine} alt="smartphone-line" />,
    title: "Mobile banking",
    text: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
  },
  {
    icon: <Image src={chartLine} alt="chart-line" />,
    title: "Account statistics",
    text: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
  },
  {
    icon: <Image src={bankCardLine} alt="bankline-line" />,
    title: "Virtual cards",
    text: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
  },
  {
    icon: <Image src={wifiLine} alt="wifi-line" />,
    title: "Contactless payments",
    text: "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
  },
];
const ProductShowcase = () => {
  return (
    <>
      <section className="px-[30px] md:px-20 lg:px-[140px] flex flex-col lg:flex-row items-center justify-between py-20 lg:py-40">
        <div className="lg:max-w-[600px] order-2 lg:order-1">
          <h2
            className={`${dmSans.className} mt-8 text-4xl lg:text-5xl font-bold leading-[110%]`}
          >
            One app. <br /> One banking.
          </h2>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {cardMap.map((card, index) => (
              <Card
                key={index}
                icon={card.icon}
                title={card.title}
                text={card.text}
              />
            ))}
          </div>
        </div>

        <Image
          src={balanceScreenshot}
          alt="balanceScreenshot"
          className="order-1 lg:order-2 pb-8 lg:pb-0"
        />
      </section>

      <div></div>
    </>
  );
};

export default ProductShowcase;
