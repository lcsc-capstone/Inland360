import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHomePage } from './event-home.page';

describe('EventHomePage', () => {
  let component: EventHomePage;
  let fixture: ComponentFixture<EventHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
