import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-compaines',
  templateUrl: './compaines.component.html',
  styleUrls: ['./compaines.component.scss']
})

  export class CompainesComponent implements OnInit {
    companies: any[] = [];
    selectedCompany: any;
    private readonly apiUrl = 'assets/companies.json';
  
    constructor(private http: HttpClient) {}
  
    ngOnInit(): void {
      this.http.get<any[]>(this.apiUrl).subscribe((data: any[]) => {
        this.companies = data;
      });
    }
  
    showCompanyInfo(company: any): void {
      this.selectedCompany = company;
    }
  }