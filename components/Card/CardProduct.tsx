import Image from "next/image";
import React from "react";
import Button from "../Button/Button";

const CardProduct = ({
  name,
  desc,
  image,
  onClick,
}: {
  name: string;
  desc: string;
  image: string;
  onClick: () => void;
}) => {
  return (
    <div className="mobile:w-[338px] mobile:h-[498px] xl:w-[500px] xl:h-[648px] xl:border xl:border-gray-200 bg-white text-center rounded-[10px] flex flex-col justify-center items-center xl:p-11">
      <div className="mobile:w-[338px] xl:w-[410px]">
        <Image
          className="relative xl:rounded-[10px] mobile:rounded-none"
          src={image}
          alt="mini drone"
          width={410}
          height={240}
          layout="responsive"
          objectFit="fill"
        />
      </div>
      <h1 className="text-[#222222] text-4xl m-[30px_0_10px_0] font-bold">
        {name}
      </h1>
      <p className="text-xl leading-9 h-[144px] mb-[30px] max-w-[400px]">
        {desc}
      </p>
      <Button onClick={onClick} label="GET NOW" />
    </div>
  );
};

export default CardProduct;
