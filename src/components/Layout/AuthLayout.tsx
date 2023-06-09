import { Box } from '@chakra-ui/react'
import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>{children}</Box>
  )
}

export default AuthLayout