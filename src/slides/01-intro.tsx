import { Appear, FlexBox, Heading, Slide, Text } from "spectacle";
import ui5Ecosystem from "../assets/stack.svg";
import DevotoberFest from "../assets/DevtoberfestTemplate.png";
import SAPLogo from "../assets/SAP.png";

export function Intro() {
  return (
    <>
      <Slide
        backgroundImage={`url(${DevotoberFest})`}
        backgroundOpacity={1}
        backgroundPosition={"center"}
        backgroundSize={"100%"}
        padding={"0px"}
      >
        <Appear>
          <FlexBox
            flexDirection={"column"}
            alignItems={"Start"}
            justifyContent={"space-between"}
            position="absolute"
            backgroundColor={"var(--dividerBackground)"}
            bottom={"0px"}
            left="0px"
            right="0px"
            height={"48%"}
          >
            <Heading
              textAlign={"start"}
              style={{
                marginLeft: "54px",
                marginBlock: 0,
                paddingBottom: 0,
              }}
            >
              Build your own React application with <br /> UI5 Web Components
              for React
            </Heading>
            <Text
              color={"secondary"}
              style={{
                marginLeft: "54px",
                marginBlock: 0,
              }}
            >
              Marcus Notheis & Lukas Harbarth
              <br />
              September 28, 2023
            </Text>

            <img
              src={SAPLogo}
              alt={"SAP Logo"}
              height={40}
              style={{
                marginLeft: "70px",
                marginBlockEnd: "2rem",
              }}
            />
          </FlexBox>
        </Appear>
      </Slide>

      <Slide>
        <Heading>UI5 Web Components and their ecosystem</Heading>
        <FlexBox>
          <img
            src={ui5Ecosystem}
            alt="UI5 Web Components Ecosystem"
            width={"85%"}
            // width={"100%"}
            style={{
              objectFit: "contain",
            }}
          />
        </FlexBox>
      </Slide>
    </>
  );
}
