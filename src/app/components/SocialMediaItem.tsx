import Image from "next/image";

export default function SocialMediaItem(
  { image }: { image: any }
) {
  return (
    <div className="bg-[#486C5C] rounded-full p-1 lg:p-2">
      <Image src={image} width={30} height={30} alt={'loguito'} className="" />
    </div>
  );
}
