import {
  Flex,
  Icon,
  FlexProps,
} from '@chakra-ui/react';
import { Link, useLocation } from "react-router-dom";
import { IconType } from 'react-icons';

interface NavItemProps extends FlexProps {
  icon: IconType;
  path: string;
  name: string;
}

const NavItem = ({ icon, path, name, }: NavItemProps) => {
  const location = useLocation();

  const selectedNavItemStyle = (path: string) => {
    if (location.pathname === path) {
      return {
        bg: "brand.200",
        borderRightColor: "brand.50",
        cursor: "pointer",
      };
    }

    return null;
  };


  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        p="3"
        mx="3"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        {...selectedNavItemStyle(path)}
      >
        <Icon mr="4" fontSize="16" _groupHover={{ color: 'white' }} as={icon} />
        {name}
      </Flex>
    </Link>
  );
};


export default NavItem