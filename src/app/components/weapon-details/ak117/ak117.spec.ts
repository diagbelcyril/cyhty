import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ak117Component } from './ak117';

describe('WeaponDetail', () => {
  let component: ak117Component;
  let fixture: ComponentFixture<ak117Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ak117Component],
    }).compileComponents();

    fixture = TestBed.createComponent(ak117Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
