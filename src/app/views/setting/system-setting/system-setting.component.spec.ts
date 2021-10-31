import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemSettingComponent } from './system-setting.component';

describe('SystemSettingComponent', () => {
  let component: SystemSettingComponent;
  let fixture: ComponentFixture<SystemSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
