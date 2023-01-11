import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavPadreComponent } from './sidenav-padre.component';

describe('SidenavPadreComponent', () => {
  let component: SidenavPadreComponent;
  let fixture: ComponentFixture<SidenavPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavPadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
