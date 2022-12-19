import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Component2Component } from './component2/component2.component';

const routes: Routes = [
  {
    path:'',component:MainComponent
  },
  {
    path:'2',component:Component2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
