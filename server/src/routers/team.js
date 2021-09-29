const express = require('express')
const User = require('../models/user')
const Team = require('../models/team')
const { userAuthentication, teamOwnerAuthentication } = require('../middleware/authentication')
const router = new express.Router()

router.post('/team/create-team', userAuthentication, async (request, response) => {
    const team = new Team(request.body)
    try {
        if (!team) {
            response.status(400).send()
        }
        team.owner = request.user._id
        await team.save()
        response.status(201).send({idTeam: team._id})
    } catch (error) {
        response.status(400).send(error)
    }

    response.send()
})

router.post('/team/add-team-members', userAuthentication, teamOwnerAuthentication, async (request, response) => {
    try {
        const team = request.team
        let newMemberArray = request.body.newTeamMembers.map(member => member.idUser)
        newMemberArray = newMemberArray.filter((newMember) => {
            return !team.members.some((teamMember) => {
                return teamMember.idUser.toString() === newMember.toString()
            })
        })
        let newMembers = await User.find({'_id': {$in: newMemberArray}}, {_id: 1})
        newMembers = newMembers.map((user) => {
            return {idUser: user._id}
        })
        team.members = team.members.concat(newMembers)
        await team.save()
        response.send()
    } catch (error) {
        response.status(400).send(error)
    }
})

router.post('/team/get-team-members', userAuthentication, teamOwnerAuthentication, async (request, response) => {
    try {
        const team = request.team
        const usersIdArray = team.members.map(member => member.idUser)
        let users = await User.find({'_id': {$in: usersIdArray}}, {userName: 1})
        users = users.map(user => {
            return {idUser: user._id, userName: user.userName}
        })
        response.send(users)
    } catch (error) {
        response.status(400).send(error)
    }
})

router.delete('/team/delete-team-members', userAuthentication, teamOwnerAuthentication, async (request, response) => {
    try {
        const team = request.team
        const deleteMemberIdArray = request.body.membersToDelete.map(member => member.idUser)
        let membersToDelete = await User.find({'_id': {$in: deleteMemberIdArray}}, {_id: 1})
        membersToDelete = membersToDelete.map((user) => {
            return {idUser: user._id}
        })
        team.members = team.members.filter((member) => {
            return !membersToDelete.some((memberToDelete) => {
                return memberToDelete.idUser.toString() === member.idUser.toString() // Cannot directly compare String and ObjectId. This type difference should be eliminated in the future.
            })
        })
        await team.save()
        response.send()
    } catch (error) {
        response.status(400).send(error)
    }
})

module.exports = router
