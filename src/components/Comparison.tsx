import classes from "./Comparison.module.css";
import { CodePane, Stepper, Text } from "spectacle";
import { ReactNode } from "react";

interface Props {
  textStart: string;
  textEnd: string;
  contentStart: ReactNode;
  contentEnd: ReactNode;
  fadeOutStart?: boolean;
}

export function SideBySide({
  textStart,
  textEnd,
  contentStart,
  contentEnd,
  fadeOutStart,
}: Props) {
  return (
    <div
      className={[classes.grid, fadeOutStart && classes.fadeOutStart]
        .filter(Boolean)
        .join(" ")}
    >
      {(textStart || textEnd) && (
        <Text
          color="quinary"
          className={classes.textStart}
          margin={"0px"}
          data-title
        >
          {textStart}
        </Text>
      )}
      <div className={classes.contentStart}>{contentStart}</div>

      {(textStart || textEnd) && (
        <Text
          color="quinary"
          className={classes.textEnd}
          margin={"0px"}
          data-title
        >
          {textEnd}
        </Text>
      )}
      <div className={classes.contentEnd}>{contentEnd}</div>
    </div>
  );
}

export function ComparisonAndSample({
  ui5Code,
  ui5WcrCode,
  sample,
}: {
  ui5Code: string;
  ui5WcrCode: string;
  sample: ReactNode;
}) {
  return (
    <Stepper values={["comparison", "example"]}>
      {(value) => {
        if (value === "comparison") {
          return (
            <SideBySide
              fadeOutStart
              textStart={"with plain UI5 Web Components"}
              textEnd={"with UI5 Web Components for React"}
              contentStart={
                <CodePane language={"javascript"}>{ui5Code}</CodePane>
              }
              contentEnd={
                <CodePane language={"javascript"}>{ui5WcrCode}</CodePane>
              }
            />
          );
        }
        return (
          <SideBySide
            textStart={"with UI5 Web Components for React"}
            textEnd={""}
            contentStart={
              <CodePane language={"javascript"}>{ui5WcrCode}</CodePane>
            }
            contentEnd={sample}
          />
        );
      }}
    </Stepper>
  );
}
