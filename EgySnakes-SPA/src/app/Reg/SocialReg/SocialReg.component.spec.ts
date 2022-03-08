/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SocialRegComponent } from './SocialReg.component';

describe('SocialRegComponent', () => {
  let component: SocialRegComponent;
  let fixture: ComponentFixture<SocialRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
