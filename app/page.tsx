import Header from "./homePageSections/Header";
import Hero from "./homePageSections/Hero";
import Notifications from "./homePageSections/Notifications";
import ProductShowcase from "./homePageSections/ProductShowcase";
import Savings from "./homePageSections/Savings";
import Transactions from "./homePageSections/Transactions";
import Tools from "./homePageSections/Tools";
import Accounts from "./homePageSections/Accounts";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <ProductShowcase />
      <Transactions />
      <Savings />
      <Notifications/>
      <Tools/>
      <Accounts/>
    </div>
  );
}
