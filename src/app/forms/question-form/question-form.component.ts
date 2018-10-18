import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../../shared/question.service';
import { Question } from '../../shared/question.model';
import { MzToastService} from 'ng2-materialize';


@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {

  @Input() question: Question;
  @Input() questions: Question[];
  @Input() form_id: number;

  constructor(
    private questionService: QuestionService,
    private toastService: MzToastService
  ) { }

  ngOnInit() {
  }

  onSubmit(f) {
    if (this.question.id) {
      this.questionService.updateQuestion(this.question.id, this.question).subscribe(data => {
        this.toastService.show('Question updated', 8000, 'green');
      }, error => {
        this.toastService.show('Problem in Question update', 8000, 'red');
      });
    } else {
      this.questionService.createQuestion(this.form_id, this.question).subscribe(data => {
        this.questions.push(new Question(data));
        this.question = new Question({});
      }, error => {
        this.toastService.show('Problem in Question creation', 8000, 'red');
      });
    }
  }

  deleteForm(form): boolean {
    if (confirm('Your want delete this question?')) {
      this.questionService.destroyQuestion(this.question.id).subscribe(data => {
        const index = this.questions.indexOf (this.question);
        this.questions.splice(index, 1);
        this.toastService.show('question deleted', 8000, 'green');
      }, error => {
        this.toastService.show('Error in delete question ' + this.question.title, 8000, 'red');
      });
    }
    return false;
  }
}