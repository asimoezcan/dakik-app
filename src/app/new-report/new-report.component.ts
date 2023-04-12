import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.scss']
})
export class NewReportComponent {
  assessmentForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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
  }
}