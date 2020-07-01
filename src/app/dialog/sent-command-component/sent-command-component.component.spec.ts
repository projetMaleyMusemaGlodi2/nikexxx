import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentCommandComponentComponent } from './sent-command-component.component';

describe('SentCommandComponentComponent', () => {
  let component: SentCommandComponentComponent;
  let fixture: ComponentFixture<SentCommandComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentCommandComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentCommandComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
