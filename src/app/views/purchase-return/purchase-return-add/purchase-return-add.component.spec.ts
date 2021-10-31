import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseReturnAddComponent } from './purchase-return-add.component';

describe('PurchaseReturnAddComponent', () => {
  let component: PurchaseReturnAddComponent;
  let fixture: ComponentFixture<PurchaseReturnAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseReturnAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseReturnAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
