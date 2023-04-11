import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-analysis',
  templateUrl: './new-analysis.component.html',
  styleUrls: ['./new-analysis.component.scss']
})
export class NewAnalysisComponent {
  riskForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.riskForm = this.formBuilder.group({
      number: [''],
      riskDefinition: [''],
      compliance: [''],
      comment: [''],
      responsiblePerson: [''],
      solutionDate: [''],
    });
  }

  onSubmitRisk() {
    console.log(this.riskForm.value);
  }
}