import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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
  
    // Formdan alınan veriler
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
  
    // API'ye POST isteği yapma
    this.http.post('http://localhost:3000/users', { email, password }).subscribe(
      (response) => {
        console.log('API cevabı:', response);
        this.router.navigate(['/dashboard']);
        // İşlem başarılı olduğunda yapılacaklar
      },
      (error) => {
        console.error('API hatası:', error);
        // Hata durumunda yapılacaklar
      }
    );
  }
  
}