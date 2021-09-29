import { Box, Link, SimpleGrid, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { FooterHeading } from './FooterHeading'
import {Link as ReactLink} from 'react-router-dom'
export const LinkGrid = (props) => (

    <SimpleGrid columns={2} {...props}>
        <Box minW="130px">
            <FooterHeading mb="4">Product</FooterHeading>
            <Stack>
                <Link as={ReactLink} to={'/product_feature'}>Product features</Link>
                <Link as={ReactLink} to={'/method'}>Method of use</Link>
            </Stack>
        </Box>
        <Box minW="130px">
            <FooterHeading mb="4">Legal</FooterHeading>
            <Stack>
                <Link as={ReactLink} to={'/user_agreement'}>User agreement</Link>
                <Link as={ReactLink} to={'/privacy'}>Privacy statement</Link>
            </Stack>
        </Box>
    </SimpleGrid>
)
