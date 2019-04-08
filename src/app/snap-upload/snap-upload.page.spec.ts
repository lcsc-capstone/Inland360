import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapUploadPage } from './snap-upload.page';

describe('SnapUploadPage', () => {
  let component: SnapUploadPage;
  let fixture: ComponentFixture<SnapUploadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnapUploadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapUploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
