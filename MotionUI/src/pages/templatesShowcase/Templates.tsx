import React from "react";
import { ShowcaseComponent } from "../../components/ShowcaseComponent";
import { Button } from "./Button";
import { buttonComponentCode } from "./ButtonComponent";

const Templates: React.FC = () => {
  return (
    <section>
      <div>
        <h1>This is the Templates page</h1>
      </div>
      <ShowcaseComponent
        title="Button Component"
        badge="Basic"
        component={<Button variant="primary">Click me</Button>}
        code={buttonComponentCode}
        language="typescript"
      />
    </section>
  );
};

export default Templates;
