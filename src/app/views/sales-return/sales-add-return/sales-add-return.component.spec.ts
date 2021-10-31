import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesAddReturnComponent } from './sales-add-return.component';

describe('SalesAddReturnComponent', () => {
  let component: SalesAddReturnComponent;
  let fixture: ComponentFixture<SalesAddReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesAddReturnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesAddReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
