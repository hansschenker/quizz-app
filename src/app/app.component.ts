import { Component } from "@angular/core";
import { Link } from "./app-shell/link.model";
@Component({
  selector: "hs-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  appTitle = "Ng Quizz Master";
  toolbarTitle: string;
  links: Link[] = [
    { url: "/", title: "Home" },
    { url: "/quizzes", title: "Quizzes" },
    { url: "/auth", title: "Login" }
  ];
  // pageChange(link: MatListItem) {
  //   console.log("link-click:", link._getHostElement().textContent);
  //   this.toolbarTitle = link._getHostElement().textContent;

  //   //this.drawer.toggle();
  // }
}
