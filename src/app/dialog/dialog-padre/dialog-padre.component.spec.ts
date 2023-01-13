import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPadreComponent } from './dialog-padre.component';

describe('DialogPadreComponent', () => {
  let component: DialogPadreComponent;
  let fixture: ComponentFixture<DialogPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
