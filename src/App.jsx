import "./App.css";
import ExploreMostPopulationDestination from "./HomepageSections/ExploreMostPopulationDestination";
import Advantages from "./HomepageSections/Advantages";
import Testimonials from "./HomepageSections/Testimonials";
import TopSellingSection from "./HomepageSections/TopSellingSection";
import Header from "./HomepageSections/header";

function App() {
  return (
    <>
      <Header />
      <ExploreMostPopulationDestination />
      <Advantages />
      <TopSellingSection />
      <Testimonials />
    </>
  );
}

export default App;
