import React, { useRef } from 'react'
import { Box, Grid, Center, Divider, Image, Tooltip } from '@chakra-ui/react'
import arrow from '../../../assets/img/meeting/箭头.png'
import rubber from '../../../assets/img/meeting/橡皮.png'
import code from '../../../assets/img/meeting/编辑代码.png'
import letter from '../../../assets/img/meeting/文字.png'
import { CgFileDocument } from 'react-icons/cg'
import { BsCloudUpload } from 'react-icons/bs'
import { RiFileAddLine } from 'react-icons/ri'
import { HiOutlinePencil } from 'react-icons/hi'
import { BsTriangle } from 'react-icons/bs'
import OSS from 'ali-oss'
import API_URL from '../../../assets/config-api/api-url'
// const OSS = require('ali-oss')

const client = new OSS({
    // yourregion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
    region: 'oss-cn-beijing',
    // 阿里云账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM用户进行API访问或日常运维，请登录RAM控制台创建RAM用户。
    accessKeyId: 'LTAI5tC4Lu92vhctJnP7kcfs',
    accessKeySecret: '2PyeYoavGJa6pbS9Bhdi47c248G3oY',
    // 填写Bucket名称。
    bucket: 'richmedia-bucket'
})

const dummyToekn =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTBhODNiYjdlNDg0NDAwMTU4YzQxNTgiLCJpYXQiOjE2Mjg1ODM3MzF9.NqDJt_QH27Wd9yIbHjXt7qEpo440X9Fyq1U95_U9XQY'

const ALIBABA_PUBLIC_ROOT_URL =
    'https://richmedia-bucket.oss-cn-beijing.aliyuncs.com/'

const ToolBar = (props) => {
    const fileInputRef = useRef()

    // which is to send to the back-end
    const getImageUrl = async(fileName) => {
        console.log(localStorage.getItem('token'))
        console.log(ALIBABA_PUBLIC_ROOT_URL + 'exampledir/' + fileName)
        const response = await fetch(API_URL.getImageUrl, {
            method: 'POST',
            body: JSON.stringify({
                docUrl: ALIBABA_PUBLIC_ROOT_URL + 'exampledir/' + fileName // public url of doc
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.token
            }
        })

        if( !response.ok ) console.log(response)
        else {
            console.log('uploaded public url sent to server')
            const data = await response.json()

            props.fileImageDisplay(data)
        }
    }

    const selectFileHandler = async() => {
        console.log('upload')
        document.getElementById('userFileInput').click()
    }

    const fileUploadHandler = async() => {
        // fileInputRef.current
        const data = document.getElementById('userFileInput').files[0]
        try {
            // 填写Object完整路径。Object完整路径中不能包含Bucket名称。
            // 您可以通过自定义文件名（例如exampleobject.txt）或文件完整路径（例如exampledir/exampleobject.txt）的形式实现将数据上传到当前Bucket或Bucket中的指定目录。
            // data对象可以自定义为file对象、Blob数据或者OSS Buffer。
            const result = await client.put('exampledir/' + data.name, data)
            console.log(result)
            await getImageUrl(data.name)
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <>
            <input
                type="file"
                id="userFileInput"
                style={{ display: 'none' }}
                ref={fileInputRef}
            />
            <Box
                w="58px"
                bg="ghostwhite"
                borderWidth="2px"
                borderRadius="lg"
                position="fixed"
                ml="1%"
                zIndex="99999999999"
                marginTop="13%"
            >
                <Center>
                    <Grid gap={3}>
                        <Tooltip label="Selection tool" placement="right">
                            <Box
                                as="button"
                                w="56%"
                                h="56%"
                                marginLeft="22%"
                                marginTop="60%"
                                onClick={() => props.onChooseTool('selector')}
                                // _hover={{
                                //     width:"68%",
                                //     height:"68%",
                                //     marginLeft:"15%"
                                // }}
                            >
                                <Image src={arrow}/>
                            </Box>
                        </Tooltip>
                        <Divider marginLeft="10px" width="34px"/>
                        <Tooltip label="Pen" placement="right">
                            <Box
                                as="button"
                                marginLeft="26%"
                                onClick={() => props.onChooseTool('pencil')}
                            ><HiOutlinePencil fontSize={'25'}/>
                            </Box>
                        </Tooltip>
                        <Divider marginLeft="10px" width="34px"/>
                        <Tooltip label="geometry " placement="right">
                            <Box
                                as="button"
                                marginLeft="26%"
                                onClick={() => props.onChooseTool('geometry')}
                            >
                                <BsTriangle fontSize={'25'} _hover={{
                                    fontSize: '30',
                                    marginLeft: "15%"
                                }}
                                />
                            </Box>
                        </Tooltip>
                        <Divider marginLeft="10px" width="34px"/>
                        {/* <Tooltip label='Color' placement='right'>
							<Box
								as='button'
								w='52%'
								h='52%'
								marginLeft='24%'
								_hover={{
									bg: '#ebedf0',
									borderRadius: 'lg',
									w: '66%',
									h: '66%',
									marginLeft: '17%',
								}}
							>
								<VscSymbolColor fontSize={'25'} />
							</Box>
						</Tooltip>
						<Divider marginLeft='10px' width='34px' /> */}
                        <Tooltip label="Rubber" placement="right">
                            <Box
                                as="button"
                                w="52%"
                                h="52%"
                                marginLeft="24%"
                                onClick={() => props.onChooseTool('eraser')}
                                // _hover={{
                                //     width:"65%",
                                //     height:"65%",
                                //     marginLeft:"15%"
                                // }}
                            >
                                <Image src={rubber}/>
                            </Box>
                        </Tooltip>
                        <Divider marginLeft="10px" width="34px"/>
                        <Tooltip label="Edit the text" placement="right">
                            <Box
                                as="button"
                                w="35%"
                                h="35%"
                                marginLeft="30%"
                                onClick={() => props.onChooseTool('text')}
                                // _hover={{
                                //     width:"50%",
                                //     height:"50%",
                                //     marginLeft:"21%"
                                // }}
                            >
                                <Image src={letter}/>
                            </Box>
                        </Tooltip>
                        <Divider marginLeft="10px" width="34px"/>
                        <Tooltip label="Rich Text Editor" placement="right">
                            <Box
                                as="button"
                                w="48%"
                                h="48%"
                                marginLeft="26%"
                                onClick={() => {
                                    window.open(
                                        './richtext.html',
                                        'code',
                                        'width=800, height=600, titlebar=no, menubar=no, toolbar=no, location=yes'
                                    )
                                }}
                                // _hover={{
                                //     bg: '#ebedf0',
                                //     borderRadius: 'lg'
                                // }}
                            >
                                <CgFileDocument fontSize={'25'}/>
                            </Box>
                        </Tooltip>
                        <Divider marginLeft="10px" width="34px"/>
                        <Tooltip label="Code editor" placement="right">
                            <Box
                                as="button"
                                w="52%"
                                h="52%"
                                marginLeft="24%"
                                // _hover={{
                                //     bg: '#ebedf0',
                                //     borderRadius: 'lg'
                                // }}
                            >
                                <Image
                                    src={code}
                                    onClick={() => {
                                        window.open(
                                            './code.html',
                                            'code',
                                            'width=800, height=600, titlebar=no, menubar=no, toolbar=no, location=yes'
                                        )
                                    }}
                                />
                            </Box>
                        </Tooltip>
                        <Divider marginLeft="10px" width="34px"/>
                        <Tooltip label="Select a file" placement="right">
                            <Box
                                as="button"
                                onClick={selectFileHandler}
                                marginLeft="26%"
                                // _hover={{
                                //     bg: '#ebedf0',
                                //     borderRadius: 'lg'
                                // }}
                            >
                                <RiFileAddLine fontSize={'25'}/>
                            </Box>
                        </Tooltip>
                        <Divider marginLeft="10px" width="34px"/>
                        <Tooltip label="Upload Confirm" placement="right">
                            <Box
                                onClick={fileUploadHandler}
                                as="button"
                                marginLeft="26%"
                                marginBottom="60%"
                                // _hover={{
                                //     bg: '#ebedf0',
                                //     borderRadius: 'lg'
                                // }}
                            >
                                <BsCloudUpload fontSize={'25'}/>
                                {/*<Image src={exit}/>*/}
                            </Box>
                        </Tooltip>
                    </Grid>
                </Center>
            </Box>
        </>
    )
}
export default ToolBar
