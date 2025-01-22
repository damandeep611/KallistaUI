import HoverMarq from "../../components/UI/CardsShowcase/HoverMarqCard/HoverMarq";
import { HoverMarqCode } from "../../components/UI/CardsShowcase/HoverMarqCard/HoverMarqCode";
import { ShowcaseComponent } from "../../docs/ShowcaseComponent";

export default function CardsLibrary() {
  return (
    <div>
      <div>
        <h3>Cards Library</h3>
      </div>
      <div>
        <ShowcaseComponent
          title="Hover Marquee reveal Card"
          badge="Basic"
          height="90vh"
          language="typescript"
          code={HoverMarqCode}
          component={<HoverMarq />}
        />
      </div>
    </div>
  );
}
