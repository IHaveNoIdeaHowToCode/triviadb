import { AppState } from "../AppState.js";
import { Question } from "../models/QuestionModel.js";
Question




class QuestionsService {
  // async getTenQuestionsForTrivia() {
  //   const response = await fetch(`https://opentdb.com/api.php?amount=10`)

  //   if (response.status != 200) {
  //     throw new Error('Could not get questions');
  //   }

  //   const json = await response.json()
  //   console.log('Response from Questions API', json.results);
  //   const questions = json.results.map(pojo => new Question(pojo))
  //   AppState.questions = questions
  // }


  async getTwenQuestionsForTrivia() {
    const response = await fetch(`https://opentdb.com/api.php?amount=20`)

    if (response.status != 200) {
      throw new Error('Could not get questions');
    }

    const json = await response.json()
    console.log('Response from Questions API', json.results);
    const questions = json.results.map(pojo => new Question(pojo))
    AppState.questions = questions
  }
}

export const questionService = new QuestionsService()