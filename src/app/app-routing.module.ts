import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './bank/pages/home-page/home-page.component';
import { AddPageComponent } from './bank/pages/add-page/add-page.component';

const routes: Routes = [
  {
    path: "home", 
    component: HomePageComponent
  },
  {
    path: "add", 
    component: AddPageComponent
  },
  {
    path: "**", 
    component: HomePageComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
