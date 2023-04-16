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
      this.http.get('http://localhost:3000/companies').subscribe((data: any[]) => {
        this.companies = data;
      });
    }
  }