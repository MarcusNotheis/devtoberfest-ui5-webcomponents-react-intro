import {
  CodePane,
  CodeSpan,
  FlexBox,
  Heading,
  Link,
  ListItem,
  Slide,
  Text,
  UnorderedList,
} from "spectacle";
import { ButtonsUI5 } from "../samples/wc-booleans.tsx";
import { ButtonsUI5 as ButtonsUI5Fixed } from "../samples/wc-booleans-fixed.tsx";
import ButtonsUI5Code from "../samples/wc-booleans.tsx?raw";
import ButtonsUI5FixedCode from "../samples/wc-booleans-fixed.tsx?raw";
import { CalenderUI5 } from "../samples/wc-events.tsx";
import { CalenderUI5 as CalenderUI5Fixed } from "../samples/wc-events-fixed.tsx";
import CalenderUI5Code from "../samples/wc-events.tsx?raw";
import CalenderUI5FixedCode from "../samples/wc-events-fixed.tsx?raw";
import { LabelUI5 } from "../samples/wc-className.tsx";
import LabelUI5Code from "../samples/wc-className.tsx?raw";
import { LabelUI5 as LabelUI5Fixed } from "../samples/wc-className-fixed.tsx";
import LabelUI5CodeFixed from "../samples/wc-className-fixed.tsx?raw";
import { SideBySide } from "../components/Comparison.tsx";

function Intro() {
  return (
    <Slide>
      <Heading>Why do we need a React wrapper?</Heading>
      <Text>
        The current versions of React (react 16, 17 and 18) have some
        shortcomings in using{" "}
        <Link
          href={
            "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements"
          }
        >
          CustomElements
        </Link>{" "}
        in your React components:
      </Text>
      <UnorderedList>
        <ListItem>
          incorrect handling of <CodeSpan fontSize="text">boolean</CodeSpan>{" "}
          attributes
        </ListItem>
        <ListItem>custom event handlers are not attached</ListItem>
        <ListItem>inconsistencies with standard React props</ListItem>
      </UnorderedList>
    </Slide>
  );
}

function BooleanProps() {
  return (
    <>
      <Slide>
        <Heading>
          Incorrect handling of <CodeSpan fontSize="h1">boolean</CodeSpan>{" "}
          attributes
        </Heading>

        <SideBySide
          textStart={""}
          textEnd={""}
          contentStart={
            <CodePane
              language={"javascript"}
              highlightRanges={[[11], [18]]}
              stepIndex={1}
            >
              {ButtonsUI5Code}
            </CodePane>
          }
          contentEnd={
            <FlexBox flexDirection={"Column"} className="flexGap">
              <ButtonsUI5 />
            </FlexBox>
          }
        />
      </Slide>

      <Slide>
        <Heading>
          Incorrect handling of <CodeSpan fontSize="h1">boolean</CodeSpan>{" "}
          attributes
        </Heading>
        <Heading fontSize={"text"} data-subtitle>
          How to fix it
        </Heading>

        <SideBySide
          textStart={""}
          textEnd={""}
          contentStart={
            <CodePane language={"javascript"} highlightRanges={[[11], [18]]}>
              {ButtonsUI5FixedCode}
            </CodePane>
          }
          contentEnd={
            <FlexBox flexDirection={"Column"} className="flexGap">
              <ButtonsUI5Fixed />
            </FlexBox>
          }
        />
      </Slide>
    </>
  );
}

function EventHandlers() {
  return (
    <>
      <Slide>
        <Heading>Custom event handlers are not attached</Heading>

        <SideBySide
          textStart={""}
          textEnd={""}
          contentStart={
            <CodePane
              language={"javascript"}
              highlightRanges={[6, 8]}
              stepIndex={1}
            >
              {CalenderUI5Code}
            </CodePane>
          }
          contentEnd={<CalenderUI5 />}
        />
      </Slide>

      <Slide>
        <Heading>Custom event handlers are not attached</Heading>
        <Heading fontSize={"text"} data-subtitle>
          How to fix it
        </Heading>

        <SideBySide
          textStart={""}
          textEnd={""}
          contentStart={
            <CodePane language={"javascript"} highlightRanges={[7, 25]}>
              {CalenderUI5FixedCode}
            </CodePane>
          }
          contentEnd={<CalenderUI5Fixed />}
        />
      </Slide>
    </>
  );
}

function StandardReactProps() {
  return (
    <>
      <Slide>
        <Heading>Using className on Custom Elements doesn't work</Heading>

        <SideBySide
          textStart={""}
          textEnd={""}
          contentStart={
            <CodePane language={"javascript"}>{LabelUI5Code}</CodePane>
          }
          contentEnd={<LabelUI5 />}
        />
      </Slide>

      <Slide>
        <Heading>Using className on Custom Elements doesn't work</Heading>
        <Heading fontSize={"text"} data-subtitle>
          How to fix it
        </Heading>

        <SideBySide
          textStart={""}
          textEnd={""}
          contentStart={
            <CodePane language={"javascript"}>{LabelUI5CodeFixed}</CodePane>
          }
          contentEnd={<LabelUI5Fixed />}
        />
      </Slide>
    </>
  );
}

export function Why() {
  return (
    <>
      <Intro />
      <BooleanProps />
      <EventHandlers />
      <StandardReactProps />
    </>
  );
}
