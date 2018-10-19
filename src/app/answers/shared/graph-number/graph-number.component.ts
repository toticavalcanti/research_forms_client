import { Component, OnInit, Input } from '@angular/core';
import { QuestionsAnswer } from '../../../shared/questions_answer.model';

@Component({
  selector: 'app-graph-number',
  templateUrl: './graph-number.component.html',
  styleUrls: ['./graph-number.component.css']
})
export class GraphNumberComponent implements OnInit {

  @Input() questions_answers: QuestionsAnswer[];
  public pieChartLabels: string[];
  public pieChartData: number[];
  public pieChartType = 'pie';

  constructor() { }

  ngOnInit() {
    const answers = {};

    for (const qa of this.questions_answers) {
      if (qa.value != null) {
        if (answers.hasOwnProperty(qa.value) !== true) {
          answers[qa.value] = 1;
        } else {
          answers[qa.value] += 1;
        }
      }
    }

    const answers_labels = [];
    const answers_values = [];
    for (const key in answers) {
      if (answers.hasOwnProperty(key)) {
        answers_labels.push(key);
        answers_values.push(answers[key]);
      }
    }
    this.pieChartLabels = answers_labels;
    this.pieChartData = answers_values;
  }
}