import { radioAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys);

export const radioTheme = defineMultiStyleConfig({
  defaultProps: {
    colorScheme: "yellow",
    size: "lg",
  },
});
