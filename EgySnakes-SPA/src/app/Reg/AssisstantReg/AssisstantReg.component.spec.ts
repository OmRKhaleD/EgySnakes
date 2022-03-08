/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AssisstantRegComponent } from './AssisstantReg.component';

describe('AssisstantRegComponent', () => {
  let component: AssisstantRegComponent;
  let fixture: ComponentFixture<AssisstantRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssisstantRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssisstantRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
