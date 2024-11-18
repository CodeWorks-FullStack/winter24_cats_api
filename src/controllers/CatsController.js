import { catsService } from "../services/CatsService.js";
import BaseController from "../utils/BaseController.js";

export class CatsController extends BaseController {
  constructor() {
    super('api/cats')
    this.router.get('', this.getAllCats)
  }


  getAllCats(request, response, next) {
    catsService.getAllCats()
  }
}