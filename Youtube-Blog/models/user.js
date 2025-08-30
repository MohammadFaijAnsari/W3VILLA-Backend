const { Schema, Model, model } = require('mongoose');
const { createHmac, randomBytes } = require('crypto');
const { createtoken } = require('../services/authentication');
const userSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    salt: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    profileImageURL: {
        type: String,
        default: '/images/avtar.png'
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER"
    }
},
    { timestamps: true }
)
userSchema.pre('save', function (next) {
    const user = this;
     const salt = randomBytes(16).toString();
    if (!user.isModified('password')) return next();
    const hashPassword = createHmac('sha256', salt)
        .update(user.password)
        .digest('hex');
    this.salt = salt;
    this.password = hashPassword;
    next()

});

// userSchema match Password
userSchema.static('matchPasswordAndGenerateToken',async function (email, password) {
    const User = await this.findOne({ email });
    // console.log(User);
    if (!User) throw new Error('User Not Found');

    const salt = User.salt;
    const hashPassword = User.password;

    const hashProvidedHash = createHmac('sha256', salt)
        .update(password)
        .digest('hex')

    // Password not Match then Show Error
    if (hashPassword !== hashProvidedHash)
        throw new Error('Incorrect Password');

    const token=createtoken(User);
    return token;

    return { ...User, password: undefined, salt: undefined }


})
const User = model('user', userSchema);
module.exports = User;