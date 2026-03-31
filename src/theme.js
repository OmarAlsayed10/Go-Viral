import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
const colorSchemes = {
  default: {
    primary: {
      50: "#FBF6EB",
      100: "#F5E9CC",
      200: "#ECDAA3",
      300: "#E0C476",
      400: "#D6B35F",
      500: "#CDA84F",
      600: "#B8933D",
      700: "#9A7A30",
      800: "#7C6226",
      900: "#5E4A1C",
    },
    accent: {
      50: "#E8ECF5",
      100: "#C5CDEB",
      200: "#9BA8D6",
      300: "#6F82BF",
      400: "#3D5291",
      500: "#0f1a44",
      600: "#0D1639",
      700: "#0B132F",
      800: "#0a0f2c",
      900: "#060A1E",
    },
  },
};
export const getColorScheme = (schemeName = "default") => {
  return colorSchemes[schemeName] ?? colorSchemes.default;
};
import siteConfig from "./config/siteConfig.js";
const activeScheme = getColorScheme(siteConfig.theme?.colorSchema);
const typography = {
  fonts: {
    body: `'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif`,
    heading: `'Playfair Display', Georgia, serif`,
    mono: `'Courier New', monospace`,
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: 2,
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
};
const spacing = {
  space: {
    px: "1px",
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    32: "8rem",
    40: "10rem",
    48: "12rem",
    56: "14rem",
    64: "16rem",
  },
  sizes: {
    max: "max-content",
    min: "min-content",
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    container: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
};
const buttonVariants = {
  primary: {
    bg: "primary.500",
    color: "#0a0f2c",
    _hover: { bg: "primary.400" },
    _active: { bg: "primary.600" },
    fontWeight: "semibold",
    borderRadius: "lg",
    transition: "all 0.2s",
  },
  secondary: {
    bg: "transparent",
    color: "primary.500",
    border: "2px solid",
    borderColor: "primary.500",
    _hover: { bg: "rgba(205,168,79,0.1)" },
    _active: { bg: "rgba(205,168,79,0.2)" },
    fontWeight: "semibold",
    borderRadius: "lg",
    transition: "all 0.2s",
  },
  accent: {
    bg: "accent.500",
    color: "#F5F3EE",
    _hover: { bg: "accent.600" },
    _active: { bg: "accent.700" },
    fontWeight: "semibold",
    borderRadius: "lg",
    transition: "all 0.2s",
  },
  outline: {
    bg: "transparent",
    color: "#F5F3EE",
    border: "1px solid",
    borderColor: "rgba(245,243,238,0.2)",
    _hover: { borderColor: "primary.500", color: "primary.500" },
    _active: { bg: "rgba(205,168,79,0.1)" },
    fontWeight: "medium",
    borderRadius: "lg",
    transition: "all 0.2s",
  },
  ghost: {
    bg: "transparent",
    color: "primary.500",
    _hover: { bg: "rgba(205,168,79,0.1)" },
    _active: { bg: "rgba(205,168,79,0.15)" },
    fontWeight: "medium",
    borderRadius: "lg",
    transition: "all 0.2s",
  },
  link: {
    bg: "transparent",
    color: "primary.500",
    _hover: { textDecoration: "underline" },
    fontWeight: "medium",
    padding: 0,
  },
  gold: {
    bg: "transparent",
    color: "primary.500",
    border: "1px solid",
    borderColor: "primary.500",
    borderRadius: "md",
    fontWeight: "500",
    letterSpacing: "0.04em",
    transition: "all 0.2s",
    _hover: {
      bg: "primary.500",
      color: "accent.800",
      transform: "translateY(-2px)",
      boxShadow: "0 8px 30px rgba(205,168,79,0.25)",
    },
  }
};
const FontVariants = {
  heading: {
    fontFamily: typography.fonts.heading,
    fontWeight: "black",
    fontSize: "3xl",
    color: "#F5F3EE",
  },
  subheading: {
    fontFamily: typography.fonts.heading,
    fontWeight: "semibold",
    color: "#F5F3EE",
  },
  body: {
    fontFamily: typography.fonts.body,
    fontWeight: "normal",
    color: "rgba(245,243,238,0.82)",
  },
  caption: {
    fontFamily: typography.fonts.body,
    fontWeight: "normal",
    fontSize: "sm",
    color: "rgba(245,243,238,0.55)",
  },
};
const wrapValues = (obj) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[key] = { value };
    return acc;
  }, {});
};
const theme = defineConfig({
  direction: "rtl",
  theme: {
    tokens: {
      colors: {
        primary: wrapValues(activeScheme.primary),
        accent: wrapValues(activeScheme.accent),
        heading: {
          500: { value: "#F5F3EE" },
        },
        paragraph: {
          300: { value: "rgba(245,243,238,0.35)" },
          400: { value: "rgba(245,243,238,0.55)" },
          500: { value: "rgba(245,243,238,0.82)" },
        },
      },
      ...typography,
      ...spacing,
      breakpoints: {
        base: "0px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      shadows: {
        xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)",
        none: "none",
      },
      radii: {
        none: "0",
        sm: "0.125rem",
        base: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
      components: {
        Button: {
          baseStyle: {
            fontWeight: "semibold",
            borderRadius: "lg",
          },
          variants: {
            primary: buttonVariants.primary,
            secondary: buttonVariants.secondary,
            accent: buttonVariants.accent,
            outline: buttonVariants.outline,
            ghost: buttonVariants.ghost,
            link: buttonVariants.link,
          },
          defaultProps: {
            variant: "primary",
          },
        },
      },
      styles: {
        global: {
          body: {
            bg: "#0a0f2c",
            color: "rgba(245,243,238,0.82)",
            fontFamily: typography.fonts.body,
          },
          "*::placeholder": {
            color: "rgba(245,243,238,0.35)",
          },
          "*, *::before, *::after": {
            borderColor: "rgba(245,243,238,0.1)",
          },
        },
      },
    },
  },
});
const system = createSystem(defaultConfig, theme);
export default theme;
export { system };
export {
  colorSchemes,
  typography,
  buttonVariants,
  FontVariants,
};
