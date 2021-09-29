import {
	Box,
	Center,
	Heading,
	Text,
	Stack,
	Image,
	Button,
	HStack,
	Flex,
} from '@chakra-ui/react'
import ModifyTeam from './ModifyTeam'
import DUMMY_DATA from '../../../assets/dummy-data/DUMMY_DATA'
import Detail from './Detail'

const IMAGE =
	'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'

const TeamCard = () => {
	return (
		<Box py={6} style={{ display: 'inline-block', margin: '10px' }}>
			<Box
				role={'group'}
				p={6}
				maxW={'270px'}
				w={'full'}
				//bg={useColorModeValue('white', 'gray.800')}
				boxShadow={'2xl'}
				rounded={'md'}
				pos={'relative'}
				zIndex={1}
			>
				<Box
					rounded={'lg'}
					mt={-12}
					pos={'relative'}
					height={'230px'}
					_after={{
						transition: 'all .3s ease',
						content: '""',
						w: 'full',
						h: 'full',
						pos: 'absolute',
						top: 5,
						left: 0,
						backgroundImage: `url(${IMAGE})`,
						filter: 'blur(15px)',
						zIndex: -1,
					}}
					_groupHover={{
						_after: {
							filter: 'blur(20px)',
						},
					}}
				>
					<Image
						rounded={'lg'}
						height={230}
						width={282}
						objectFit={'cover'}
						src={IMAGE}
					/>
				</Box>
				<Stack pt={10} align={'center'}>
					
						<Text
							color={'gray.500'}
							fontSize={'sm'}
							textTransform={'uppercase'}
						>
							
						</Text>
					
				
					<Heading
						fontSize={'2xl'}
						fontFamily={'body'}
						fontWeight={500}
					>
						
					</Heading>
					<Stack
						mt={8}
						direction={'row'}
						align={'center'}
						spacing={4}
					>
						{/* <Text fontWeight={800} fontSize={'xl'}>
                $57
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                $199
              </Text> */}

						{/* <Detail idTeam={props.idTeam}></Detail> */}
						{/* <ModifyTeam></ModifyTeam> */}
					</Stack>
				</Stack>
			</Box>
		</Box>
	)
}

export default TeamCard
