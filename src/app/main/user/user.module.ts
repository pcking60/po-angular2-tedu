import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { Routes, RouterModule } from '@angular/router';

export const userRoutes: Routes = [
  {path:'user', component:UserComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [UserComponent]
})
export class UserModule { }
