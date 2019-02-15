import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapsListPage } from './snaps-list.page';

describe('SnapsListPage', () => {
  let component: SnapsListPage;
  let fixture: ComponentFixture<SnapsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnapsListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
