import { Component, OnInit } from "@angular/core";
import { QuizzeService } from "./quizz.service";
import { Quizz } from "./types/quizz.model";
import { Observable } from "rxjs";

@Component({
  selector: "hs-quizzes",
  templateUrl: "./quizzes.component.html",
  styleUrls: ["./quizzes.component.scss"]
})
export class QuizzesComponent implements OnInit {
  title = "Quizzes";
  quizzes$: Observable<Quizz[]>;
  quizzes: Quizz[];
  constructor(private svc: QuizzeService) {}

  ngOnInit() {
    this.getQuizzes();
  }
  getQuizzes() {
    // this.quizzes$ = this.svc.getQuizzes();
    this.svc.getQuizzes().subscribe( qs => this.quizzes = qs);
    // console.log("quizzes", this.quizzes$);
  }
}
