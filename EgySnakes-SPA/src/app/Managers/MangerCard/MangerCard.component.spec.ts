/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MangerCardComponent } from './MangerCard.component';

describe('MangerCardComponent', () => {
  let component: MangerCardComponent;
  let fixture: ComponentFixture<MangerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
