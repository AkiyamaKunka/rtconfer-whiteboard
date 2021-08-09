import { Box, Link, SimpleGrid, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { FooterHeading } from './FooterHeading'

export const LinkGrid = (props) => (

    <SimpleGrid columns={2} {...props}>
        <Box minW="130px">
            <FooterHeading mb="4">Product</FooterHeading>
            <Stack>
                <Link to={'./product_feature'}>Product features</Link>
                <Link>Usage scenarios</Link>
                <Link>Method of use</Link>
            </Stack>
        </Box>
        <Box minW="130px">
            <FooterHeading mb="4">Legal</FooterHeading>
            <Stack>
                <Link>User agreement</Link>
                <Link>Privacy statement</Link>
            </Stack>
        </Box>
    </SimpleGrid>
)
