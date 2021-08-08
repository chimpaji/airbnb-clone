import Image from "next/image";

function SmallCard({ img, location, distance }) {
  return (
    <div className="flex items-center hover:bg-gray-100 space-x-3 hover:scale-105 transition delay-150">
      <div className="relative h-16 w-16">
        <Image
          src={img}
          layout="fill"
          className="rounded-xl"
          objectFit="fill"
        />
      </div>
      <div>
        <h2 className="font-semibold">{location}</h2>
        <p>{distance}</p>
      </div>
    </div>
  );
}

export default SmallCard;
