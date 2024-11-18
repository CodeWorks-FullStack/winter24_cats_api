import { catsService } from "../services/CatsService.js";
import BaseController from "../utils/BaseController.js";

export class CatsController extends BaseController {
  constructor() {
    super('api/cats')
    this.router.get('', this.getAllCats).post('', this.createCat)
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
      const cat = await catsService.createCat()
      response.send(cat)
    } catch (error) {
      next(error)
    }
  }
}