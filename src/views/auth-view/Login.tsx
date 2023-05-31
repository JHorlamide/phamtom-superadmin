import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputRightElement,
  InputGroup,
} from '@chakra-ui/react';
import { useLogin } from '../../hooks/useLogin';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function SimpleCard() {
  const {
    errors,
    show,
    isValid,
    isLoading,
    handleShowPassword,
    handleSubmit,
    onSubmit,
    register,
  } = useLogin();

  return (
    <Flex
      width={"full"}
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to admin account</Heading>
        </Stack>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>

                <Stack>
                  <Input type="email" {...register("email")} />
                  {errors.email && <Text color="red.500">Email is required</Text>}
                </Stack>
              </FormControl>

              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Stack width="full">
                    <Input width="full" type={show ? "text" : "password"} {...register("password")} />
                    {errors.password && <Text color="red.500">Password is required</Text>}
                  </Stack>

                  <InputRightElement _hover={{ cursor: "pointer" }}>
                    {show ? (
                      <AiOutlineEye
                        color="back"
                        onClick={handleShowPassword}
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        color="back"
                        onClick={handleShowPassword}
                      />
                    )}
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Stack spacing={10}>
                <Button
                  type="submit"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  isDisabled={!isValid}
                  isLoading={isLoading}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Flex>
  );
}