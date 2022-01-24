import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import BenefitDroneImage from "../../public/images/benefit_feature_home_1.png";

const benefitList = [
  {
    name: "4K",
    desc: "Camera Resolution",
  },
  {
    name: "2 TB",
    desc: "Storage Capacity",
  },
  {
    name: "60 m/s",
    desc: "Super Max Speed",
  },
  {
    name: "30 mins",
    desc: "Long Flight Time",
  },
];

const BenefitSection = () => {
  return (
    <Fade>
      <section className="grid mobile:grid-cols-1 xl:grid-cols-3 p-5 w-full bg-[#F7F8FA] xl:h-[530px] xl:pl-16 xl:gap-6">
        <div className="mobile:w-[227px] xl:w-[342px] flex items-center mobile:justify-self-center xl:justify-self-end">
          <Image src={BenefitDroneImage} alt="benefit drone image" />
        </div>
        <div className="col-span-2 mt-8 mobile:justify-self-center xl:justify-self-start xl:m-[96px_0_0_46px]">
          <h1 className="text-black md:text-5xl mobile:text-4xl mobile:text-center xl:text-left font-semibold">
            Why Drone Light?
          </h1>
          <h5 className="max-w-[720px] text-2xl text-[#222222] mt-5 mobile:text-center xl:text-left">
            We provide a best self drone easy to use and operate. With auto
            pilot, the device will take a beautiful view for the best of flying
            operation.
          </h5>
          <div className="grid mobile:grid-cols-2 xl:grid-cols-4 lg:gap-4 mobile:gap-y-14 mt-8 xl:max-w-[800px] mobile:mb-7 xl:mb-0">
            {benefitList.map((item, index) => (
              <div key={index} className="justify-self-center">
                <h4 className="text-[#222222] text-4xl text-center ">
                  {item.name}
                </h4>
                <p className="text-[rgba(34, 34, 34, 0.75)] text-xl max-w-[120px] text-center mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default BenefitSection;
