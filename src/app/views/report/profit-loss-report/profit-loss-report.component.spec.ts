import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitLossReportComponent } from './profit-loss-report.component';

describe('ProfitLossReportComponent', () => {
  let component: ProfitLossReportComponent;
  let fixture: ComponentFixture<ProfitLossReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfitLossReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitLossReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
