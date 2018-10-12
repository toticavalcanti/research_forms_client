import { QuestionsAnswer } from './questions_answer.model';
 
export class Answer {
    id: number;
    form_id: number;
    questions_answers: QuestionsAnswer[] = [];
 
    constructor(AnswerInfo: any) {
        this.id = AnswerInfo.id;
        this.form_id = AnswerInfo.form_id;
 
        this.includeQuestionsAnswers(AnswerInfo.questions_answers);
    }
 
    private includeQuestionsAnswers(questions: any) {
        for (const count in questions) {
            this.questions_answers.push( new QuestionsAnswer(questions[count]) );
        }
    }
}