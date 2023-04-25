import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewCompanyComponent } from './components/new-company/new-company.component';
import { NewAnalysisComponent } from './components/new-analysis/new-analysis.component';
import { NewReportComponent } from './components/new-report/new-report.component';
import { CompainesComponent } from './components/compaines/compaines.component';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { ReportsComponent } from './components/reports/reports.component';
import { EditReportComponent } from './components/edit-report/edit-report.component';
import { EditAnalysisComponent } from './components/edit-analysis/edit-analysis.component';
import { EditCompanyComponent } from './components/edit-company/edit-company.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newcompany', component: NewCompanyComponent },
  { path: 'newanalysis', component: NewAnalysisComponent },
  { path: 'newreport', component: NewReportComponent },
  { path: 'companies', component: CompainesComponent },
  { path: 'analysis', component: AnalysisComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'edit-report/:id', component: EditReportComponent },
  { path: 'edit-analysis/:id', component: EditAnalysisComponent },
  { path: 'edit-company/:id', component: EditCompanyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
