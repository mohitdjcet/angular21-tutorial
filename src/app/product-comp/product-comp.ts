import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-comp',
  imports: [],
  templateUrl: './product-comp.html',
  styleUrl: './product-comp.css',
})
export class ProductComp {
  productId!: string;

  constructor( private route: ActivatedRoute) {
    // this.productId = this.route.snapshot.paramMap.get('id') || '';
    this.route.paramMap.subscribe( (params)=>{
      this.productId = params.get('id') || '';
    })
  }
}
