import mongoose from "mongoose";
import Joi from "joi";

const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
}, {
    timestamps: true
});

const userValidationSchema = Joi.object({
    username: Joi.string().alphanum().disallow(" ").required().min(3).max(16),
    password: Joi.string().alphanum().required().min(8).max(16)
});

const User = model("User", userSchema);
export { User, userValidationSchema };