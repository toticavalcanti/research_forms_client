import { Component, OnInit, Input } from '@angular/core';
import { QuestionsAnswer } from '../../../shared/questions_answer.model';

@Component({
  selector: 'app-graph-boolean',
  templateUrl: './graph-boolean.component.html',
  styleUrls: ['./graph-boolean.component.css']
})
export class GraphBooleanComponent implements OnInit {

  @Input() questions_answers: QuestionsAnswer[];
  public doughnutChartLabels: string[];
  public doughnutChartData: number[];
  public doughnutChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
    let yes = 0;
    let no  = 0;
    for (const qa of this.questions_answers) {
      if (qa.value != null) {
        if (qa.value === '0') {
          no += 1;
        }else {
          yes += 1;
        }
      }
    }
    if (yes > 0 || no > 0) {
      this.doughnutChartLabels = ['no', 'yes'];
      this.doughnutChartData = [no, yes];
    }
  }
}