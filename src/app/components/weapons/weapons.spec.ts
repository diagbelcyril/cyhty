import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponsComponent } from './weapons';

describe('Weapons', () => {
  let component: WeaponsComponent;
  let fixture: ComponentFixture<WeaponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeaponsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
