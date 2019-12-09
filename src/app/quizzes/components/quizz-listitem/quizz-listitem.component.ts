import { Component, OnInit, Input } from "@angular/core";
import { Quizz } from "../../types/quizz.model";

@Component({
  selector: "hs-quizz-listitem",
  templateUrl: "./quizz-listitem.component.html",
  styleUrls: ["./quizz-listitem.component.scss"]
})
export class QuizzListitemComponent implements OnInit {
  @Input() quizz: Quizz;
  @Input() index: number;
  @Input() isOdd: boolean;

  constructor() {}

  ngOnInit() {}
  handleQuizzClick(quizz: Quizz) {
    console.log("quizz click:", quizz);
  }
  handleDeleteClick(quizz: Quizz) {
    console.log("quizz delete click:", quizz);
  }
}
