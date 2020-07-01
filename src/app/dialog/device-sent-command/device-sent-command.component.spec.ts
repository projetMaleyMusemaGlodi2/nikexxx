import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceSentCommandComponent } from './device-sent-command.component';

describe('DeviceSentCommandComponent', () => {
  let component: DeviceSentCommandComponent;
  let fixture: ComponentFixture<DeviceSentCommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceSentCommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceSentCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
