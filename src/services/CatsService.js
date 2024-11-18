import { dbContext } from "../db/DbContext.js"

class CatsService {
  async getCatById(catId) {
    const cat = await dbContext.Cats.findById(catId)

    if (cat == null) {
      throw new Error(`Invalid id: ${catId}`)
    }

    return cat
  }
  async createCat(catData) {
    const cat = await dbContext.Cats.create(catData)
    return cat
  }
  async getAllCats() {
    // NOTE this is the mongoose find, not the javascript array method
    // NOTE find will return everything from a collection if no argument is passed to it
    const cats = await dbContext.Cats.find()
    return cats
  }
}

export const catsService = new CatsService()