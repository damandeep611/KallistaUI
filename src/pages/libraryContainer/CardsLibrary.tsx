import { WriteCodeAnimationCode } from "../../components/UI/CardsShowcase/codeWAnimation/WriteCodeAniCode";
import WriteCodeAnimation from "../../components/UI/CardsShowcase/codeWAnimation/WriteCodeAnimation";
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
          language="typescript"
          code={HoverMarqCode}
          component={<HoverMarq />}
        />
      </div>
      <div>
        <ShowcaseComponent
          title="Code Animation"
          badge="New"
          language="typescript"
          code={WriteCodeAnimationCode}
          component={<WriteCodeAnimation />}
        />
      </div>
    </div>
  );
}
