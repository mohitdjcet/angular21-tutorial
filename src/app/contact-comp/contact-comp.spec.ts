import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComp } from './contact-comp';

describe('ContactComp', () => {
  let component: ContactComp;
  let fixture: ComponentFixture<ContactComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
