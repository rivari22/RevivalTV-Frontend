import React from "react";

const ListFooter = ({ title, list }: { title: string; list: string[] }) => {
  return (
    <ul>
      <li className="text-lg text-[#ffffff] mb-[30px]">{title}</li>
      {list.map((item, index) => (
        <li key={index} className="text-lg text-[#ffffffc0] mb-[15px]">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListFooter;
