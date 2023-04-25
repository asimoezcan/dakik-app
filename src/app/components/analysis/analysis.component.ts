import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit{
  analysis = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.fetchanalysis();
  }

  fetchanalysis(): void {
    this.http.get('http://localhost:3000/analysis').subscribe((data: any[]) => {
      this.analysis = data;
    });
  }

  removeItem(itemId: number): void {
    this.analysis = this.analysis.filter(assessment => assessment.id !== itemId);
    this.deleteAssessment(itemId);
  }
  
  deleteAssessment(itemId: number): void {
    this.http.delete(`http://localhost:3000/analysis/${itemId}`).subscribe();
  }
  editAnalysis(itemId: number): void {
    this.router.navigate(['/edit-analysis', itemId]);
  }
  
}
