import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionComponent } from './function.component';
import {Routes, RouterModule} from '@angular/router'

const functionroutes: Routes = [ { path:'function', component: FunctionComponent}]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(functionroutes)
  ],
  declarations: [FunctionComponent]
})
export class FunctionModule { }
