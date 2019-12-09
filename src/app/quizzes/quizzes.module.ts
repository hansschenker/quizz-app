import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// angular material
import { MaterialUiModule } from "../shared/material-ui/material-ui.module";

import { QuizzesRoutingModule } from "./quizzes-routing.module";
import { QuizzesComponent } from "./quizzes.component";
import { QuizzeListComponent } from "./components/quizze-list/quizze-list.component";
import { QuizzeFormComponent } from "./components/quizze-form/quizze-form.component";
import { QuizzeComponent } from "./components/quizze/quizze.component";
import { QuizzeDetailsComponent } from "./components/quizze-details/quizze-details.component";

import { ReactiveFormsModule } from "@angular/forms";
import { QuizzListitemComponent } from './components/quizz-listitem/quizz-listitem.component';
import { HightlightDirective } from './directives/hightlight.directive';

@NgModule({
  declarations: [
    QuizzesComponent,
    QuizzeListComponent,
    QuizzeFormComponent,
    QuizzeComponent,
    QuizzeDetailsComponent,
    QuizzListitemComponent,
    HightlightDirective
  ],
  exports: [
    QuizzesComponent,
    QuizzeListComponent,
    QuizzeFormComponent,
    QuizzeComponent,
    QuizzeDetailsComponent
  ],
  imports: [
    CommonModule,
    QuizzesRoutingModule,
    MaterialUiModule,
    ReactiveFormsModule
  ]
})
export class QuizzesModule {}
