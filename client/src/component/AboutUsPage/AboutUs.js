import * as React from 'react'
import TeamIntroction from './TeamIntroction'
import MainTechSupport from './MainTechSupport'
import OurBelief from './OurBelief'
import OurSuccess from './OurSuccess'
import TechIntroductionReact from './TechIntroductionReact'
import TechIntroductionNode from './TechIntroductionNode'
import TechIntroductionMongoDB from './TechIntroductionMongoDB'
import TechIntroductionSharedPen from './TechIntroductionSharedPen'
import TechIntroductionAgora from './TechIntroductionAgora'
import { ChakraFooter } from '../PrimaryPage/FooterWithTwoColumns/App'
import { ChakraProvider, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import NavBar from '../PrimaryPage/NavBar'

export const AboutUs = () => {
    return (
        <>
            <NavBar/>
            <TeamIntroction/>
            <OurBelief/>
            <OurSuccess/>
            <MainTechSupport/>
            <Tabs isFitted variant="enclosed">
                <TabList mb="0.1em">
                    <Tab _selected={{ bg: "#3182c5", color: "white" }}>React</Tab>
                    <Tab _selected={{ bg: "#3182c5", color: "white" }}>Node.js</Tab>
                    <Tab _selected={{ bg: "#3182c5", color: "white" }}>MongoDB</Tab>
                    <Tab _selected={{ bg: "#3182c5", color: "white" }}>SharedPen</Tab>
                    <Tab _selected={{ bg: "#3182c5", color: "white" }}>Agora</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel bg={"#282c34"}>
                        <TechIntroductionReact/>
                    </TabPanel>
                    <TabPanel bg={"#282c34"}>
                        <TechIntroductionNode/>
                    </TabPanel>
                    <TabPanel bg={"#282c34"}>
                        <TechIntroductionMongoDB/>
                    </TabPanel>
                    <TabPanel bg={"#282c34"}>
                        <TechIntroductionSharedPen/>
                    </TabPanel>
                    <TabPanel bg={"#282c34"}>
                        <TechIntroductionAgora/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <ChakraProvider>
                <ChakraFooter/>
            </ChakraProvider>
        </>
    )
}
export default AboutUs
