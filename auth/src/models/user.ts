import mongoose from "mongoose";
import { Password } from "../services/password";

interface UsersAttrs {
    email: string;
    password: string;
    signature?: string;
}

interface UsersModel extends mongoose.Model<UsersDoc> {
    build(attrs: UsersAttrs): UsersDoc;
}

interface UsersDoc extends mongoose.Document {
    email: string;
    password: string;
    signature?: string;
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    signature: {
        type: String,
        required: false
    }
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.password;
            delete ret.__v;
        }
    }
});

userSchema.pre('save', async function(done) {
    if (this.isModified('password')) {
        const hashed = await Password.toHash(this.get('password'));
        this.set('password', hashed);
    }
    done();
});

userSchema.statics.build = (attrs: UsersAttrs) => {
    return new User(attrs);
}

const User = mongoose.model<UsersDoc, UsersModel>('User', userSchema);

export { User };