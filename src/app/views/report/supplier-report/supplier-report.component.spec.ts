import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierReportComponent } from './supplier-report.component';

describe('SupplierReportComponent', () => {
  let component: SupplierReportComponent;
  let fixture: ComponentFixture<SupplierReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
