import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "quizzes" },
  {
    path: "quizzes",
    loadChildren: () =>
      import("../quizzes/quizzes.module").then(m => m.QuizzesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppShellRoutingModule {}
