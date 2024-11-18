import { catsService } from "../services/CatsService.js";
import BaseController from "../utils/BaseController.js";

// NOTE extends will inherit all members (methods, properties) from a parent class
// NOTE inheriting from BaseController allows us to utilize the express router and create endpoints in our api
export class CatsController extends BaseController {
  constructor() {
    // NOTE super calls the constructor on our inherited class (BaseController)
    super('api/cats') // mount path
    this.router
      .get('', this.getAllCats) // GET request to http://localhost:3000/api/cats
      .get('/:catId', this.getCatById) // GET request to http://localhost:3000/api/cats/abc123360
      .post('', this.createCat) // POST request to http://localhost:3000/api/cats
  }


  // NOTE the request object, response object, and next function will be passed to all controller methods (in that order) that are attached to an HTTP method on the router object
  // NOTE the request object has information about the request being made (headers, body, authorization, etc...)
  // NOTE the response object contains method that we can use to alter/send a response to the client.
  // NOTE the next function allows us to kick a request down the request pipeline
  async getAllCats(request, response, next) {
    try {
      // NOTE the cats variable is assigned to the returned value from the service 
      const cats = await catsService.getAllCats()
      // NOTE sends a 200 response to the client
      response.send(cats)
    } catch (error) {
      // NOTE passes this to our error handler
      next(error)
    }
  }

  async createCat(request, response, next) {
    try {
      // NOTE grabs the data that is being sent to us from the client (payload)
      const catData = request.body
      const cat = await catsService.createCat(catData)
      response.send(cat)
    } catch (error) {
      next(error)
    }
  }

  async getCatById(request, response, next) {
    try {
      // NOTE grabs the id out of our URL (whatever comes after api/cats/)
      const catId = request.params.catId
      const cat = await catsService.getCatById(catId)
      response.send(cat)
    } catch (error) {
      next(error)
    }
  }
}