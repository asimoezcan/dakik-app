import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.scss']
})
export class NewCompanyComponent {
  companyForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.companyForm = this.formBuilder.group({
      shortCompanyName: [''],
      fullCompanyName: [''],
      address: this.formBuilder.group({
        street: [''],
        city: [''],
        district: [''],
        zipCode: [''],
      }),
      phone: [''],
    });
  }

  onSubmit() {
    console.log(this.companyForm.value);
  }
}