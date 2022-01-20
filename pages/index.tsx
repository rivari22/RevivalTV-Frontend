import type { NextPage } from "next";
import Image from "next/image";
import BenefitSection from "../components/Benefit";
import CardBig from "../components/Card/CardBig";
import HeroImage from "../public/images/hero_image_1.png";

const Home: NextPage = () => {
  return (
    // todo h-screen
    <main className="h-[3000px]">
      <section className="mobile:h-[572px] xl:h-[750px] relative">
        <div className="mobile:h-[572px] xl:h-[750px] w-full absolute z-10">
          <div className="w-full h-full grid place-content-center text-center pb-64 gap-4">
            <h1 className="text-white text-4xl px-16">
              Representing Drone Light{" "}
            </h1>
            <p className="text-[#969696] text-lg px-8 max-w-[684px]">
              Look up the sky and beautiful world with simple navigation. Just
              record anmd get a lot memories to share, lighlty and fast like a
              lightning
            </p>
            <button className="bg-[#2E4DEC] mx-auto rounded-full px-[60px] py-[11px] text-white text-lg">
              GET NOW
            </button>
          </div>
        </div>
        <Image
          className="mobile:max-h-[600px] max-h-[750px]"
          src={HeroImage}
          layout="fill"
          objectFit="fill"
          alt="hero image"
        />
      </section>
      <section className="grid mobile:grid-cols-1 xl:grid-cols-2 p-5">
        <CardBig
          image={"/images/ultra_light_1.png"}
          title={{ label: "Ultra Light", color: "text-black" }}
          description="Drone move faster with weighing component"
          hightlight={{ label: "under 200 g", color: "text-black" }}
        />
        <CardBig
          image={"/images/best_resolution_1.png"}
          title={{ label: "Best Resolution", color: "text-white" }}
          description="Take a beautiful view with best camera
          up to 4K Camera Resolution"
          hightlight={{ label: "4K Camera Resolution", color: "text-white" }}
        />
      </section>
      <BenefitSection />
    </main>
  );
};

export default Home;
