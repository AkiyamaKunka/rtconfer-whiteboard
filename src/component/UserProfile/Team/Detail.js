import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalContent,
  Button,
  Text,
  useDisclosure,
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,

} from '@chakra-ui/react' 

import { React, useRef } from 'react' 

function Detail(props) {
  const { isOpen, onOpen, onClose } = useDisclosure() 
  const finalRef = useRef() 


  return (
    <>
      <Button
        onClick={onOpen}
        flex={1}

        fontSize={'sm'}
        rounded={'full'}
        _focus={{
          bg: 'gray.200',
        }}
      >
        detail
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={'white'}>Members</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Table variant='striped' colorScheme='teal'>
              <TableCaption>These are all your team members.</TableCaption>

              <Thead>
                <Tr>
                  <Th>name</Th>
                  <Th>id</Th>
                </Tr>
              </Thead>

              <Tbody>
                {props.dummyUsers.map((person) => (
                  <Tr>
                    <Th>{person.userName}</Th>
                    <Th>{person.idUser}</Th>
                  </Tr>
                ))}
              </Tbody>

              <Tfoot>
                <Tr>
                  <Th>name</Th>
                  <Th>id</Th>
                </Tr>
              </Tfoot>
            </Table>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' variant="outline" onClick={onClose}>
              Close
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  ) 
}
export default Detail 

