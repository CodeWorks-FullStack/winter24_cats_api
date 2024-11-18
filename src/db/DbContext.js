import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { CatSchema } from '../models/Cat.js'

// this is similar to the AppState
// NOTE we use DbContext to register new collections in whichever database we accessing
class DbContext {
  // NOTE Cats is the name of the collection in our database that we reference in our code
  // NOTE 'Cat' is the name mongodb will register with this collection
  // NOTE CatSchema will validate all data before adding it to our database
  Cats = mongoose.model('Cat', CatSchema)
}

// NOTE we use this variable to interact with our database
export const dbContext = new DbContext()
