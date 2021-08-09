const filterRecommends = [
  "Cancellation",
  "Type of place",
  "Price",
  "Instant Book",
  "More filters",
];

import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "./components/InfoCard";
import Map from "./components/Map";

const { default: Footer } = require("./components/Footer");
const { default: Header } = require("./components/Header");
function Search({ searchResults }) {
  console.log("searchResults", searchResults);

  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${range} | ${noOfGuests}`} guests />
      <main className="max-w-7xl mx-auto px-4 mt-12 md:px-16 grid grid-cols-1 lg:grid-cols-2">
        <section>
          <p>
            300+ stays - {range} - {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold  mt-2 mb-6 capitalize ">
            Stays in {location}
          </h1>
          <div className="hidden md:inline-flex space-x-4">
            {filterRecommends.map((item, index) => (
              <p className="button" key={index}>
                {item}
              </p>
            ))}
          </div>

          <div className="flex flex-col space-y-8 mt-4">
            {searchResults.map((item) => (
              <InfoCard
                description={item.description}
                img={item.img}
                location={item.location}
                price={item.price}
                star={item.star}
                title={item.title}
                total={item.total}
              />
            ))}
          </div>
        </section>
        <section className="h-64">
          <Map />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  //feth data
  const res = await fetch("https://links.papareact.com/isz");
  const searchResults = await res.json();

  return { props: { searchResults } };
}
