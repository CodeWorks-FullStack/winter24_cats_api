import { catsService } from "../services/CatsService.js";
import BaseController from "../utils/BaseController.js";

export class CatsController extends BaseController {
  constructor() {
    super('api/cats')
    this.router.get('', this.getAllCats)
  }


  async getAllCats(request, response, next) {
    const cats = await catsService.getAllCats()
    response.send(cats)
  }
}