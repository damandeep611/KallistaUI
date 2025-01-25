import { EyeCursorCode } from "../../components/Animations/EyeTrack/EyeCursorCode";
import EyeFollowingCursor from "../../components/Animations/EyeTrack/EyeFollowingCursor";
import { ShowcaseComponent } from "../../docs/ShowcaseComponent";

export default function AnimationLibrary() {
  return (
    <div>
      <div>
        <h2>Animation Library</h2>
      </div>
      <div>
        <ShowcaseComponent
          title="Eye Following Cursor"
          badge="Animations"
          component={<EyeFollowingCursor />}
          code={EyeCursorCode}
          language="typescript"
        />
      </div>
    </div>
  );
}
