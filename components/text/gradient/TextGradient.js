import { Text, Heading } from "@chakra-ui/react";

const TextGradient = ({ children }) => {
  return (
    <Heading
      as="h1"
      mb={6}
      fontSize={{
        base: "5xl",
        md: "6xl",
      }}
      className="font-display"
      fontWeight="bold"
      lineHeight="none"
      letterSpacing={{
        base: "normal",
        md: "tight",
      }}
      color="gray.500"
    >
      <Text
        display={{
          base: "block",
          lg: "inline",
        }}
        w="full"
        bgClip="text"
        bgGradient="linear(to-r, primary.500, secondary.700)"
        fontWeight="extrabold"
      >
        {children}
      </Text>
    </Heading>
  );
};

export default TextGradient;
