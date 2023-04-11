import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.scss']
})
export class NewReportComponent {
  reportForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.reportForm = this.formBuilder.group({
      reportName: [''],
      date: [''],
      revisionNumber: [''],
      note: [''],
    });
  }

  onSubmitReport() {
    console.log(this.reportForm.value);
  }
}