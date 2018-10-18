import { Component, OnInit } from '@angular/core';
import { FormService } from '../../shared/form.service';
import { MzToastService} from 'ng2-materialize';
import { Form } from '../../shared/form.model';
import { QuestionService } from '../../shared/question.service';
import { Question } from '../../shared/question.model';
import { Answer } from '../../shared/answer.model';
import { AnswerService } from '../../shared/answer.service';
import { QuestionsAnswer } from '../../shared/questions_answer.model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-answer-new',
  templateUrl: './answer-new.component.html',
  styleUrls: ['./answer-new.component.css']
})
export class AnswerNewComponent implements OnInit {

  public form: Form = new Form({});
  public answer: Answer;
  public questions_answer: QuestionsAnswer;


  constructor(
    private formService: FormService,
    private toastService: MzToastService,
    private questionService: QuestionService,
    private answerService: AnswerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.formService.getForm(params['id']).subscribe(data => {
          this.form = new Form(data);
          this.answer = new Answer({form_id: this.form.id});
          for (const question of this.form.questions) {
            this.answer.questions_answers.push(new QuestionsAnswer({question: question}));
          }
        });
      }
    });
  }

  onSubmit(f) {
    console.log(this.answer);
    this.answerService.createAnswer(this.answer).subscribe(data => {
      this.toastService.show('Answer send with sucess', 10000, 'green');
      this.answer = new Answer({form_id: this.form.id});
      for (const question of this.form.questions) {
        this.answer.questions_answers.push(new QuestionsAnswer({question: question}));
      }
    }, error => {
      this.toastService.show('Problem in send answer', 8000, 'red');
    });
  }
}