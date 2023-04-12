import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-analysis',
  templateUrl: './new-analysis.component.html',
  styleUrls: ['./new-analysis.component.scss']
})
export class NewAnalysisComponent {
  dofForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.dofForm = this.formBuilder.group({
      topic: [''],
      activity: [''],
      hazardSource: [''],
      risks: [''],
      detectionImage: [''],
      legislation: [''],
      postPrecautionImage: [''],
      preDofRiskCalculation: this.formBuilder.group({
        intensity: [''],
        probability: [''],
        frequency: [''],
      }),
      hazard: [''],
      recordDate: [''],
      controlDate: [''],
      dofDeadline: [''],
      responsible: [''],
      performedActivity: [''],
      requiredPrecautions: [''],
      currentStatus: [''],
      postDofRiskCalculation: this.formBuilder.group({
        intensity: [''],
        probability: [''],
        frequency: [''],
      }),
    });
  }

  onSubmitDof() {
    console.log(this.dofForm.value);
  }
}