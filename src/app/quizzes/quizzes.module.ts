import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzesRoutingModule } from './quizzes-routing.module';
import { QuizzesComponent } from './quizzes.component';
import { QuizzeListComponent } from './components/quizze-list/quizze-list.component';
import { QuizzeFormComponent } from './components/quizze-form/quizze-form.component';
import { QuizzeComponent } from './components/quizze/quizze.component';
import { QuizzeDetailsComponent } from './components/quizze-details/quizze-details.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [QuizzesComponent, QuizzeListComponent, QuizzeFormComponent, QuizzeComponent, QuizzeDetailsComponent],
  imports: [
    CommonModule,
    QuizzesRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class QuizzesModule { }
