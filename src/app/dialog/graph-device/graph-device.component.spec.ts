import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphDeviceComponent } from './graph-device.component';

describe('GraphDeviceComponent', () => {
  let component: GraphDeviceComponent;
  let fixture: ComponentFixture<GraphDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
