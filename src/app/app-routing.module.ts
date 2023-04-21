import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewCompanyComponent } from './new-company/new-company.component';
import { NewAnalysisComponent } from './new-analysis/new-analysis.component';
import { NewReportComponent } from './new-report/new-report.component';
import { CompainesComponent } from './compaines/compaines.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { ReportsComponent } from './reports/reports.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newcompany', component: NewCompanyComponent },
  { path: 'newanalysis', component: NewAnalysisComponent },
  { path: 'newreport', component: NewReportComponent },
  { path: 'companies', component: CompainesComponent },
  { path: 'analysis', component: AnalysisComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
