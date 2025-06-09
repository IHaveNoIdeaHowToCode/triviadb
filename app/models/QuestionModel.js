export class Question {
  constructor(results) {
    this.question = results.question
    this.category = results.category
    this.difficulty = results.difficulty
    this.type = results.type
    this.rightAnswer = results.correct_answer
    this.wrongAnswers = results.incorrect_answers
    this.wrongAnswers.push(this.rightAnswer)
  }

  get cardHTMLTemplate() {
    return `
    <div class="col-md-6 mb-3">
        <div class="card">
          <div class="card-body">
            <div class="d-flex gap-3">
              <p class="card-title fs-5 fw-bold">
                ${this.question}
              </p>
              <div class="p-fs-3">
                <p>${this.category}
                </p>
                <p>${this.difficulty}</p>
              </div>
              <div class="p-card-text">
                <b>Answers</b>
                <ul>
                  ${this.wrongAnswers}
              </div>
            </div>
          </div>
        </div>
    `
  }
}