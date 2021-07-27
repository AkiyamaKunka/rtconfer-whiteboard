import { chakra, useColorModeValue } from '@chakra-ui/system'
import * as React from 'react'

export const Link = (props) => (
  <chakra.a
    marginStart="1"
    href="#"
    color={useColorModeValue('blue.500', 'blue.200')}
    _hover={{
      color: useColorModeValue('blue.600', 'blue.300'),
    }}
    display={{
      base: 'block',
      sm: 'inline',
    }}
    {...props}
  />
)
