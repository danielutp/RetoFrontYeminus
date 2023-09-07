/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EncriptarComponent } from './encriptar.component';

describe('EncriptarComponent', () => {
  let component: EncriptarComponent;
  let fixture: ComponentFixture<EncriptarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncriptarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncriptarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
