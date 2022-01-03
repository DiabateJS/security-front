import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashbordComponent} from "./dashbord/dashbord.component";
import {UsersComponent} from "./users/users.component";
import {UserComponent} from "./user/user.component";
import {NewUserComponent} from "./new-user/new-user.component";

const routes: Routes = [
  {
    path:'dashbord',
    component: DashbordComponent
  },
  {
    path:'users',
    component: UsersComponent
  },
  {
    path:'new-user',
    component: NewUserComponent
  },
  {
    path:'user/:id',
    component: UserComponent
  },
  { path: '',   redirectTo: 'users', pathMatch: 'full' },
  { path: '**', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
