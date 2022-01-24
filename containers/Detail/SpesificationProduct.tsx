import Image from "next/image";
import React, { useState } from "react";
import Button from "../../components/Button/Button";
import CardImageMini from "../../components/Card/CardImageMini";
import { Fade, Zoom } from "react-awesome-reveal";

const imageList = [
  {
    id: 1,
    image: "/images/detail_1.png",
  },
  {
    id: 2,
    image: "/images/detail_2.png",
  },
  {
    id: 3,
    image: "/images/detail_3.png",
  },
  {
    id: 4,
    image: "/images/detail_4.png",
  },
];

const featureList = [
  {
    label: "4K Camera Resolution",
    icon: "/icons/camera.svg",
  },
  {
    label: "2 TB Storage",
    icon: "/icons/memory.svg",
  },
  {
    label: "60 m/s Speed",
    icon: "/icons/clock.svg",
  },
  {
    label: "5000 mAh Battery",
    icon: "/icons/battery.svg",
  },
];

const SpesificationProduct = () => {
  const [previewImg, setPreviewImg] = useState<string>(
    "/images/big_detail.png"
  );

  return (
    <section className="md:px-[150px] mobile:px-[32px] flex md:flex-row mobile:flex-col w-full mt-20 gap-x-[50px]">
      <div>
        <Fade triggerOnce>
          <div className="xl:w-[725px] xl:h-[550px] rounded-xl p-4 border border-solid">
            <Image
              className="rounded-xl"
              src={previewImg}
              width={697}
              height={516}
              alt="big image detail"
            />
          </div>
        </Fade>
        <div className="flex mt-[20px] md:gap-[15px] mobile:gap-[13px]">
          {imageList.map((item) => (
            <Zoom key={item.id} delay={item.id * 300} triggerOnce>
              <CardImageMini
                key={item.id}
                {...item}
                onClick={(image) => setPreviewImg(image)}
              />
            </Zoom>
          ))}
        </div>
      </div>
      <Fade delay={200} triggerOnce>
        <div>
          <h4 className="text-[28px] font-semibold mobile:mt-[50px] md:mt-0">
            Drone Light
          </h4>
          <h6 className="text-xl md:mb-2 mobile:mb-5">
            Super fast, easy control drone
          </h6>
          <h1 className="md:text-[48px] font-semibold mobile:text-[36px] md:mb-2 mobile:mb-4">
            $ 4.500,00
          </h1>
          <h4 className="text-[22px] font-semibold mb-6">Drone features:</h4>
          {featureList.map((item, index) => (
            <div key={index} className="flex md:gap-x-5 mobile:gap-x-6 mb-5">
              <Image
                src={item.icon}
                width={25}
                height={25}
                alt="icon"
                color="black"
              />
              <p className="text-xl">{item.label}</p>
            </div>
          ))}
          <Button label="ORDER IT NOW" onClick={() => undefined} size="large" />
        </div>
      </Fade>
    </section>
  );
};

export default SpesificationProduct;
