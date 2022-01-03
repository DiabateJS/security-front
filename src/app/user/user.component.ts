import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../models/user";
import {UserService} from "../user.service";
import {ResponseData} from "../models/response-data";
import {SUCESS} from "../models/constants";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userId: number = 0;
  user: User = {} as User;
  constructor(private router: Router,
              private activateRoute: ActivatedRoute,
              private userService: UserService) {
    this.userId = this.activateRoute.snapshot.params.id;
    this.userService.getUser(this.userId).subscribe((response:User) => {
      this.user = response;
    });
  }

  ngOnInit(): void {
  }

  updateUser(){
    this.user.id = ''+this.userId;
    this.userService.updateUser(this.user).subscribe((response: ResponseData) => {
      console.log(response);
    });
  }

  deleteUser(){
    this.userService.deleteUser(this.userId).subscribe((response: ResponseData) => {
        if (response.code == SUCESS){
          this.router.navigate(['/users']);
        }
    });
  }

}
