import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div className="flex flex-col items-center hover:scale-105 transition duration-150 ">
      <div className="relative h-64 w-64">
        <Image src={img} className="rounded-xl" layout="fill" />
      </div>
      <p className="font-semibold">{title}</p>
    </div>
  );
}

export default MediumCard;
