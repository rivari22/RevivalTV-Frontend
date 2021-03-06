import { NextRouter } from "next/router";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Button from "../../components/Button/Button";

const Hero = ({ router }: { router: NextRouter }) => {
  return (
    <section className="mobile:h-[582px] xl:h-[750px] relative bg-[url('/images/hero_image_1.png')] bg-center mobile:bg-[length:872px_572px] xl:bg-contain">
      <Fade duration={500}>
        <div className="mobile:h-[572px] xl:h-[750px] w-full">
          <div className="w-full h-full grid place-content-center text-center pb-64 gap-4">
            <h1 className="text-white text-4xl px-16">
              Representing Drone Light{" "}
            </h1>
            <p className="text-[#969696] text-lg px-8 max-w-[684px]">
              Look up the sky and beautiful world with simple navigation. Just
              record anmd get a lot memories to share, lighlty and fast like a
              lightning
            </p>
            <Button
              onClick={() => router.push("/detail")}
              label="GET NOW"
              size="normal"
            />
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Hero;
