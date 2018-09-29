import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerListComponent } from './answer-list/answer-list.component';
import { AnswerNewComponent } from './answer-new/answer-new.component';
import { GraphNumberComponent } from './shared/graph-number/graph-number.component';
import { GraphTextComponent } from './shared/graph-text/graph-text.component';
import { GraphBooleanComponent } from './shared/graph-boolean/graph-boolean.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AnswerListComponent, AnswerNewComponent, GraphNumberComponent, GraphTextComponent, GraphBooleanComponent]
})
export class AnswersModule { }
