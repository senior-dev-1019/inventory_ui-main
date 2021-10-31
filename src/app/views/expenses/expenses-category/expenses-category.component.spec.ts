import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesCategoryComponent } from './expenses-category.component';

describe('ExpensesCategoryComponent', () => {
  let component: ExpensesCategoryComponent;
  let fixture: ComponentFixture<ExpensesCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensesCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
