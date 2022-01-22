import React from "react";

const variantMap = {
  normal: "px-[58px]",
  large: "px-[75px]",
};

const Button = ({
  label,
  onClick,
  variant,
}: {
  label: string;
  onClick: () => void;
  variant?: "normal" | "large";
}) => {
  return (
    <button
      className={`bg-[#2E4DEC] mx-auto rounded-full py-[10px] text-white text-lg ${
        variantMap[variant || "normal"]
      }`}
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
