import { ReactNode, Suspense } from 'react';
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react';
import SidebarContent from '../../SidebarContent/SidebarContent';
import MobileNav from '../../MobileNav/MobileNav';
import AppLoader from '../../AppLoader/AppLoader';

interface Props {
  children: ReactNode;
}

const SidebarWithHeader = ({ children }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />

      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <MobileNav onOpen={onOpen} />
      <Suspense fallback={<AppLoader />}>
        <Box ml={{ base: 0, md: 60 }} p="4">
          {children}
        </Box>
      </Suspense>
    </Box>
  );
}

export default SidebarWithHeader;
