import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComp } from './about-comp';

describe('AboutComp', () => {
  let component: AboutComp;
  let fixture: ComponentFixture<AboutComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
