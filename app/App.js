import { QuestionController } from "./controllers/QuestionController.js"
import { Question } from "./models/QuestionModel.js"



class App {
  questionController = new QuestionController()
}

window['app'] = new App()


