import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuizzesComponent } from "./quizzes.component";
import { QuizzeListComponent } from "./components/quizze-list/quizze-list.component";
import { QuizzeFormComponent } from "./components/quizze-form/quizze-form.component";
import { QuizzeDetailsComponent } from "./components/quizze-details/quizze-details.component";

const routes: Routes = [
  {
    path: "",
    component: QuizzesComponent,
    children: [
      { path: "list", component: QuizzeListComponent },
      { path: "add", component: QuizzeFormComponent },
      { path: "details/:id", component: QuizzeDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizzesRoutingModule {}
