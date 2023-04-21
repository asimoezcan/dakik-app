import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.scss']
})
export class NewCompanyComponent {
  companyInfoForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private httpClient: HttpClient,private router: Router) {
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

    // Yerel JSON dosyasına veri göndermek için HTTP POST isteği
    this.httpClient.post('http://localhost:3000/companies', this.companyInfoForm.value).subscribe(
        (response) => {
          console.log('POST isteği başarılı', response);
          this.router.navigate(['/companies']);
        },
        (error) => {
          console.log('POST isteği başarısız', error);
        }
      );
  }
}