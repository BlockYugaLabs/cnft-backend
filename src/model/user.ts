import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
    publicKey: {
        type: String,
        index: true
    },
});

const userModel = model('user', userSchema);

export default userModel;
