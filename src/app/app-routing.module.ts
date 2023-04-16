import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewCompanyComponent } from './new-company/new-company.component';
import { NewAnalysisComponent } from './new-analysis/new-analysis.component';
import { NewReportComponent } from './new-report/new-report.component';
import { CompainesComponent } from './compaines/compaines.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sirketekle', component: NewCompanyComponent },
  { path: 'riskekle', component: NewAnalysisComponent },
  { path: 'raporekle', component: NewReportComponent },
  { path: 'sirketler', component: CompainesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
