import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHijoComponent } from './dialog-hijo.component';

describe('DialogHijoComponent', () => {
  let component: DialogHijoComponent;
  let fixture: ComponentFixture<DialogHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogHijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
