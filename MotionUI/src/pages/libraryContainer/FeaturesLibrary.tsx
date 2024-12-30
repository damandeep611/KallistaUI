import { TextPrallaxCode } from "../../data/code-snippets/TextParallaxCode";
import { BouncyCardsFeatures } from "../../data/component-preview/BouncyCardsFeatures";
import { TextParallaxContentExample } from "../../data/component-preview/TextParllaxContent";
import { buttonComponentCode } from "../templatesShowcase/ButtonComponent";
import { ShowcaseComponent } from "../templatesShowcase/ShowcaseComponent";

export default function FeatureShowcase() {
  return (
    <section className="p-12">
      <h1 className="text-3xl font-semibold">Features section components</h1>

      <div className="">
        <div>
          <ShowcaseComponent
            title="Text Parallax Content (scroll)"
            badge="Basic"
            component={<TextParallaxContentExample />}
            code={TextPrallaxCode}
            height="100vh"
            language="typescript"
          />
        </div>
             <div>
        <ShowcaseComponent title="Bouncy Card Feature" badge="Basic" component={<BouncyCardsFeatures/>} code={buttonComponentCode} language="typescript"/>
             </div>
      </div>
    </section>
  );
}
