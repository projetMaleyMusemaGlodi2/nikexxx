import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserDialogComponentComponent } from './delete-user-dialog-component.component';

describe('DeleteUserDialogComponentComponent', () => {
  let component: DeleteUserDialogComponentComponent;
  let fixture: ComponentFixture<DeleteUserDialogComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteUserDialogComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUserDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
