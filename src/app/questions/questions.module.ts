import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionDetailsComponent } from './components/question-details/question-details.component';


@NgModule({
  declarations: [QuestionsComponent, QuestionListComponent, QuestionFormComponent, QuestionComponent, QuestionDetailsComponent],
  imports: [
    CommonModule,
    QuestionsRoutingModule
  ]
})
export class QuestionsModule { }
