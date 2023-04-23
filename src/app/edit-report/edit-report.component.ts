import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-report',
  templateUrl: './edit-report.component.html',
  styleUrls: ['./edit-report.component.scss']
})
export class EditReportComponent {
  assessmentForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.assessmentForm = this.formBuilder.group({
      reportName: [''],
      reportDate: [''],
      reportValidityDate: [''],
      riskAssessmentMethod: [''],
      riskAssessmentTeam: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        title: [''],
      }),
      workplaceSection: [''],
    });
  }

  ngOnInit(): void {
    const reportId = this.route.snapshot.paramMap.get('id');
    this.fetchReport(reportId);
  }

  fetchReport(reportId: string): void {
    this.httpClient.get(`http://localhost:3000/assessments/${reportId}`).subscribe((data: any) => {
      this.assessmentForm.patchValue(data);
    });
  }

  onUpdateAssessment() {
    const reportId = this.route.snapshot.paramMap.get('id');
  
    this.httpClient.put(`http://localhost:3000/assessments/${reportId}`, this.assessmentForm.value).subscribe(
      (response) => {
        console.log('PUT isteği başarılı', response);
        this.router.navigate(['/reports']);
      },
      (error) => {
        console.log('PUT isteği başarısız', error);
      }
    );
  }
  
}
