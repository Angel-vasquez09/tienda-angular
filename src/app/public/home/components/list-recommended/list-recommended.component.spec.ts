/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListRecommendedComponent } from './list-recommended.component';

describe('ListRecommendedComponent', () => {
  let component: ListRecommendedComponent;
  let fixture: ComponentFixture<ListRecommendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRecommendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRecommendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
