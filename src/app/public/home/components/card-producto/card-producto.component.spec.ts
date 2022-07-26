/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardProductoComponent } from './card-producto.component';

describe('CardProductoComponent', () => {
  let component: CardProductoComponent;
  let fixture: ComponentFixture<CardProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
