import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";

function InfoCard({ description, img, location, price, star, title, total }) {
  return (
    <div className="w-full flex p-4 shadow-sm rounded-xl space-x-4 cursor-pointer hover:scale-105 hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t-2">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 flex">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="w-full">
        <div className="flex justify-between">
          <div className="text-sm text-gray-400">{location}</div>
          <HeartIcon className="w-6 j-6" />
        </div>
        <div className="font-semibold">{title}</div>
        <div className="text-xs text-gray-400">{description}</div>
        <div className="text-right font-semibold lg:mt-12">{price}</div>
        <div className="md:mt-4">
          <div className="flex">
            <StarIcon className="text-red-500 h-6 w-6" />
            <div className="font-semibold ">{star}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
