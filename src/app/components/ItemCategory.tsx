import Image from "next/image";
import React from "react";

const ItemCategory = ({ image, tile }: { image: any; tile: string }) => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="bg-[#92929263] rounded-full p-5">
        <Image
          src={image}
          className="hover:scale-110 duration-200 cursor-pointer"
          alt="item"
          width={150}
          height={150}
        />
      </div>
      <span className="lg:text-2xl">{tile}</span>
    </div>
  );
};

export default ItemCategory;
