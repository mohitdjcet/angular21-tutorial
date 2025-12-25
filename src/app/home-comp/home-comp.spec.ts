import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComp } from './home-comp';

describe('HomeComp', () => {
  let component: HomeComp;
  let fixture: ComponentFixture<HomeComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
