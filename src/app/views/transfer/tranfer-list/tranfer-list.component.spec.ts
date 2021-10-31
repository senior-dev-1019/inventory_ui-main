import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranferListComponent } from './tranfer-list.component';

describe('TranferListComponent', () => {
  let component: TranferListComponent;
  let fixture: ComponentFixture<TranferListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranferListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
