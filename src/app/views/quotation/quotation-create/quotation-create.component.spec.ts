import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationCreateComponent } from './quotation-create.component';

describe('QuotationCreateComponent', () => {
  let component: QuotationCreateComponent;
  let fixture: ComponentFixture<QuotationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotationCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
