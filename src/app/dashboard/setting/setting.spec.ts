import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Setting } from './setting';

describe('Setting', () => {
  let component: Setting;
  let fixture: ComponentFixture<Setting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Setting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Setting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
