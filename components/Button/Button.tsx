import React from "react";

const sizeMap = {
  normal: "px-[58px]",
  large: "px-[75px]",
};

const Button = ({
  label,
  onClick,
  size,
}: {
  label: string;
  onClick: () => void;
  size?: "normal" | "large";
}) => {
  return (
    <button
      className={`bg-[#2E4DEC] mx-auto rounded-full py-[10px] text-white text-lg ${
        sizeMap[size || "normal"]
      }  ${size === "large" ? "mobile:w-full md:w-auto" : "w-auto"} `}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {label}
    </button>
  );
};

export default Button;
