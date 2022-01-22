import type { NextPage } from "next";
import AdvertismentSection from "../components/Advertisment";
import BenefitSection from "../components/Benefit";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import Navbar from "../components/Navbar/Navbar";
import NewProducts from "../components/NewProducts";
import Review from "../components/Review";

const Home: NextPage = () => {
  return (
    <main className="min-h-screen relative mobile:pt-[100px] lg:pt-[60px] xl:pt-0">
      <Navbar />
      <HeroSection />
      <AdvertismentSection />
      <BenefitSection />
      <NewProducts />
      <Review />
      <Footer />
    </main>
  );
};

export default Home;
