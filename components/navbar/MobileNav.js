import { Stack, useColorModeValue } from "@chakra-ui/react";
import MobileNavItem from "@components/navbar/MobileNavItem";

const MobileNav = ({ navItems }) => {
  return (
    <Stack className="bg-navbar" p={4} display={{ md: "none" }}>
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

export default MobileNav;
