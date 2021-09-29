import { Text } from '@chakra-ui/layout'
import * as React from 'react'

export const Copyright = (props) => (
    <Text fontSize="sm" {...props}>
        &copy; {new Date().getFullYear()} LucyRiver's Ice Tea, Inc. All rights reserved.
    </Text>
)
