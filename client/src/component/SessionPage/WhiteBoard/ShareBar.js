import React from 'react'
import { Box, Stack, Center, Divider, Image, Avatar, Text, VStack, Tooltip } from '@chakra-ui/react'
import video from '../../../assets/img/meeting/视频.png'

const ShareBar = (props) => {
    return (
        <>
            <Box bg="ghostwhite" borderWidth="2px" borderRadius="lg" position="fixed" marginTop="1%" marginLeft="88%"
                 paddingLeft="1%"
                 paddingRight="1%"
                 paddingTop="0.3%"
                 height="58px" zIndex="9999999">
                <Stack spacing={3} direction="row" align="center">

                    <Tooltip label="Video Display -" placement="left">
                        <Box as="button" w="28px" h="28px" _hover={{
                            bg: '#ebedf0',
                            borderRadius: 'lg'
                        }}>
                            <Image src={video} onClick={props.openVideo}/>
                        </Box>
                    </Tooltip>
                    {/*<Center height="35px">*/}
                    {/*    <Divider orientation="vertical"/>*/}
                    {/*</Center>*/}
                    {/*<Button bg="#2980b9" size="sm" color="white" _hover={{*/}
                    {/*    bg: '#3498db'*/}
                    {/*}}>Share</Button>*/}
                    <Center height="35px">
                        <Divider orientation="vertical"/>
                    </Center>
                    <Avatar size={'sm'}/>
                    <VStack
                        display={{ base: 'none', md: 'flex' }}
                        alignItems="flex-start"
                        spacing="1px"
                        ml="2">
                        <Text fontSize="sm">{localStorage.userName}</Text>
                        <Text fontSize="xs" color="gray.600">
                            user
                        </Text>
                    </VStack>
                </Stack>
            </Box>
        </>
    )
}
export default ShareBar
