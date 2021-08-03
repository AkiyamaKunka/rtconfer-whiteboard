import {
    Box,
    Flex,
    Button,
    Stack,
    Link,
    useColorModeValue

} from '@chakra-ui/react'

import React from 'react'
import { Link as ReactLink } from 'react-router-dom'

function WithSubnavigation () {
    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{base: 2}}
                px={{base: 4}}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>

                <Stack
                    flex={{base: 1, md: 0}}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <Link as={ReactLink} to="/welcome" style={{textDecoration: 'none'}}>
                        <Button
                            as={'a'}
                            fontSize={'sm'}
                            fontWeight={400}
                        >
                            Main Page
                        </Button>
                    </Link>
                    <Link as={ReactLink} to="/sign-up" style={{textDecoration: 'none'}}>
                        <Button
                            display={{base: 'none', md: 'inline-flex'}}
                            fontSize={'sm'}
                            fontWeight={600}
                            color={'white'}
                            bg={'blue.500'}
                            _hover={{
                                bg: 'blue.300'
                            }}>
                            Sign Up
                        </Button>
                    </Link>
                </Stack>
            </Flex>

        </Box>
    )
}

export default WithSubnavigation
