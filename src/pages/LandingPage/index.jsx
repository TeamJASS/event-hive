import Blog from "./components/Blog";
import Clientele from "./components/Clientele";
import CTA from "./components/CTA";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
// import { events } from "../../lib/data-placeholder";
import Upcoming from "./components/Upcoming";

const LandingPage = () => {
  return (
    <div className="flex flex-col w-full gap-4">
      <Hero />
      <Upcoming />
      <CTA />
      <Clientele />
      <Trending />
      <Blog />
    </div>
  );
};

export default LandingPage;
