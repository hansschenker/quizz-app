import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Quizz } from "./types/quizz.model";
import { tap } from "rxjs/operators";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class QuizzeService {
  constructor(private http: HttpClient) {}

  getQuizzes(): Observable<Quizz[]> {
    const qs = this.http.get<Quizz[]>("/api/quizzes");
    qs.pipe(tap(qss => console.log("svc:quizzes", qss)));
    return qs;
  }
  addQuizz() {}

  updateQuizz(quizz: Quizz) {}

  deleteQuizz(quizz: Quizz) {}

  filterQuizzes(query: string) {}
}
