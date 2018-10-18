import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../../shared/question.service';
import { Question } from '../../shared/question.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  @Input() questions: Question[];
  @Input() form_id: number;
  public question_new: Question = new Question({});

  constructor() { }

  ngOnInit() {
  }

}