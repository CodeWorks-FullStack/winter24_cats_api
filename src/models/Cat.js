import { Schema } from "mongoose";

export const CatSchema = new Schema({
  color: { type: String, maxlength: 100 },
  name: { type: String, maxlength: 25 },
  age: { type: Number, max: 21, min: 0 },
  size: { type: String, maxlength: 50 },
  likesCheese: { type: Boolean }
})