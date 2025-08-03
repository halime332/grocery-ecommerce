import { FC } from "react";
import Hero from "@/components/home/hero";
import Feature from "@/components/home/feature";
import Products from "@/components/home/products";

const Home: FC = () => {
  return <div className="p-5 md.p-7 lg:px-10">
    <Hero />
    <Feature />
    <Products />
  </div>;
};

export default Home;