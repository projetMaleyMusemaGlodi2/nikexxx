import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasureDeviceComponentComponent } from './measure-device-component.component';

describe('MeasureDeviceComponentComponent', () => {
  let component: MeasureDeviceComponentComponent;
  let fixture: ComponentFixture<MeasureDeviceComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasureDeviceComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasureDeviceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
