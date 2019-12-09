import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
// angular material
import { MaterialUiModule } from "./shared/material-ui/material-ui.module";
// app
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppShellComponent } from "./app-shell/app-shell.component";
import { HomeComponent } from "./home/home.component";

// import { LayoutModule } from "@angular/cdk/layout";
// import { MatToolbarModule } from "@angular/material/toolbar";
// import { MatButtonModule } from "@angular/material/button";
// import { MatSidenavModule } from "@angular/material/sidenav";
// import { MatIconModule } from "@angular/material/icon";
// import { MatListModule } from "@angular/material/list";

@NgModule({
  declarations: [AppComponent, AppShellComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MaterialUiModule,
    AppRoutingModule
    // LayoutModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatSidenavModule,
    // MatIconModule,
    // MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
