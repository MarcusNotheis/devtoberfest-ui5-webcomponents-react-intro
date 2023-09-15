import {
  FlexBox,
  Heading,
  ListItem,
  Slide,
  Stepper,
  Text,
  UnorderedList,
} from "spectacle";
import Logo from "../assets/Logo-Sticker.png";
import { ButtonsUI5 as ButtonsUI5WCRFixed } from "../samples/wcr-booleans.tsx";
import ButtonsUI5WCRFixedCode from "../samples/wcr-booleans.tsx?raw";
import ButtonsUI5FixedCode from "../samples/wc-booleans-fixed.tsx?raw";
import { CalenderUI5 } from "../samples/wcr-events.tsx";
import CalenderUI5WCRCode from "../samples/wcr-events.tsx?raw";
import CalenderUI5FixedCode from "../samples/wc-events-fixed.tsx?raw";
import { LabelUI5 } from "../samples/wcr-className.tsx";
import LabelUI5WCRCode from "../samples/wcr-className.tsx?raw";
import LabelUI5CodeFixed from "../samples/wc-className-fixed.tsx?raw";
import { ComparisonAndSample, SideBySide } from "../components/Comparison.tsx";
import SideNavigationPropTypes from "../assets/PropTypes.png";
import TsTypeAhead from "../assets/ts-typeahead.png";

function Intro() {
  return (
    <>
      <Slide backgroundColor={"var(--dividerBackground)"}>
        <FlexBox alignItems={"Center"} height={"100vh"}>
          <Heading>Can we somehow improve the developer experience?</Heading>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox>
          <img
            src={Logo}
            alt="UI5 Web Components for React Logo"
            width={"60%"}
          />
        </FlexBox>

        <Stepper values={["1", "2", "3"]}>
          {(_, step) => {
            return (
              <UnorderedList>
                {step >= 0 && (
                  <ListItem>
                    provides wrapper components for all UI5 Web Components
                    <br />
                    <Text
                      fontSize={"1rem"}
                      style={{
                        marginInlineStart: 0,
                        paddingInlineStart: 0,
                        marginBlock: 0,
                        paddingBlockEnd: 0,
                      }}
                    >
                      Our Wrapper components are hiding the complexity of
                      dealing with Custom Elements in React and let you use the
                      UI5 Web Components in React as if they were "regular"
                      React Components.
                    </Text>
                  </ListItem>
                )}
                {step >= 1 && (
                  <ListItem>
                    provides complex layouts (e.g. ObjectPage) and charts built
                    on top of UI5 Web Components
                  </ListItem>
                )}
                {step >= 2 && (
                  <ListItem>adjusted type definitions for react</ListItem>
                )}
              </UnorderedList>
            );
          }}
        </Stepper>
      </Slide>
    </>
  );
}

function BooleanProps() {
  return (
    <>
      <Slide>
        <Heading>Boolean Prop Handling</Heading>

        <ComparisonAndSample
          ui5Code={ButtonsUI5FixedCode}
          ui5WcrCode={ButtonsUI5WCRFixedCode}
          sample={
            <FlexBox flexDirection={"Column"} className="flexGap">
              <ButtonsUI5WCRFixed />
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
        <Heading>Event Handlers</Heading>
        <ComparisonAndSample
          ui5Code={CalenderUI5FixedCode}
          ui5WcrCode={CalenderUI5WCRCode}
          sample={<CalenderUI5 />}
        />
      </Slide>
    </>
  );
}

function StandardReactProps() {
  return (
    <>
      <Slide>
        <Heading>Support for standard HTML props in React</Heading>
        <ComparisonAndSample
          ui5Code={LabelUI5CodeFixed}
          ui5WcrCode={LabelUI5WCRCode}
          sample={<LabelUI5 />}
        />
      </Slide>
    </>
  );
}

function ComplexLayoutsAndCharts() {
  return (
    <>
      <Slide>
        <Heading>Complex Layouts and Charts</Heading>
        <iframe
          src="https://sap.github.io/ui5-webcomponents-react/iframe.html?args=style.height:!undefined&id=layouts-floorplans-objectpage--default&viewMode=story&globals=theme:sap_horizon"
          style={{ flexGrow: 1, border: "none" }}
        />
      </Slide>

      <Slide>
        <Heading>Complex Layouts and Charts</Heading>
        <iframe
          src="https://sap.github.io/ui5-webcomponents-react/iframe.html?args=&id=charts-barchart--default&viewMode=story&globals=theme:sap_horizon"
          style={{ flexGrow: 1, border: "none" }}
        />
      </Slide>
    </>
  );
}

function TypeScriptSupport() {
  return (
    <Slide>
      <Heading>Adjusted TypeScript typings for React</Heading>
      <SideBySide
        textStart={""}
        textEnd={""}
        contentStart={
          <img
            src={SideNavigationPropTypes}
            alt={"Adjusted TypeScript types"}
            style={{ width: "100%", objectFit: "contain" }}
          />
        }
        contentEnd={
          <img
            src={TsTypeAhead}
            alt="SideNavigation type ahead"
            style={{ width: "100%", objectFit: "contain" }}
          />
        }
      />
    </Slide>
  );
}

export function UI5WebComponentsForReact() {
  return (
    <>
      <Intro />
      <BooleanProps />
      <EventHandlers />
      <StandardReactProps />
      <ComplexLayoutsAndCharts />
      <TypeScriptSupport />
    </>
  );
}
