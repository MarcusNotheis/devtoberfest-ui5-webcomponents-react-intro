import { Button } from "@ui5/webcomponents-react";

export function ButtonsUI5() {
  // these two values are calculated
  const button1ShouldBeDisabled = false;
  const button2ShouldBeDisabled = true;
  return (
    <>
      <Button
        onClick={() => alert("I'll be there onClick!")}
        disabled={button1ShouldBeDisabled}
      >
        Click me!
      </Button>

      <Button
        onClick={() => alert("I will never show up!")}
        disabled={button2ShouldBeDisabled}
      >
        But you can't click me!
      </Button>
    </>
  );
}
