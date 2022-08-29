import {
  Box,
  Flex,
  Text,
  Stack,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Link from "next/link";

const DesktopNavItem = ({ label, href, subLabel }) => {
  return (
    <Link href={href ?? "/"}>
      <Text
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        className={"hover:bg-primary-50 hover:opacity-90"}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              color={"primary.500"}
              _groupHover={{ color: "primary.500" }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize={"sm"} _groupHover={{ color: "gray.900" }}>
              {subLabel}
            </Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"primary.500"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Text>
    </Link>
  );
};

export default DesktopNavItem;
