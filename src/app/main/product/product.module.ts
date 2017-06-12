import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { Routes, RouterModule } from '@angular/router';

const productRoutes: Routes = [{ path: 'product', component: ProductComponent }]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes)
  ],
  declarations: [ProductComponent]
})
export class ProductModule { }
