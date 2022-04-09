import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavWrapperComponent } from './sidenav-wrapper.component';

describe('WrapperComponent', () => {
  let component: SidenavWrapperComponent;
  let fixture: ComponentFixture<SidenavWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
