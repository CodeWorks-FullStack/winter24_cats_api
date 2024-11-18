import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { CatSchema } from '../models/Cat.js'

// this is similar to the appstate
class DbContext {
  Cats = mongoose.model('Cat', CatSchema)
}

export const dbContext = new DbContext()
