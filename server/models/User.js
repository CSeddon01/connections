const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

/* How do we add schema types of images? 
1) image
2) Cover photo
3) Resume 
*/

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        title: {
            type: String,
            required: false,
        },
        about: {
            type: String,
            required: false,
        },
        website: {
            type: String,
            required: false,
        },
        profilePic: { // here 
            type: String,
            required: false,
        },
        CoverPhoto: { // here 
            type: String,
            required: false,
        },
        resume: {
            type: string,
            required: false,
        },
        password: {
            type: String,
            required: true,
            minlength: 5
        },
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        // May need to update this
        messages: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Message'
            }
        ],
        connections: [ // connections is jobs
            {
                type: Schema.Types.ObjectId,
                ref: 'Jobpost'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

userSchema.virtual('connectionsCount').get(function () {
    return this.connections.length;
})

const User = model('User', userSchema);

module.exports = User;