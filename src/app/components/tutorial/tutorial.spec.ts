import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialComponent } from './tutorial';

describe('Tutorial', () => {
  let component: TutorialComponent;
  let fixture: ComponentFixture<TutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorialComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
