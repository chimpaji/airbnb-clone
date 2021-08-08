import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative cursor-pointer mt-12 mb-12">
      <div className="relative h-96 ">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-20 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-white bg-black p-2 rounded-xl mt-4">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
