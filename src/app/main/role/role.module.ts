import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import { Routes, RouterModule } from '@angular/router';
const roleRoutes: Routes = [
  { path: 'role', component: RoleComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(roleRoutes)
  ],
  declarations: [RoleComponent]
})
export class RoleModule { }
