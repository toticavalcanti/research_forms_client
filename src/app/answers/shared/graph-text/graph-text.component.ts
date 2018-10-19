import { Component, OnInit, Input } from '@angular/core';
import { QuestionsAnswer } from '../../../shared/questions_answer.model';

@Component({
  selector: 'app-graph-text',
  templateUrl: './graph-text.component.html',
  styleUrls: ['./graph-text.component.css']
})
export class GraphTextComponent implements OnInit {

  @Input() questions_answers: QuestionsAnswer[];
  public answers = [];

  constructor() { }

  ngOnInit() {
    for (const qa of this.questions_answers) {
      if (qa.value != null) {
        this.answers.push(qa.value);
      }
    }
  }
}