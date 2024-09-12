import { tokens as baseTokens } from "@tamagui/themes";
import { createTokens } from "tamagui";

export const tokens = createTokens({
  ...baseTokens,
  size: {
    ...baseTokens.size,
    sm: 16,
    md: 24,
    lg: 36,
    xl: 52,
    "2xl": 64,
    "3xl": 96,
    full: "100%",
  },
  space: {
    ...baseTokens.space,
    "2xs": 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
    "2xl": 48,
    "3xl": 64,
    "4xl": 80,
    "5xl": 96,
  },
  foo: {
    bar: 100,
  },
  color: {
    ...baseTokens.color,
    white: "#FFFFFF",
    black: "#000000",
    honeydew: "#F1FFF3",
    lightGree: "#DFF7E2",
    caribbeanGreen: "#00D09E",
    cyprus: "#0E3E3E",
    fenceGreen: "#052224",
    void: "#031314",
    lightBlue: "#6DB6FE",
    vividBlue: "#3299FF",
    oceanBlue: "#0068FF",
  },
  radius: {
    ...baseTokens.radius,
    "2xs": 2,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    "2xl": 32,
  },
});
