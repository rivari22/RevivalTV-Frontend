import type { NextPage } from "next";
import { useRouter } from "next/router";
import AdvertismentSection from "../containers/Home/Advertisment";
import BenefitSection from "../containers/Home/Benefit";
import Footer from "../components/Footer/Footer";
import HeroSection from "../containers/Home/Hero";
import Navbar from "../components/Navbar/Navbar";
import NewProductsSection from "../containers/Home/NewProducts";
import ReviewSection from "../containers/Home/Review";

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
