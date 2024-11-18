import { catsService } from "../services/CatsService.js";
import BaseController from "../utils/BaseController.js";

export class CatsController extends BaseController {
  constructor() {
    super('api/cats')
    this.router
      .get('', this.getAllCats)
      .get('/:catId', this.getCatById)
      .post('', this.createCat)
  }


  async getAllCats(request, response, next) {
    try {
      const cats = await catsService.getAllCats()
      response.send(cats)
    } catch (error) {
      next(error)
    }
  }

  async createCat(request, response, next) {
    try {
      const catData = request.body
      const cat = await catsService.createCat(catData)
      response.send(cat)
    } catch (error) {
      next(error)
    }
  }

  async getCatById(request, response, next) {
    try {
      const catId = request.params.catId
      const cat = await catsService.getCatById(catId)
      response.send(cat)
    } catch (error) {
      next(error)
    }
  }
}