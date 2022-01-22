import { NextRouter } from "next/router";
import React, { useMemo } from "react";
import CardProduct from "./Card/CardProduct";

const NewProducts = ({ router }: { router: NextRouter }) => {
  const newProductList = useMemo(
    () => [
      {
        name: "Mini Drone",
        desc: "Powerful camera drone at an affordable price range. Camera up to 4K resolution, optimize shots automatically.",
        image: "/images/mini_drone_1.png",
        onClick: () => router.push("/detail"),
      },
      {
        name: "Drone Light",
        desc: "Drone light is every creators dream. Setting apperture manually and high battery  performance. Drone light is everything you need.",
        image: "/images/drone_light_1.png",
        onClick: () => router.push("/detail"),
      },
      {
        name: "Phantom Drone",
        desc: "Inspired by phantom, drone can move faster and quickly like a ghost.Focus on speed so you can investigate environtment quickly.",
        image: "/images/phantom_drone_1.png",
        onClick: () => router.push("/detail"),
      },
    ],
    [router]
  );

  return (
    <section
      className="w-full bg-white xl:h-[832px] mobile:mt-[82px] xl:mt-[50px]"
      id="newProduct"
    >
      <div className="justify-self-center text-center">
        <h1 className="text-[#222222] text-4xl pb-4 font-bold">New Products</h1>
        <p className="text-[#818181] leading-9 text-center xl:px-[480px] xl:mb-[50px] mobile:mx-8 mobile:mb-9">
          New innovation, best quality than before. Make every moment flying
          operation become unforgettable.
        </p>
      </div>
      <div className="flex xl:ml-[200px] gap-[50px] xl:overflow-auto xl:flex-nowrap mobile:flex-wrap mobile:justify-center xl:justify-start xl:pr-10 mobile:pr-0">
        {newProductList.map((item, index) => (
          <CardProduct {...item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default NewProducts;
