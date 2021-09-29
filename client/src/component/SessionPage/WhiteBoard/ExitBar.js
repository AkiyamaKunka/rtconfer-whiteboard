import React from 'react'
import { Box, Stack, Center, Divider, Image, Tooltip, Text} from "@chakra-ui/react"
import exit from '../../../assets/img/meeting/返回.png'

const ExitBar = (props) => {
    return (
        <>
            <Box bg="ghostwhite" borderWidth="2px" borderRadius="lg" position="fixed" marginTop="1%" marginLeft="1%"
                 paddingLeft="30px"
                 paddingRight="10px"
                 paddingTop="11px"
                 height="58px" zIndex="99999999">
                <Stack spacing={3} direction="row" align="center">
                    <Box w="110px">
                        <Text fontSize="lg" fontFamily="monospace" fontWeight="bold">
                            RTConfer
                        </Text>

                    </Box>
                    <Center height="35px">
                        <Divider orientation="vertical"/>
                    </Center>
                    <Tooltip label="Return to the user profile" placement="right">
                        <Box as="button"  w="28px" h="28px"  _hover={{
                            bg: "#ebedf0",
                            borderRadius: "lg"
                        }}>
                            <Image onClick={props.exitSession} src={exit} width="90%"/>
                        </Box>
                    </Tooltip>
                </Stack>
            </Box>
        </>
    )
}
export default ExitBar
