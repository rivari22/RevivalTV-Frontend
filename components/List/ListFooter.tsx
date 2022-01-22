import React from "react";

const ListFooter = ({ title, list }: { title: string; list: string[] }) => {
  return (
    <div>
      <h5 className="text-lg text-[#ffffff] mb-[30px]">{title}</h5>
      <div>
        {list.map((item, index) => (
          <p key={index} className="text-lg text-[#ffffffc0] mb-[15px]">{item}</p>
        ))}
      </div>
    </div>
  );
};

export default ListFooter;
