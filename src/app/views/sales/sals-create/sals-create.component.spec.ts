import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalsCreateComponent } from './sals-create.component';

describe('SalsCreateComponent', () => {
  let component: SalsCreateComponent;
  let fixture: ComponentFixture<SalsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
