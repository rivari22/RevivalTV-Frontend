import type { NextPage } from "next";
import { useRouter } from "next/router";
import AdvertismentSection from "../components/Advertisment";
import BenefitSection from "../components/Benefit";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import Navbar from "../components/Navbar/Navbar";
import NewProductsSection from "../components/NewProducts";
import ReviewSection from "../components/Review";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <main className="min-h-screen relative mobile:pt-[100px] lg:pt-[60px] xl:pt-0">
      <Navbar />
      <HeroSection router={router} />
      <AdvertismentSection />
      <BenefitSection />
      <NewProductsSection router={router} />
      <ReviewSection />
      <Footer />
    </main>
  );
};

export default Home;
