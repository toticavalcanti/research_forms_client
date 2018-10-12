import { Question } from './question.model';
 
export class QuestionsAnswer {
    id: number;
    value: string;
    answer_id: number;
    question: Question;
 
    constructor(questionsAnswerInfo: any) {
        this.id = questionsAnswerInfo.id;
        this.value = questionsAnswerInfo.value;
        this.answer_id = questionsAnswerInfo.answer_id;
        this.question = questionsAnswerInfo.question;
    }
}