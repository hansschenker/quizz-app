import { Component, OnInit, Input } from "@angular/core";
import { Quizz } from "../../types/quizz.model";

@Component({
  selector: "quizze-list",
  templateUrl: "./quizze-list.component.html",
  styleUrls: ["./quizze-list.component.scss"]
})
export class QuizzeListComponent implements OnInit {
  constructor() {}
  @Input() quizzes: Quizz[];
  ngOnInit() {}
}
