import {
  Box,
  Stack,
  useColorModeValue,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import DesktopNavItem from "@components/navbar/DesktopNavItem";
import Link from "next/link";

const DesktopNav = ({ navItems }) => {
  const linkColor = "gray.200";
  const linkHoverColor = "white";
  const popoverContentBgColor = "gray.800";

  return (
    <Stack direction={"row"} spacing={4}>
      {navItems.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link href={navItem.href ?? "/"}>
                <Text
                  p={2}
                  fontSize={"sm"}
                  fontWeight={500}
                  color={linkColor}
                  textDecoration={"none"}
                  className={"hover:text-primary-400 cursor-pointer"}
                >
                  {navItem.label}
                </Text>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopNavItem key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

export default DesktopNav;
