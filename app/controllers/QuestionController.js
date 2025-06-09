import { AppState } from "../AppState.js";
import { questionService } from "../services/QuestionService.js";
import { Pop } from "../utils/Pop.js";




export class QuestionController {
  constructor() {
    console.log("Question Constructor is here!");
    this.getTenTriviaQuestions()
    AppState.on(`questions`, this.drawQuestions)
  }

  async getTenTriviaQuestions() {
    try {
      await questionService.getTenQuestionsForTrivia()
      Pop.success('Got the Questions!')
    } catch (error) {
      console.error('FAILED TO GET QUESTIONS FROM API', error);
      Pop.error(error, 'SOMETHING WENT WRONG', 'Try refreshing your page, or git good at coding forehead')
    }
  }

  drawQuestions() {
    const questions = AppState.questions
    let questionsContent = ''
    questions.forEach(question => questionsContent += question.cardHTMLTemplate)
    const questionsElem = document.getElementById('question-cards')
    questionsElem.innerHTML = questionsContent
  }
}