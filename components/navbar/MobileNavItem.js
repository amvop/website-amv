import {
  Flex,
  Text,
  Stack,
  Link as ChakraLink,
  Icon,
  Collapse,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { ChevronDownIcon } from "@chakra-ui/icons";

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Link href={href ?? "/"} passHref>
        <Flex
          py={2}
          as={Text}
          justify={"space-between"}
          align={"center"}
          textDecoration={"none"}
        >
          <Text fontWeight={600} color={"gray.200"}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={"all .25s ease-in-out"}
              transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
            />
          )}
        </Flex>
      </Link>
      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={"secondary.700"}
          color={"white"}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link href={child.href ?? "/"} key={child.label}>
                <Text className="cursor-pointer" py={2}>
                  {child.label}
                </Text>
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default MobileNavItem;
