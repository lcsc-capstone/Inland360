import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapsNewAccountPage } from './snaps-new-account.page';

describe('SnapsNewAccountPage', () => {
  let component: SnapsNewAccountPage;
  let fixture: ComponentFixture<SnapsNewAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnapsNewAccountPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapsNewAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
