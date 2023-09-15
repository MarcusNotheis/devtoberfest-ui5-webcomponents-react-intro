import { SpectacleThemeOverrides } from "spectacle";

export const theme: SpectacleThemeOverrides = {
  colors: {
    primary: "#000", // regular text
    secondary: "#470CED", // headings
    tertiary: "#FFFFFF", // slide background
    quaternary: "#0064d9", // links,
    quinary: "#2CE0BF",
  },
  fonts: {
    header: '"72-Bold","72-Boldfull","72","72full",Arial,Helvetica,sans-serif',
    text: '"72","72full",Arial,Helvetica,sans-serif',
  },
  fontSizes: {
    h1: "2.25rem",
    h2: "2rem",
    h3: "1.5rem",
    text: "1.25rem",
    monospace: "0.875rem",
  },
};
