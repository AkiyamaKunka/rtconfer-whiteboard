const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Team = require('./team')
const Session = require('./session')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 7,
        maxLength: 200,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    userName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
}, {
    timestamps: true
})

userSchema.virtual('ownedTeams', {
    ref: Team,
    localField: '_id',
    foreignField: 'owner'
})

userSchema.virtual('ownedSessions', {
    ref: Session,
    localField: '_id',
    foreignField: 'owner'
})

// hide private info and rename fields before stringify
userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    userObject.idUser = userObject._id // rename _id to idUser
    delete userObject._id

    delete userObject.password
    delete userObject.tokens

    return userObject
}

userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({_id: user._id.toString()}, process.env.JWT_SECRET)

    // user.tokens = user.tokens.concat({ token }) // use this if need to store multiple tokens (for multiple divices)
    user.tokens = [].concat({ token })
    await user.save()

    return token
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({email})
    if (!user) {
        throw new Error('User does not exist')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        throw new Error('Username or password is wrong!')
    }
    return user
}

// hash the plain text password before saving
userSchema.pre('save', async function (next) {
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
