import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavHijoComponent } from './sidenav-hijo.component';

describe('SidenavHijoComponent', () => {
  let component: SidenavHijoComponent;
  let fixture: ComponentFixture<SidenavHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavHijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
