import { FlexBox, Heading, Slide, Text } from "spectacle";
import { Contact } from "../components/Contact.tsx";
import Background from "../assets/Background.png";
import SAPLogo from "../assets/SAP.png";

export function Outro() {
  return (
    <>
      <Slide backgroundColor={"var(--dividerBackground)"}>
        <FlexBox alignItems={"Center"} height={"100vh"}>
          <Heading>Time for Hands On!</Heading>
        </FlexBox>
      </Slide>

      <Slide
        backgroundImage={`url(${Background})`}
        backgroundOpacity={1}
        backgroundPosition={"center"}
        backgroundSize={"100%"}
      >
        <FlexBox
          flexDirection={"column"}
          alignItems={"Start"}
          justifyContent={"space-around"}
          position="absolute"
          backgroundColor={"var(--dividerBackground)"}
          bottom={"0px"}
          left="0px"
          right="0px"
          height={"64%"}
        >
          <Heading
            textAlign={"start"}
            style={{
              marginLeft: "54px",
              marginBlock: 0,
              paddingBottom: 0,
            }}
          >
            Thank you.
          </Heading>

          <FlexBox flexDirection={"column"} alignItems={"Start"}>
            <Text
              color={"secondary"}
              style={{
                marginLeft: "54px",
                marginBlock: 0,
                fontWeight: "bold",
              }}
            >
              Contact information:
            </Text>

            <FlexBox
              style={{
                marginLeft: "54px",
                marginBlock: 0,
                paddingBottom: 0,
              }}
            >
              <Contact
                name={"Marcus Notheis"}
                mail={"marcus.notheis@sap.com"}
                githubProfile={"MarcusNotheis"}
                xProfile={"marcusnotheis"}
                linkedInProfile={"www.linkedin.com/in/marcusnotheis"}
              />
              <Contact
                name={"Lukas Harbarth"}
                mail={"lukas.harbarth@sap.com"}
                githubProfile={"Lukas742"}
                xProfile={"luk742"}
              />
            </FlexBox>
          </FlexBox>

          <FlexBox flexDirection={"column"} alignItems={"Start"}>
            <img
              src={SAPLogo}
              alt={"SAP Logo"}
              height={40}
              style={{
                marginLeft: "70px",
              }}
            />

            <Text
              fontSize={"0.5rem"}
              style={{
                marginLeft: "54px",
                marginBlock: 0,
                paddingBottom: 0,
              }}
            >
              © 2023 SAP SE or an SAP affiliate company. All rights reserved.
              See Legal Notice on www.sap.com/legal-notice for use terms,
              disclaimers, disclosures, or restrictions related to SAP Materials
              for general audiences.
            </Text>
          </FlexBox>
        </FlexBox>
      </Slide>
    </>
  );
}
