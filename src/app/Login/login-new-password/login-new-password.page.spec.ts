import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNewPasswordPage } from './login-new-password.page';

describe('LoginNewPasswordPage', () => {
  let component: LoginNewPasswordPage;
  let fixture: ComponentFixture<LoginNewPasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginNewPasswordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginNewPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
