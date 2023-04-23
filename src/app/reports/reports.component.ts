import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  assessments = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.fetchAssessments();
  }

  fetchAssessments(): void {
    this.http.get('http://localhost:3000/assessments').subscribe((data: any[]) => {
      this.assessments = data;
    });
  }

  removeItem(itemId: number): void {
    this.assessments = this.assessments.filter(assessment => assessment.id !== itemId);
    this.deleteAssessment(itemId);
  }
  
  deleteAssessment(itemId: number): void {
    this.http.delete(`http://localhost:3000/assessments/${itemId}`).subscribe();
  }
  editReport(itemId: number): void {
    this.router.navigate(['/edit-report', itemId]);
  }
}
