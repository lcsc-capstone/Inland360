import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapsUploadPage } from './snaps-upload.page';

describe('SnapsUploadPage', () => {
  let component: SnapsUploadPage;
  let fixture: ComponentFixture<SnapsUploadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnapsUploadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapsUploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
