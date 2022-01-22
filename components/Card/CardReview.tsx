import Image from "next/image";
import React from "react";

const CardReview = ({
  review,
  image,
  name,
  title,
}: {
  review: string;
  image: string;
  name: string;
  title: string;
}) => {
  return (
    <div className="w-[347px] h-[250px] p-[30px] border border-solid border-[#E5E5E5] rounded-[10px] flex flex-col gap-y-[30px]">
      <p className="text-[#222222]">{review}</p>
      <div className="flex items-center gap-x-[30px]">
        <Image
          src={image}
          alt="review image"
          width={70}
          height={70}
          className="rounded-full"
        />
        <div>
          <h5 className="font-bold text-xl">{name}</h5>
          <p className="text-lg text-[#818181]">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default CardReview;
