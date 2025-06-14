import SingleAdvantage from "./SingleAdvantage";

export default function AdvantagesContainer() {
  const advantagesData = [
    {
      title: "Save Time",
      description: "No more switching for packages or plans",
      iconLink: "advantages/clock.png",
    },
    {
      title: "Save Money",
      description: "Compare, negotiate, and choose the best.",
      iconLink: "advantages/wallet.png",
    },
    {
      title: "Trusted Network",
      description: "A Trusted Network of 7000+ Travel Agents",
      iconLink: "advantages/network.png",
    },
    {
      title: "Multiple Options",
      description: "Itineraries & Travel Tips from Trusted Agents",
      iconLink: "advantages/book.png",
    },
  ];
  return (
    <div className=" flex flex-wrap items-center gap-10 justify-center lg:justify-evenly py-10">
      {advantagesData.map((singleItem) => {
        return (
          <SingleAdvantage key={singleItem.title} itemDetails={singleItem} />
        );
      })}
    </div>
  );
}
