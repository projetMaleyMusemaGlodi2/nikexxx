import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDeviceComponent } from './state-device.component';

describe('StateDeviceComponent', () => {
  let component: StateDeviceComponent;
  let fixture: ComponentFixture<StateDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
