import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../models/user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userId: number = 0;
  user: User = {} as User;
  constructor(private activateRoute: ActivatedRoute,
              private userService: UserService) {
    this.userId = this.activateRoute.snapshot.params.id;
    this.userService.getUser(this.userId).subscribe((response:User) => {
      this.user = response;
    });
  }

  ngOnInit(): void {
  }

}
