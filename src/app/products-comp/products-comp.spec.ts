import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComp } from './products-comp';

describe('ProductsComp', () => {
  let component: ProductsComp;
  let fixture: ComponentFixture<ProductsComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
