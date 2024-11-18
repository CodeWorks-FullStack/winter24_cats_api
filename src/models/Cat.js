import { Schema } from "mongoose";

// NOTE this creates a schema that we can use to validate data going into a collection in our database
export const CatSchema = new Schema({
  // NOTE if we are adding a cat object to our database, the cat's color property muse be a string, can be no longer than 100 characters, and it must be present in the object (not undefined)
  color: { type: String, maxLength: 100, required: true },
  name: { type: String, maxLength: 25, required: true },
  age: { type: Number, max: 21, min: 0, required: true },
  size: { type: String, maxLength: 50, required: true },
  likesCheese: { type: Boolean, required: true }
})