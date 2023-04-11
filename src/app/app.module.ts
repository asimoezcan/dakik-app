import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompainesComponent } from './compaines/compaines.component';
import { CompanyComponent } from './company/company.component';
import { ReportsComponent } from './reports/reports.component';
import { NewReportComponent } from './new-report/new-report.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { NewAnalysisComponent } from './new-analysis/new-analysis.component';
import { NewCompanyComponent } from './new-company/new-company.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CompainesComponent,
    CompanyComponent,
    ReportsComponent,
    NewReportComponent,
    AnalysisComponent,
    NewAnalysisComponent,
    NewCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
