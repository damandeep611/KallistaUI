import { HeroGridCode } from "../../data/code-snippets/HeroSections/HeroGridCode";
import HeroGrid from "../../data/component-preview/HeroSections/HeroGrid";
import { ShowcaseComponent } from "../templatesShowcase/ShowcaseComponent";

export default function HerosLibrary(){
  return(
    <section className="">
      <div>
        <h1>Hero Sections</h1>

      </div>
      <div>
        <ShowcaseComponent title="Grid Motion Hero" badge="Basic" component={<HeroGrid/>} code={HeroGridCode} language="typescript"/>
      </div>
    </section>
  )
}