import { Deck, FlexBox } from "spectacle";
import { theme } from "./theme.ts";
import { Intro } from "./slides/01-intro.tsx";
import { Why } from "./slides/02-why.tsx";
import { UI5WebComponentsForReact } from "./slides/03-ui5-wcr.tsx";
import { ProgressIndicator, ThemeProvider } from "@ui5/webcomponents-react";
import { Outro } from "./slides/04-outro.tsx";

function DeckTemplate({
  slideNumber,
  numberOfSlides,
}: {
  slideNumber: number;
  numberOfSlides: number;
}) {
  return (
    <FlexBox
      justifyContent="end"
      position="absolute"
      bottom={"0px"}
      width={1}
      data-ui5-compact-size
    >
      <ProgressIndicator
        style={{ width: "10rem" }}
        value={(slideNumber / numberOfSlides) * 100}
        hideValue
      />
    </FlexBox>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Deck template={DeckTemplate} theme={theme}>
        <Intro />
        <Why />
        <UI5WebComponentsForReact />
        <Outro />
      </Deck>
    </ThemeProvider>
  );
}

export default App;
