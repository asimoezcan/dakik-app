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

  onSubmit() {
    // Form verilerini JSON'a dönüştürün
    const formData = JSON.stringify(this.companyInfoForm.value);

    // JSON verilerini kaydedin (localStorage veya bir API kullanarak)
    localStorage.setItem('formData', formData);

    // Başka bir bileşende listelemek için veriyi paylaşabileceğiniz bir hizmet oluşturun.
  }

  onSubmitCompanyInfo() {
    console.log(this.companyInfoForm.value);
  }
}