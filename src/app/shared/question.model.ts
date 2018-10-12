import { QuestionsAnswer } from './questions_answer.model';


export class Question {
    id: number;
    title: string;
    kind: string;
    form_id: number;
    questions_answers: QuestionsAnswer[] = [];

    constructor(questionInfo: any) {
        this.id = questionInfo.id;
        this.title = questionInfo.title;
        this.kind = questionInfo.kind;
        this.form_id = questionInfo.form_id;
        this.includeQuestionsAnswers(questionInfo.questions_answers);
    }

    private includeQuestionsAnswers(questions_answers: any) {
        for (const count in questions_answers) {
            this.questions_answers.push( new QuestionsAnswer(questions_answers[count]) );
        }
    }
}