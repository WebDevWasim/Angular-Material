import { Component, OnInit } from "@angular/core";
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from "@angular/cdk/layout";
import {
  ProcessService,
  ProcessInstance,
  ProcessInstanceVariable
} from "@alfresco/adf-process-services";
import config from "../../assets/config.json";
import { TranslationService } from "@alfresco/adf-core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-customer-onboarding-form",
  templateUrl: "./customer-onboarding-form.component.html",
  styleUrls: ["./customer-onboarding-form.component.scss"]
})
export class CustomerOnboardingFormComponent implements OnInit {
  constructor(
    public translationService: TranslationService,
    public breakpointObserver: BreakpointObserver,
    private processService: ProcessService,
    private http: HttpClient
  ) {}

  // Instance Variables
  private selectedLanguage: string = "en";
  public images = config;

  public gutterSize: number = 50;
  public rowHeight: number = 65;

  public primaryCol: number;
  public documentsCol: number;
  public contractorInfoCol: number;
  public checkboxCol: number;
  public buttonTopMargin: number;
  public buttonBottomMargin: number;

  public fontSize: number;
  public spanText: number;
  public formMargin: number;
  public titleMargin: number;

  public isXsmall: boolean;
  public isSmall: boolean;
  public isMedium: boolean;
  public isLarge: boolean;

  selected() {
    this.translationService.use(this.selectedLanguage);
  }

  ngOnInit() {
    const headerDict = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Headers": "Content-Type"
    };

    const requestOptions = {
      headers: new Headers(headerDict)
    };
    this.http
      .get("http://172.16.0.112:8089/renew-financial/pace/v1/sourceofincome")
      .subscribe(res => {
        console.log(res);
      });
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
          this.documentsCol = 1;
          this.contractorInfoCol = 1;
          this.checkboxCol = 1;

          this.fontSize = 28;
          this.spanText = 20;
          this.formMargin = 30;
          this.titleMargin = 50;
          this.buttonTopMargin = 80;
          this.buttonBottomMargin = 50;
        } else if (state.breakpoints[Breakpoints.Small]) {
          this.isXsmall = false;
          this.isSmall = true;
          this.isMedium = false;
          this.isLarge = false;

          this.primaryCol = 2;
          this.documentsCol = 2;
          this.contractorInfoCol = 2;
          this.checkboxCol = 1;

          this.fontSize = 30;
          this.formMargin = 75;
          this.titleMargin = 60;
          this.buttonTopMargin = 70;
          this.buttonBottomMargin = 50;
        } else if (state.breakpoints[Breakpoints.Medium]) {
          this.isXsmall = false;
          this.isSmall = false;
          this.isMedium = true;
          this.isLarge = false;

          this.primaryCol = 2;
          this.documentsCol = 2;
          this.contractorInfoCol = 2;
          this.checkboxCol = 2;

          this.fontSize = 36;
          this.formMargin = 97;
          this.titleMargin = 60;
          this.buttonTopMargin = 60;
          this.buttonBottomMargin = 30;
        } else {
          this.isXsmall = false;
          this.isSmall = false;
          this.isMedium = false;
          this.isLarge = true;

          this.primaryCol = 4;
          this.documentsCol = 3;
          this.contractorInfoCol = 2;
          this.checkboxCol = 3;

          this.fontSize = 36;
          this.formMargin = 97;
          this.titleMargin = 60;
          this.buttonTopMargin = 50;
          this.buttonBottomMargin = 20;
        }
      });
  }

  setMyStyles() {
    return {
      "font-size": `${this.fontSize}px`,
      height: `${this.fontSize}px`,
      "line-height": `${this.fontSize}px`,
      "margin-top": `${this.titleMargin}px`,
      "margin-bottom": `${this.titleMargin}px`
    };
  }

  setCheckBoxStyles() {
    return {
      "font-size": `${this.fontSize}px`,
      height: `${this.fontSize}px`,
      "line-height": `${this.fontSize}px`,
      "margin-top": `${this.titleMargin}px`,
      "margin-bottom": `${this.titleMargin - 20}px`
    };
  }

  submitCustomerForm(customerForm) {
    const formValues: object = customerForm.value;
    let KeysArr = Object.keys(formValues);
    let arr = [];
    for (let key of KeysArr) {
      let obj = {
        name: key,
        value: formValues[key]
      };
      arr.push(obj);
    }
    console.log(arr);

    const processDefinitionId = "test:3:19";
    const name = "test";
    const variables: ProcessInstanceVariable[] = arr;
    this.processService
      .startProcess(processDefinitionId, name, null, null, variables)
      .subscribe(
        (processInstance: ProcessInstance) => {
          console.log("ProcessInstance: ", processInstance);
        },
        error => {
          console.log("Error: ", error);
        }
      );
  }
}
