import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAnalysisComponent } from './edit-analysis.component';

describe('EditAnalysisComponent', () => {
  let component: EditAnalysisComponent;
  let fixture: ComponentFixture<EditAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
