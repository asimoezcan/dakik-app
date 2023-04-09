import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient,private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
  
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
  
    // Kullanıcı adı ve şifreyi başlıklara ekleyin
    const headers = new HttpHeaders({
      'username': email,
      'password': password
    });
  
    // GET isteğini yapın ve başlıkları gönderin
    this.http.get('http://localhost:3000/user/login', { headers, observe: 'response' }).subscribe(
      (response: HttpResponse<any>) => {
        if (response.status === 200) {
          console.log('API cevabı:', response.body);
          // İşlem başarılı olduğunda, kullanıcıyı /dashboard sayfasına yönlendirin
          this.router.navigate(['/dashboard']);
        } else {
          console.error('API hatası:', response.status);
          // Hata durumunda yapılacaklar
        }
      },
      (error) => {
        console.error('API hatası:', error);
        // Hata durumunda yapılacaklar
      }
    );
  }
}