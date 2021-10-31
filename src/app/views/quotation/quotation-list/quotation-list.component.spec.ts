import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationListComponent } from './quotation-list.component';

describe('QuotationListComponent', () => {
  let component: QuotationListComponent;
  let fixture: ComponentFixture<QuotationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
