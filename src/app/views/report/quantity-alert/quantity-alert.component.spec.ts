import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityAlertComponent } from './quantity-alert.component';

describe('QuantityAlertComponent', () => {
  let component: QuantityAlertComponent;
  let fixture: ComponentFixture<QuantityAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantityAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
