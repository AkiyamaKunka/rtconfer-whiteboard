import {
    Flex,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    useDisclosure,
    useMergeRefs
} from '@chakra-ui/react'
import * as React from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'

export const PasswordField = React.forwardRef((props, ref) => {
    const { isOpen, onToggle } = useDisclosure()
    const inputRef = React.useRef(null)
    const mergeRef = useMergeRefs(inputRef, ref)

    const onClickReveal = () => {
        onToggle()
        const input = inputRef.current

        if( input ) {
            input.focus({
                preventScroll: true
            })
            const length = input.value.length * 2
            requestAnimationFrame(() => {
                input.setSelectionRange(length, length)
            })
        }
    }

    return (
        <FormControl id="password">
            <Flex justify="space-between">
                <FormLabel>Password</FormLabel>
            </Flex>
            <InputGroup>
                <InputRightElement>
                    <IconButton
                        bg="transparent !important"
                        variant="ghost"
                        aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                        icon={isOpen ? <HiEyeOff/> : <HiEye/>}
                        onClick={onClickReveal}
                    />
                </InputRightElement>
                <Input
                    ref={props.passwordRef}
                    name="password"
                    type={isOpen ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    {...props}
                />
            </InputGroup>
        </FormControl>
    )
})
PasswordField.displayName = 'PasswordField'
