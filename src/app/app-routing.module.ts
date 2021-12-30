import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashbordComponent} from "./dashbord/dashbord.component";
import {UsersComponent} from "./users/users.component";

const routes: Routes = [
  {
    path:'dashbord',
    component: DashbordComponent
  },
  {
    path:'users',
    component: UsersComponent
  },
  { path: '',   redirectTo: 'dashbord', pathMatch: 'full' },
  { path: '**', component: DashbordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
