import React from "react";
import CardBig from "./Card/CardBig";

const Advertisment = () => {
  return (
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
  );
};

export default Advertisment;
