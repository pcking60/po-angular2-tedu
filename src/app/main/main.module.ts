import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { mainRoutes } from './main.routes';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { FunctionModule } from './function/function.module';
import { ProductModule } from './product/product.module';
@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    UserModule,
    RoleModule,
    FunctionModule,
    ProductModule,
    RouterModule.forChild(mainRoutes)
  ],
  declarations: [MainComponent]
})
export class MainModule { }
