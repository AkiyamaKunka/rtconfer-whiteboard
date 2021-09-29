import React, { useEffect } from 'react'
import classes from '../SessionMainPage.module.css'
import { DefaultHotKeys, WhiteWebSdk } from 'white-web-sdk'

import API_URL from '../../../assets/config-api/api-url'
import ToolBar from './ToolBar'
import ExitBar from './ExitBar'

const APP_IDENTIFIER = 'bH9ZEPQjEeuwx3vaUOtQJg/URgcjl3ApWuYmg'
const AK = 'SFNmX5Cq63OYGyOa'
const SK = 'hiqlc5eHXnODyVm-jDdF7FWxRevhpMD1'

let imageUuidCounter = 1

let whiteboardConfig = {
	room: null,
	uuid: null,
}

const WhiteBoardEvent = async () => {
	const response = await fetch(API_URL.getWhiteBoardTokenUrl, {
		method: 'POST',
		body: JSON.stringify({
			idSession: localStorage.getItem('idSession'),
		}),
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + localStorage.token,
		},
	})
	const data = await response.json()
	whiteboardConfig.uuid = data.uuid
	const userId = localStorage.getItem('idUser')
	const cursorName = localStorage.getItem('userName')
	//const cursorAdapter = new CursorTool()

	let joinRoomParams = {
		// 设置房间 UUID。
		uuid: data.uuid,
		// 设置 Room Token。
		roomToken: data.roomToken,
		//cursorAdapter: cursorAdapter,
		userPayload: {
			userId: userId,
			cursorName: cursorName,
			theme: 'mellow',
			cursorBackgroundColor: '#FDBA74',
			cursorTextColor: '#323233',
			cursorTagName: '讲师',
			cursorTagBackgroundColor: '#E5A869',
		},
		disableNewPencil: false,
		floatBar: true,
		hotKeys: {
			...DefaultHotKeys,
			changeToSelector: 's',
			changeToLaserPointer: 'z',
			changeToPencil: 'p',
			changeToRectangle: 'r',
			changeToEllipse: 'c',
			changeToEraser: 'e',
			changeToText: 't',
			changeToStraight: 'l',
			changeToArrow: 'a',
			changeToHand: 'h',
		},
	}

	let whiteWebSdk = new WhiteWebSdk({
		// 设置 App Identifier。
		appIdentifier: APP_IDENTIFIER,
		// 设置数据中心为中国杭州。
		region: 'cn-hz',
	})

	whiteboardConfig.room = whiteWebSdk.joinRoom(joinRoomParams, {
		onPhaseChanged: (phase) => {
			console.log(phase)
		},
		onRoomStateChanged: (newState) => {
			if (newState.memberState) {
				console.log(newState.memberState)
			}
		},
	})

	whiteboardConfig.room.then((room) => {
		room.bindHtmlElement(document.getElementById('whiteboard'))
		room.setMemberState({
			pencilOptions: {
				disableBezier: false,
				sparseHump: 1.0,
				sparseWidth: 1.0,
				enableDrawPoint: false,
			},
		})
	})
}

const WhiteBoardBody = () => {
	useEffect(async () => {
		await WhiteBoardEvent()
	}, [])

	const fileImageDisplayHandler = async (data) => {
		const roomObject = await whiteboardConfig.room
		await data.map(async (dataItem) => {
			const imageId = parseInt(Math.random() * (100000 - 1) + 1)
			await roomObject.insertImage({
				centerX: 0,
				centerY: 0,
				height: Number(dataItem.height),
				locked: false,
				uuid: imageId, // customized number
				width: Number(dataItem.width),
			})
			console.log('counter is ' + imageId)
			console.log(dataItem.conversionFileUrl)
			await roomObject.completeImageUpload(
				imageId,
				dataItem.conversionFileUrl
			)
		})
	}

	const chooseToolHandler = (tool) => {
		console.log('I choose ' + tool)
		console.log(whiteboardConfig.room)
		switch (tool) {
			case 'selector':
				whiteboardConfig.room.then((room) =>
					room.setMemberState({
						currentApplianceName: 'selector',
					})
				)
				break
			case 'pencil':
				whiteboardConfig.room.then((room) =>
					room.setMemberState({
						currentApplianceName: 'pencil',
					})
				)
				break
			case 'eraser':
				whiteboardConfig.room.then((room) =>
					room.setMemberState({
						currentApplianceName: 'eraser',
					})
				)
				break
			case 'text':
				whiteboardConfig.room.then((room) =>
					room.setMemberState({
						currentApplianceName: 'text',
					})
				)
				break
			case 'geometry':
				whiteboardConfig.room.then((room) => {
					room.setMemberState({
						currentApplianceName: 'shape',
					})
				})
				break
		}
	}

	return (
		<>
			<ToolBar
				onChooseTool={chooseToolHandler}
				fileImageDisplay={fileImageDisplayHandler}
			/>
			<div id='whiteboard' className={classes['white-board']}></div>
		</>
	)
}

export default WhiteBoardBody
