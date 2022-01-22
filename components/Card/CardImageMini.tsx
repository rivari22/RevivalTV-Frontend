import Image from "next/image";
import React from "react";

const CardImageMini = ({
  image,
  onClick,
}: {
  image: string;
  onClick: (image: string) => void;
}) => (
  <div
    onClick={() => onClick(image)}
    className="rounded-lg xl:border xl:border-solid xl:border-[#E5E5E5] xl:w-[170px] xl:h-[120px] mobile:w-[77px] mobile:h-[59px] flex items-center justify-center"
  >
    <Image
      className="relative"
      src={image}
      width={150}
      height={"100%"}
      alt="image mini"
    />
  </div>
);

export default CardImageMini;
