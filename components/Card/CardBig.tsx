import Image from "next/image";
import React from "react";

const CardBig = ({
  title,
  description,
  image,
  hightlight,
}: {
  title: {
    label: string;
    color: string;
  };
  description: string;
  image: string;
  hightlight: {
    label: string;
    color: string;
  };
}) => {
  return (
    <div className="mobile:h-[372px] xl:h-[660px] relative mobile:mt-3 xl:m-[10px]">
      <div className="mobile:h-[372px] xl:h-[660px] w-full absolute z-10">
        <div className="w-full h-full grid place-content-center text-center mobile:pb-32 xl:pb-64 gap-4">
          <h1 className={`mobile:text-4xl xl:text-5xl px-16 ${title.color}`}>{title.label}</h1>
          <p className="text-[#969696] mobile:text-2xl xl:text-[28px] px-8 max-w-[580px]">
            {description}{" "}
            <span className={hightlight.color}>{hightlight.label}</span>
          </p>
        </div>
      </div>
      <Image
        className="mobile:max-h-[600px] max-h-[750px]"
        src={image}
        width="100%"
        height={"100%"}
        layout="fill"
        objectFit="fill"
        alt="hero image"
      />
    </div>
  );
};

export default CardBig;
