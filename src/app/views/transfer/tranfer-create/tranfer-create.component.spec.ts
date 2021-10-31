import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranferCreateComponent } from './tranfer-create.component';

describe('TranferCreateComponent', () => {
  let component: TranferCreateComponent;
  let fixture: ComponentFixture<TranferCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranferCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranferCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
