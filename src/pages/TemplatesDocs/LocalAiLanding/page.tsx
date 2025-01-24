import HeroAI from "./Hero";
import NavAi from "./NavAi";

export default function LocalAiLanding() {
  return (
    <div className="relative  bg-black text-white ">
      <div className="mx-auto max-w-7xl ">
        <NavAi />
      </div>
      <HeroAI />
    </div>
  );
}
