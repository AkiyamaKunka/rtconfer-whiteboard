import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Link,
    Text,
    BoxProps,
    FlexProps,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Stack,
    FormLabel,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    Select,
    Textarea,
    useDisclosure,
    Button,
} from "@chakra-ui/react"
import React from 'react'

import{
    AddIcon,
} from '@chakra-ui/icons'

const CreateTeamDrawer = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const firstField = React.useRef()
    return (
        <>
            <Button onClick={onOpen}
                    variant="outline"
                    colorScheme="gray.700"
                    w={'180px'}
                    mr={4}
                    fontSize={'md'}
                    ml
                    bg={useColorModeValue('white', 'gray.700')}
                    color={'gray.700'}
                    rounded={'md'}
                    leftIcon={ <AddIcon/> }
                    _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                        color: 'white',
                        bg: 'blue.400',
                    }}
            >
                New Team
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="right"
                initialFocusRef={firstField}
                onClose={onClose}
            >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader borderBottomWidth="1px" color={'white'} fontWeight="350">
                        Create New Session
                    </DrawerHeader>

                    <DrawerBody>
                        <Stack spacing="24px">
                            <Box>
                                <FormLabel htmlFor="username">Name</FormLabel>
                                <Input
                                    ref={firstField}
                                    id="username"
                                    placeholder="Please enter user name"
                                />
                            </Box>

                            <Box>
                                <FormLabel htmlFor="url">Url</FormLabel>
                                <InputGroup>
                                    <InputLeftAddon>http://</InputLeftAddon>
                                    <Input
                                        type="url"
                                        id="url"
                                        placeholder="Please enter domain"
                                    />
                                    <InputRightAddon>.com</InputRightAddon>
                                </InputGroup>
                            </Box>

                            <Box>
                                <FormLabel htmlFor="owner">Select Owner</FormLabel>
                                <Select id="owner" defaultValue="segun">
                                    <option value="segun">Segun Adebayo</option>
                                    <option value="kola">Kola Tioluwani</option>
                                </Select>
                            </Box>

                            <Box>
                                <FormLabel htmlFor="desc">Description</FormLabel>
                                <Textarea id="desc"/>
                            </Box>
                        </Stack>
                    </DrawerBody>
                    <DrawerFooter borderTopWidth="1px">
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme="blue">Submit</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
export default CreateTeamDrawer