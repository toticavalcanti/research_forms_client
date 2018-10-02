import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerListComponent } from './answer-list/answer-list.component';
import { AnswerNewComponent } from './answer-new/answer-new.component';
import { GraphNumberComponent } from './shared/graph-number/graph-number.component';
import { GraphTextComponent } from './shared/graph-text/graph-text.component';
import { GraphBooleanComponent } from './shared/graph-boolean/graph-boolean.component';
import { IndividualDetailsComponent } from './shared/individual-details/individual-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AnswerListComponent, AnswerNewComponent, GraphNumberComponent, GraphTextComponent, GraphBooleanComponent, IndividualDetailsComponent]
})
export class AnswersModule { }
