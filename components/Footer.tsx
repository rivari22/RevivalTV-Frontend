import Image from "next/image";
import React from "react";
import ListFooter from "./List/ListFooter";
import LogoAutodrone from "../public/images/Logo-autodrone.png";

const listFooter = [
  {
    title: "Explore",
    list: ["Our Services", "Specification", "Refund", "Playlist"],
  },
  {
    title: "Account",
    list: ["My Account", "Top Benefit", "How-to Tutorials", "Moment"],
  },
  {
    title: "Office",
    list: [
      "+021 2208 1996",
      "SCBD, Jakarta",
      "No.2 (Autodrone)",
      "support@autodrone.id",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="absolute bottom-0 z-40 bg-black xl:p-[100px_150px] w-full xl:h-[410px] flex mobile:flex-col xl:flex-row xl:gap-[100px] mobile:gap-8 mobile:p-[39px_32px_36px_32px]">
      <div className="w-[260px]">
        <div className="flex gap-5 mb-6">
          <Image
            src={LogoAutodrone}
            width={68}
            height={32}
            alt="logo autodrone"
          />
          <h5 className="text-white text-[26px]">autodrone</h5>
        </div>
        <p className="text-[#ffffffc0] text-lg">Look up the sky and beautiful world easily.</p>
      </div>
      {listFooter.map((item, index) => (
        <ListFooter key={index} {...item} />
      ))}
    </footer>
  );
};

export default Footer;
