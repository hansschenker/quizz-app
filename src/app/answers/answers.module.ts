import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnswersRoutingModule } from './answers-routing.module';
import { AnswersComponent } from './answers.component';
import { AnswerListComponent } from './components/answer-list/answer-list.component';
import { AnswerFormComponent } from './components/answer-form/answer-form.component';
import { AnswerComponent } from './components/answer/answer.component';
import { AnswerDetailsComponent } from './components/answer-details/answer-details.component';


@NgModule({
  declarations: [AnswersComponent, AnswerListComponent, AnswerFormComponent, AnswerComponent, AnswerDetailsComponent],
  imports: [
    CommonModule,
    AnswersRoutingModule
  ]
})
export class AnswersModule { }
