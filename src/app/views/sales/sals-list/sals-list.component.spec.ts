import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalsListComponent } from './sals-list.component';

describe('SalsListComponent', () => {
  let component: SalsListComponent;
  let fixture: ComponentFixture<SalsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
