import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from "@angular/cdk/layout";

@Component({
  selector: "app-summary-tab",
  templateUrl: "./summary-tab.component.html",
  styleUrls: ["./summary-tab.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class SummaryTabComponent implements OnInit {
  constructor(public breakpointObserver: BreakpointObserver) {}

  // Instance Variables
  public gutterSize: number = 50;
  public rowHeight: number = 60;
  public tooltipPosition: string = "below";

  public primaryCol: number;

  public fontSize: number;
  public formMargin: number;
  public titleMargin: number;

  public applicantRow: number;
  public decisionRow: number;
  public calculatorRow: number;

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

          this.primaryCol = 1;

          this.applicantRow = 5;
          this.decisionRow = 6;
          this.calculatorRow = 8;

          this.fontSize = 28;
          this.formMargin = 30;
          this.titleMargin = 50;
        } else if (state.breakpoints[Breakpoints.Small]) {
          this.isXsmall = false;
          this.isSmall = true;
          this.isMedium = false;
          this.isLarge = false;

          this.primaryCol = 2;

          this.applicantRow = 5;
          this.decisionRow = 7;
          this.calculatorRow = 8;

          this.fontSize = 30;
          this.formMargin = 65;
          this.titleMargin = 60;
        } else if (state.breakpoints[Breakpoints.Medium]) {
          this.isXsmall = false;
          this.isSmall = false;
          this.isMedium = true;
          this.isLarge = false;

          this.primaryCol = 2;

          this.applicantRow = 5;
          this.decisionRow = 7;
          this.calculatorRow = 8;

          this.fontSize = 36;
          this.formMargin = 80;
          this.titleMargin = 60;
        } else {
          this.isXsmall = false;
          this.isSmall = false;
          this.isMedium = false;
          this.isLarge = true;

          this.primaryCol = 3;

          this.applicantRow = 5;
          this.decisionRow = 7;
          this.calculatorRow = 9;

          this.fontSize = 36;
          this.formMargin = 80;
          this.titleMargin = 60;
        }
      });
  }
  setMyStyles() {
    return {
      "font-size": `${this.fontSize}px`,
      height: `${this.fontSize}px`,
      "line-height": `${this.fontSize}px`
    };
  }
}
