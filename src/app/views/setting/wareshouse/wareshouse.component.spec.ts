import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WareshouseComponent } from './wareshouse.component';

describe('WareshouseComponent', () => {
  let component: WareshouseComponent;
  let fixture: ComponentFixture<WareshouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WareshouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WareshouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
