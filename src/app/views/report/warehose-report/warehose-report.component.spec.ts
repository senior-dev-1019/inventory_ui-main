import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehoseReportComponent } from './warehose-report.component';

describe('WarehoseReportComponent', () => {
  let component: WarehoseReportComponent;
  let fixture: ComponentFixture<WarehoseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehoseReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehoseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
