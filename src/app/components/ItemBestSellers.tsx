
import Image from "next/image";
import React from "react";
import { roboto } from "../fonts";

const ItemBestSeller = ({
  image,
  tile,
  price,
}: {
  image: any;
  tile: string;
  price: number;
}) => {

  return (
    <div className="flex flex-col gap-5">
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
      <span className={`${roboto.className} lg:text-xl `}>${price}</span>
    </div>
  );
};

export default ItemBestSeller;
