import Image from "next/image";
import ItemCategory from "./components/ItemCategory";
import ItemBestSeller from "./components/ItemBestSellers";

export default function Home() {
  return (
    <main className="">
      {/* Engage */}
      <div className="h-[90dvh] bg-img flex justify-center items-center text-white">
        <p className="text-4xl md:text-7xl lg:text-8xl">Grab and go or...</p>
        <span
          data-aos="fade-up"
          data-aos-duration="1500"
          className="ml-[1px] font-medium italic text-4xl md:text-7xl lg:text-8xl"
        >
          Stay
        </span>
      </div>

      {/* Shop Entry */}
      <div className="lg:p-10 mt-10" data-aos="fade-up">
        <div className="flex justify-between">
          <h1 className="text-6xl">Categories</h1>
          <div className="rounded-2xl bg-[#486C5C] text-center py-2 text-white min-w-[160px] h-max">
            <a href="#">Go to shop</a>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <ItemCategory
            image={"/cheese-and-charcuterie_square.png"}
            tile="Charcuterie"
          />
          <ItemCategory image={"/ice-cream_square.png"} tile="Ice-cream" />
          <ItemCategory image={"/meals.png"} tile="Fresh meals" />
          <ItemCategory image={"/snacks_square.png"} tile="Snacks" />
          <ItemCategory image={"/wine_square.png"} tile="Wines" />
          <ItemCategory image={"/v2_sweets.png"} tile="Sweets" />
          <ItemCategory image={"/wine_square.png"} tile="Wines" />
          <ItemCategory image={"/v2_sweets.png"} tile="Sweets" />
        </div>
      </div>

      <div className="lg:p-10 mt-10" data-aos="fade-up">
        <div className="flex justify-between">
          <h1 className="text-6xl">Best Sellers</h1>
          <div className="rounded-2xl bg-[#486C5C] text-center py-2 text-white min-w-[160px] h-max">
            <a href="#">See more</a>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <ItemBestSeller
            image={"/cheese-and-charcuterie_square.png"}
            tile="Charcuterie"
            price={25}
          />
          <ItemBestSeller
            image={"/ice-cream_square.png"}
            tile="Ice-cream"
            price={15.99}
          />
          <ItemBestSeller image={"/meals.png"} tile="Fresh meals" price={10.00} />
          <ItemBestSeller
            image={"/snacks_square.png"}
            tile="Snacks"
            price={11.98}
          />
          <ItemBestSeller
            image={"/wine_square.png"}
            tile="Wines"
            price={20.5}
          />
          <ItemBestSeller image={"/v2_sweets.png"} tile="Sweets" price={5.0} />
          <ItemBestSeller
            image={"/wine_square.png"}
            tile="Wines"
            price={3.99}
          />
        </div>
      </div>

      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </main>
  );
}
