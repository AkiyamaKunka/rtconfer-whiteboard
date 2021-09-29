import { Button } from '@chakra-ui/react'

const ModifyTeam = () => {
    return (
        <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
                bg: 'gray.200'
            }}
        >
            Modify
        </Button>
    )
}

export default ModifyTeam

