import { Schema } from "mongoose";

export const CatSchema = new Schema({
  color: { type: String, maxlength: 100, required: true },
  name: { type: String, maxlength: 25, required: true },
  age: { type: Number, max: 21, min: 0, required: true },
  size: { type: String, maxlength: 50, required: true },
  likesCheese: { type: Boolean, required: true }
})