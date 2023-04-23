import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss']
})
export class EditCompanyComponent {
  companyInfoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.companyInfoForm = this.formBuilder.group({
      companyName: [''],
      companyTitle: [''],
      address: [''],
      phone: [''],
      nace: [''],
      sectorCode: [''],
      hazardClass: [''],
      companyLogo: [''],
      authorizedPersonName: [''],
    });
  }


  ngOnInit(): void {
    const companyId = this.route.snapshot.paramMap.get('id');
    this.fetchCompany(companyId);
  }

  fetchCompany(companyId: string): void {
    this.httpClient.get(`http://localhost:3000/companies/${companyId}`).subscribe((data: any) => {
      this.companyInfoForm.patchValue(data);
    });
  }

  onUpdateCompanyInfo() {
    const companyId = this.route.snapshot.paramMap.get('id');
  
    this.httpClient.put(`http://localhost:3000/companies/${companyId}`, this.companyInfoForm.value).subscribe(
      (response) => {
        console.log('PUT isteği başarılı', response);
        this.router.navigate(['/companies']);
      },
      (error) => {
        console.log('PUT isteği başarısız', error);
      }
    );
  }
  
}
