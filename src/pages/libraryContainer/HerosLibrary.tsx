import GlobeHero from "../../components/UI/Heros/GlobeHero/GlobeHero";
import { HeroGridCode } from "../../data/code-snippets/HeroSections/HeroGridCode";
import HeroGrid from "../../data/component-preview/HeroSections/HeroGrid";
import { ShowcaseComponent } from "../../docs/ShowcaseComponent";

export default function HerosLibrary() {
  return (
    <section className=" my-8">
      <div>
        <h1>Hero Sections</h1>
      </div>
      <div>
        <ShowcaseComponent
          title="Grid Motion Hero"
          badge="Basic"
          component={<HeroGrid />}
          height="100vh"
          code={HeroGridCode}
          language="typescript"
        />
      </div>
      <div>
        <ShowcaseComponent
          title="Globe Hero"
          badge="Hero"
          component={<GlobeHero />}
          code=""
          language="typescript"
        />
      </div>
    </section>
  );
}
