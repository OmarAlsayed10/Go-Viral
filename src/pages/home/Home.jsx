import SectionRenderer from "../../templates/SectionRenderer";
import ReelCarousel from "./components/reelcarousel";
import StatsBar from "./components/statsbar";
import WorksPreview from "./components/workspreview";
import BrandsMarquee from "./components/brandsmarquee";

function Home() {
  return (
    <>
      <SectionRenderer>
        <ReelCarousel />
        <StatsBar />
        <WorksPreview />
        <BrandsMarquee />
      </SectionRenderer>
    </>
  );
}

export default Home;
