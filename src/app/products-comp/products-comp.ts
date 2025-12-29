import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-comp',
  imports: [],
  templateUrl: './products-comp.html',
  styleUrl: './products-comp.css',
})
export class ProductsComp {
  category: string | null = null;
  sort: string | null = null;

  constructor( private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe( params => {
      this.category = params.get('category');
      this.sort = params.get('sort');
    })
  }
}
