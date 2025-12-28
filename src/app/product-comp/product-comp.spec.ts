import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComp } from './product-comp';

describe('ProductComp', () => {
  let component: ProductComp;
  let fixture: ComponentFixture<ProductComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
