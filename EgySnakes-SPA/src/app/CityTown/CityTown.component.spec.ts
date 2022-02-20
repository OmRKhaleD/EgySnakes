/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CityTownComponent } from './CityTown.component';

describe('CityTownComponent', () => {
  let component: CityTownComponent;
  let fixture: ComponentFixture<CityTownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityTownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityTownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
