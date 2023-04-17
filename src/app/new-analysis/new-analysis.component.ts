import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-analysis',
  templateUrl: './new-analysis.component.html',
  styleUrls: ['./new-analysis.component.scss']
})
export class NewAnalysisComponent {
  dofForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private httpClient: HttpClient) {
    this.dofForm = this.formBuilder.group({
      topic: [''],
      activity: [''],
      hazardSource: [''],
      risks: [''],
      detectionImage: [''],
      legislation: [''],
      postPrecautionImage: [''],
      preDofRiskCalculation: this.formBuilder.group({
        preintensity: [''],
        preprobability: [''],
        prefrequency: [''],
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
        postintensity: [''],
        postprobability: [''],
        postfrequency: [''],
      }),
    });
  }

  onSubmitDof() {
    console.log(this.dofForm.value);

    // Yerel JSON dosyasına veri göndermek için HTTP POST isteği
    this.httpClient.post('http://localhost:3000/analysis', this.dofForm.value).subscribe(
        (response) => {
          console.log('POST isteği başarılı', response);
        },
        (error) => {
          console.log('POST isteği başarısız', error);
        }
      );
  }
}