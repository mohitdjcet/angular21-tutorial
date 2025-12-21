import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child } from './child';

describe('Child', () => {
  let component: Child;
  let fixture: ComponentFixture<Child>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
