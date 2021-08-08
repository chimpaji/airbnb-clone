import Head from "next/head";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LargeCard from "./components/LargeCard";
import MediumCard from "./components/MediumCard";
import SmallCard from "./components/SmallCard";

export default function Home({ exploreData, cardData }) {
  console.log("testet", cardData);
  return (
    <div className="">
      <Head>
        <title>
          Airbnb with Chimpaji: Vacation Rentals, Cabins, Beach Houses, Unique
          Home
        </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* Main section */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* Section */}
        <section className="pt-6">
          <h2 className="text-4xl  font-bold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {exploreData.map((item, index) => (
              <SmallCard
                key={index}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>

        <section className="pt-6">
          <h2 className="text-4xl font-bold pb-5">Live Anywhere</h2>
          <div className="flex overflow-x-auto gap-2 scrollbar-hide py-4 px-2">
            {cardData.map((item, index) => {
              return (
                <MediumCard key={index} img={item.img} title={item.title} />
              );
            })}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  // fetch img,location,distance for small card
  const res = await fetch("https://links.papareact.com/pyp");
  const exploreData = await res.json();

  // Fetch big card data: img,title
  const res1 = await fetch("https://links.papareact.com/zp1");
  const cardData = await res1.json();

  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
