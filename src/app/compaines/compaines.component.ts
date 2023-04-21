import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'compaines',
  templateUrl: './compaines.component.html',
  styleUrls: ['./compaines.component.scss']
})

  export class CompainesComponent implements OnInit{
    companies = [];

    constructor(private http: HttpClient) { }
  
    ngOnInit(): void {
      this.fetchcompanies();
    }
  
    fetchcompanies(): void {
      this.http.get('http://localhost:3000/companies').subscribe((data: any[]) => {
        this.companies = data;
      });
    }
  
    removeItem(itemId: number): void {
      this.companies = this.companies.filter(assessment => assessment.id !== itemId);
      this.deleteAssessment(itemId);
    }
    
    deleteAssessment(itemId: number): void {
      this.http.delete(`http://localhost:3000/companies/${itemId}`).subscribe();
    }
    
  }
  