import { Component, OnInit } from "@angular/core";
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from "@angular/cdk/layout";

@Component({
  selector: "app-underwriter-form",
  templateUrl: "./underwriter-form.component.html",
  styleUrls: ["./underwriter-form.component.scss"]
})
export class UnderwriterFormComponent implements OnInit {
  constructor(public breakpointObserver: BreakpointObserver) {}

  // Instance Variables
  public isXsmall: boolean;
  public isSmall: boolean;
  public isMedium: boolean;
  public isLarge: boolean;

  ngOnInit() {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge
      ])
      .subscribe((state: BreakpointState) => {
        if (state.breakpoints[Breakpoints.XSmall]) {
          this.isXsmall = true;
          this.isSmall = false;
          this.isMedium = false;
          this.isLarge = false;
        } else if (state.breakpoints[Breakpoints.Small]) {
          this.isXsmall = false;
          this.isSmall = true;
          this.isMedium = false;
          this.isLarge = false;
        } else if (state.breakpoints[Breakpoints.Medium]) {
          this.isXsmall = false;
          this.isSmall = false;
          this.isMedium = true;
          this.isLarge = false;
        } else {
          this.isXsmall = false;
          this.isSmall = false;
          this.isMedium = false;
          this.isLarge = true;
        }
      });
  }
}
