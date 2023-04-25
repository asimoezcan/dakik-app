import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompainesComponent } from './components/compaines/compaines.component';
import { CompanyComponent } from './components/company/company.component';
import { ReportsComponent } from './components/reports/reports.component';
import { NewReportComponent } from './components/new-report/new-report.component';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { NewAnalysisComponent } from './components/new-analysis/new-analysis.component';
import { NewCompanyComponent } from './components/new-company/new-company.component';
import { HeaderComponent } from './header/header.component';
import { EditReportComponent } from './components/edit-report/edit-report.component';
import { EditAnalysisComponent } from './components/edit-analysis/edit-analysis.component';
import { EditCompanyComponent } from './components/edit-company/edit-company.component';

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
    NewCompanyComponent,
    HeaderComponent,
    EditReportComponent,
    EditAnalysisComponent,
    EditCompanyComponent
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
