import HoverPop from "../../components/UI/Features/HoverPop/HoverPop";
import { HoverPopCode } from "../../components/UI/Features/HoverPop/HoverPopCode";
import { fileCabinetCode } from "../../data/code-snippets/fileCabinet";
import FileCabinet from "../../data/component-preview/FileCabinet";
import { ShowcaseComponent } from "../../docs/ShowcaseComponent";

export default function FeatureShowcase() {
  return (
    <section className="py-8">
      <h1 className="px-4 text-3xl font-semibold">
        Features section components
      </h1>

      <div className="">
        <div className="">
          <ShowcaseComponent
            title="Cabinet Feature File section"
            badge="Basic"
            component={<FileCabinet />}
            code={fileCabinetCode}
            height="60vh"
            language="typescript"
          />
        </div>
        <div>
          <ShowcaseComponent
            title="Hover Image Reveal"
            badge="Basic"
            component={<HoverPop />}
            code={HoverPopCode}
            height="90vh"
            language="typescript"
          />
        </div>
      </div>
    </section>
  );
}
