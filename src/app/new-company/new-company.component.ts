import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.scss']
})
export class NewCompanyComponent {
  companyInfoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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

  onSubmitCompanyInfo() {
    console.log(this.companyInfoForm.value);
  }
}