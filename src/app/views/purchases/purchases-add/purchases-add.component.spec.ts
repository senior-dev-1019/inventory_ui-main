import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesAddComponent } from './purchases-add.component';

describe('PurchasesAddComponent', () => {
  let component: PurchasesAddComponent;
  let fixture: ComponentFixture<PurchasesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
