import { BreakpointObserverService } from "./../breakpoint-observer.service";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from "@angular/cdk/layout";

@Component({
  selector: "app-contractor-form",
  templateUrl: "./contractor-form.component.html",
  styleUrls: ["./contractor-form.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ContractorFormComponent implements OnInit {
  constructor(public breakpointObserver: BreakpointObserver) {}

  // Instance Variables
  public formData: any = {
    title: "Contractor",
    logo: "../../assets/Group 1logo.svg"
  };

  public gutterSize: number = 50;
  public rowHeight: number = 60;
  public tooltipPosition: string = "below";

  public primaryCol: number;

  public fontSize: number;
  public formMargin: number;
  public titleMargin: number;

  public isXsmall: boolean;
  public isSmall: boolean;
  public isMedium: boolean;
  public isLarge: boolean;

  // ===============================================

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

          this.fontSize = 28;
          this.formMargin = 35;
          this.titleMargin = 50;
        } else if (state.breakpoints[Breakpoints.Small]) {
          this.isXsmall = false;
          this.isSmall = true;
          this.isMedium = false;
          this.isLarge = false;

          this.primaryCol = 2;

          this.fontSize = 30;
          this.formMargin = 65;
          this.titleMargin = 60;
        } else if (state.breakpoints[Breakpoints.Medium]) {
          this.isXsmall = false;
          this.isSmall = false;
          this.isMedium = true;
          this.isLarge = false;

          this.primaryCol = 2;

          this.fontSize = 36;
          this.formMargin = 80;
          this.titleMargin = 60;
        } else {
          this.isXsmall = false;
          this.isSmall = false;
          this.isMedium = false;
          this.isLarge = true;

          this.primaryCol = 3;

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
