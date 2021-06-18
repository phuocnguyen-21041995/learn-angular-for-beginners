/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VnrKpiComponent } from './vnr-kpi.component';

describe('VnrKpiComponent', () => {
  let component: VnrKpiComponent;
  let fixture: ComponentFixture<VnrKpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VnrKpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VnrKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
