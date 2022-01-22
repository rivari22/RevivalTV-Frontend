import React from "react";
import DescriptionDetailProductSection from "../components/DescriptionDetailProduct";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import SpesificationProductSection from "../components/SpesificationProduct";

const Detail = () => {
  return (
    <main className="min-h-screen relative md:pt-[110px] mobile:pt-[70px] mobile:pb-[1050px] xl:pb-[500px]">
      <Navbar />
      <SpesificationProductSection />
      <DescriptionDetailProductSection />
      <Footer />
    </main>
  );
};

export default Detail;
