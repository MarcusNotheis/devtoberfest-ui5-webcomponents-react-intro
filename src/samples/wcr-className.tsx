import { Label } from "@ui5/webcomponents-react";

export function LabelUI5() {
  /*
   * .textColorRed {
   *   color: #f00;
   * }
   */
  return (
    <Label
      className="textColorRed"
      aria-hidden
      data-id={"abc"}
      title={"This is a extensive description"}
    >
      I'm a text!
    </Label>
  );
}
