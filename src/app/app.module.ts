import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ContentModule } from "@alfresco/adf-content-services";
import { ProcessModule } from "@alfresco/adf-process-services";
import {
  CoreModule,
  TRANSLATION_PROVIDER,
  TranslateLoaderService
} from "@alfresco/adf-core";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { FileViewComponent } from "./file-view/file-view.component";
import { BlobViewComponent } from "./file-view/blob-view.component";
import { PreviewService } from "./services/preview.service";

// Custom stencils
import { StencilsModule } from "./stencils.module";

// App components
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AppsComponent } from "./apps/apps.component";
import { TasksComponent } from "./tasks/tasks.component";
import { TaskDetailsComponent } from "./task-details/task-details.component";
import { DocumentlistComponent } from "./documentlist/documentlist.component";
import { StartProcessComponent } from "./start-process/start-process.component";
import { appRoutes } from "./app.routes";
import { AppLayoutComponent } from "./app-layout/app-layout.component";
import { CustomerOnboardingFormComponent } from "./customer-onboarding-form/customer-onboarding-form.component";

// Manually Added
// import { MAT_LABEL_GLOBAL_OPTIONS } from "@angular/material";
import { MaterialFileInputModule } from "ngx-material-file-input";
import { FlexLayoutModule } from "@angular/flex-layout";
import { UnderwriterFormComponent } from "./underwriter-form/underwriter-form.component";
import { UnderwriterTabComponent } from "./underwriter-tab/underwriter-tab.component";
import { SummaryTabComponent } from "./summary-tab/summary-tab.component";
import { MatTabsModule } from "@angular/material/tabs";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ContractorFormComponent } from "./contractor-form/contractor-form.component";
import { CsrFormComponent } from "./csr-form/csr-form.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { FormComponent } from "./form/form.component";
import { ApplicantDetailsComponent } from "./applicant-details/applicant-details.component";
import { SuperSummaryComponent } from './super-summary/super-summary.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { RateComponent } from './rate/rate.component';
import { CalculatorOptionsComponent } from './calculator-options/calculator-options.component';
import { DecisionEngineComponent } from './decision-engine/decision-engine.component';
import { PricingTermsComponent } from './pricing-terms/pricing-terms.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes // ,
      // { enableTracing: true } // <-- debugging purposes only
    ),

    // ADF modules
    CoreModule.forRoot(),
    ContentModule.forRoot(),
    ProcessModule.forRoot(),
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: TranslateLoaderService }
    }),
    StencilsModule,
    MaterialFileInputModule,
    FlexLayoutModule,
    MatTabsModule,
    MatSidenavModule
  ],
  declarations: [
    AppComponent,
    AppsComponent,
    HomeComponent,
    LoginComponent,
    TasksComponent,
    TaskDetailsComponent,
    DocumentlistComponent,
    StartProcessComponent,
    AppLayoutComponent,
    FileViewComponent,
    BlobViewComponent,
    CustomerOnboardingFormComponent,
    UnderwriterFormComponent,
    UnderwriterTabComponent,
    SummaryTabComponent,
    HeaderComponent,
    FooterComponent,
    ContractorFormComponent,
    CsrFormComponent,
    FormComponent,
    ApplicantDetailsComponent,
    SuperSummaryComponent,
    LoanDetailsComponent,
    ApplicantComponent,
    RateComponent,
    CalculatorOptionsComponent,
    DecisionEngineComponent,
    PricingTermsComponent
  ],
  providers: [
    PreviewService,
    {
      provide: TRANSLATION_PROVIDER,
      multi: true,
      useValue: {
        name: "app",
        source: "resources"
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
