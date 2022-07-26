/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardPromoComponent } from './card-promo.component';

describe('CardPromoComponent', () => {
  let component: CardPromoComponent;
  let fixture: ComponentFixture<CardPromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
