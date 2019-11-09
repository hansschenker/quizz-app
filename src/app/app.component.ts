import { Component } from "@angular/core";
import { MatListItem } from "@angular/material";

@Component({
  selector: "hs-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "App";
  links = [
    { url: "/", title: "Home" },
    { url: "/quizzes", title: "Quizzes" },
    { url: "/auth", title: "Login" }
  ];
  pageChange(link: MatListItem) {
    console.log("link-click:", link._getHostElement().textContent);
    this.title = link._getHostElement().textContent;
  }
}
