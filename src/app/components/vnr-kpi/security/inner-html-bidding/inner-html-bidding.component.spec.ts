/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InnerHtmlBiddingComponent } from './inner-html-bidding.component';

describe('InnerHtmlBiddingComponent', () => {
  let component: InnerHtmlBiddingComponent;
  let fixture: ComponentFixture<InnerHtmlBiddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerHtmlBiddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerHtmlBiddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
