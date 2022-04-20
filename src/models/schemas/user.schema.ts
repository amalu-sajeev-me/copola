import mongoose from "mongoose";
import Joi from "joi";

const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        validate: {
            validator: (v: string) => Joi.string().alphanum().required().validate(v),
            message: ""
        }
    },
    password: {
        type: String,
        required: true,
        lowercase: true,
        validate: {
            validator: (v: string) => Joi.string().alphanum().required().validate(v),
            message: ""
        }
    },
}, {
    timestamps: true
});

const User = model("User", userSchema);

export { User };