import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import {ResponseData} from "../models/response-data";
import {UserService} from "../user.service";
import {SUCESS} from "../models/constants";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  user: User = {} as User ;
  constructor(private router: Router,
              private userService: UserService) {
  }

  ngOnInit(): void {
  }

  createUser(){
    console.log(this.user);
    this.userService.createUser(this.user).subscribe((response: ResponseData) => {
      if (response.code === SUCESS){
        this.router.navigate(['/users']);
      }
    });
  }

}
