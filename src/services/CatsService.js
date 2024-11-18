import { dbContext } from "../db/DbContext.js"

class CatsService {
  async getCatById(catId) {
    // NOTE mongoose findById. Finds a document from our database by its _id field
    const cat = await dbContext.Cats.findById(catId)

    // NOTE if findById does not have a match with the id it is passed, it will return null
    if (cat == null) {
      // NOTE we throw an error that gets turned into a 400 bad request object by our error handler
      throw new Error(`Invalid id: ${catId}`)
    }

    return cat
  }
  async createCat(catData) {
    // NOTE mongoose create. Will add all data from object into a new document in our database if that object passes our schema validation
    // NOTE create returns a full document object with all extra properties that our database adds to the data (_id, timestamps, default properties, etc...)
    const cat = await dbContext.Cats.create(catData)
    return cat
  }
  async getAllCats() {
    // NOTE this is the mongoose find, not the javascript array method
    // NOTE find will return everything from a collection if no argument is passed to it (we'll talk more about that argument tomorrow)
    const cats = await dbContext.Cats.find()
    return cats
  }
}


// NOTE still using singleton
export const catsService = new CatsService()