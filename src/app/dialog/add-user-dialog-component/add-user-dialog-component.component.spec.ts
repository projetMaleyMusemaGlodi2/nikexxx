import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserDialogComponentComponent } from './add-user-dialog-component.component';

describe('AddUserDialogComponentComponent', () => {
  let component: AddUserDialogComponentComponent;
  let fixture: ComponentFixture<AddUserDialogComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserDialogComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
