import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { AboutsComponent } from './abouts/abouts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SampleComponent } from './sample/sample.component';
import { MenuComponent } from './menu/menu.component';
import { HeroesComponent } from './heroes/heroes.component';
import { CustomersComponent } from './customers/customers.component';
const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"abouts",
    component:AboutsComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"sample",
    component:SampleComponent
  },
  {
    path:"menu",
    component:MenuComponent
  },
  {
    path:"heroes",
    component:HeroesComponent
  },
  {
    path:"customers",
    component:CustomersComponent
  },
  {
path:"",
redirectTo:"/login",
pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
