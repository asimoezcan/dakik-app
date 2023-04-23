import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-analysis',
  templateUrl: './edit-analysis.component.html',
  styleUrls: ['./edit-analysis.component.scss']
})
export class EditAnalysisComponent {
  dofForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {
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
  ngOnInit(): void {
    const analysisId = this.route.snapshot.paramMap.get('id');
    this.fetchAnalysis(analysisId);
  }

  fetchAnalysis(analysisId: string): void {
    this.httpClient.get(`http://localhost:3000/analysis/${analysisId}`).subscribe((data: any) => {
      this.dofForm.patchValue(data);
    });
  }

  onUpdateAssessment() {
    const analysisId = this.route.snapshot.paramMap.get('id');
  
    this.httpClient.put(`http://localhost:3000/analysis/${analysisId}`, this.dofForm.value).subscribe(
      (response) => {
        console.log('PUT isteği başarılı', response);
        this.router.navigate(['/analysis']);
      },
      (error) => {
        console.log('PUT isteği başarısız', error);
      }
    );
  }
  
}