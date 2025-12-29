import { Routes } from '@angular/router';
import { ProductComp } from './product-comp/product-comp';
import { ProductsComp } from './products-comp/products-comp';

export const routes: Routes = [
    { path: 'product/:id', component: ProductComp},
    { path: 'products', component: ProductsComp}
];
