import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.scss']
})
export class NewReportComponent {
  assessmentForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private httpClient: HttpClient,private router: Router) {
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

  onSubmitAssessment() {
    console.log(this.assessmentForm.value);

    // Yerel JSON dosyasına veri göndermek için HTTP POST isteği
    this.httpClient.post('http://localhost:3000/assessments', this.assessmentForm.value).subscribe(
        (response) => {
          console.log('POST isteği başarılı', response);
          this.router.navigate(['/reports']);
        },
        (error) => {
          console.log('POST isteği başarısız', error);
        }
      );
  }
}