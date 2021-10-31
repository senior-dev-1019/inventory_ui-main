import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesReturnListComponent } from './sales-return-list.component';

describe('SalesReturnListComponent', () => {
  let component: SalesReturnListComponent;
  let fixture: ComponentFixture<SalesReturnListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesReturnListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesReturnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
