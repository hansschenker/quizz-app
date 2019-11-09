import {
  Component,
  ElementRef,
  Output,
  EventEmitter,
  QueryList,
  ContentChildren,
  AfterContentInit
} from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { MatListItem } from "@angular/material";
@Component({
  selector: "hs-app-shell",
  templateUrl: "./app-shell.component.html",
  styleUrls: ["./app-shell.component.scss"]
})
export class AppShellComponent implements AfterContentInit {
  @Output() clicked = new EventEmitter<string>();
  @ContentChildren(ElementRef) links = new QueryList<ElementRef>();
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
  onClicked() {
    this.clicked.emit("mat link clicked");
  }
  ngAfterContentInit() {
    this.links.forEach(link => console.log(link));
  }
}
