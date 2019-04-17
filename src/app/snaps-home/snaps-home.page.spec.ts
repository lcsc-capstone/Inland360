import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapsHomePage } from './snaps-home.page';

describe('SnapsHomePage', () => {
  let component: SnapsHomePage;
  let fixture: ComponentFixture<SnapsHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnapsHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapsHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
