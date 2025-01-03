import { TextPrallaxCode } from "../../data/code-snippets/TextParallaxCode";
import { TextParallaxContentExample } from "../../data/component-preview/TextParllaxContent";
import { ShowcaseComponent } from "../templatesShowcase/ShowcaseComponent";

export default function FeatureShowcase() {
  return (
    <section className="py-8">
      <h1 className="px-4 text-3xl font-semibold">
        Features section components
      </h1>

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
      </div>
    </section>
  );
}
