import { licensebuttonCode } from "../../components/UI/Buttons/licensebuttonCode";
import LicensePlateButton from "../../components/UI/Buttons/LicensePlate";
import { ShowcaseComponent } from "../templatesShowcase/ShowcaseComponent";

export default function ButtonLibrary() {
  return (
    <section>
      <div>
        <h3 className="text-3xl font-semibold">Buttons</h3>
      </div>
      <div>
        <ShowcaseComponent
          title="License plate style"
          badge="basic"
          code={licensebuttonCode}
          component={<LicensePlateButton />}
          language="typescript"
        />
      </div>
    </section>
  );
}
