import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';
import { MashqComponent } from './components/mashq/mashq.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'yonetici_paneli' , component:Test1Component},
  {path:'t2' , component:Test2Component},
  {path:'mashq' , component:MashqComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
