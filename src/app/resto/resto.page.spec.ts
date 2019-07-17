import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoPage } from './resto.page';

describe('RestoPage', () => {
  let component: RestoPage;
  let fixture: ComponentFixture<RestoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
