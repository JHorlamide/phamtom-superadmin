import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  BoxProps,
  Image
} from '@chakra-ui/react';
import NavItem from '../NavItem/NavItem';
import navigationConfig from '../../config/NavigationConfig';
import PhamtomLogo from "../../assets/logo.svg"


interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          <Image src={PhamtomLogo} />
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>

      {navigationConfig.map(({ key, name, path, Icon }) => (
        <NavItem key={key} icon={Icon} path={path} name={name} />
      ))}
    </Box>
  );
};

export default SidebarContent;