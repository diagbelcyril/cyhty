import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mythic } from './mythic';

describe('Mythic', () => {
  let component: Mythic;
  let fixture: ComponentFixture<Mythic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mythic],
    }).compileComponents();

    fixture = TestBed.createComponent(Mythic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
