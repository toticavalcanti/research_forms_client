import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerListComponent } from './answer-list/answer-list.component';
import { AnswerNewComponent } from './answer-new/answer-new.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AnswerListComponent, AnswerNewComponent]
})
export class AnswersModule { }
