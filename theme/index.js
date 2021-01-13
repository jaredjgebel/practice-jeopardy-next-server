import Button from "../theme/button";
import { extendTheme } from "@chakra-ui/react";

const overrides = {
  colors: {
    dukeBlue: "#050b9d",
  },
  fonts: {
    heading: "Franklin Gothic Medium",
    body: "Franklin Gothic Medium",
  },
  components: {
    Button,
  },
};

export default extendTheme(overrides);
