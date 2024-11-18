import { dbContext } from "../db/DbContext.js"

class CatsService {
  createCat() {
    throw new Error("Method not implemented.")
  }
  async getAllCats() {
    // NOTE this is the mongoose find, not the javascript array method
    // NOTE find will return everything from a collection if no argument is passed to it
    const cats = await dbContext.Cats.find()
    return cats
  }
}

export const catsService = new CatsService()