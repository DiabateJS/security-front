import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../models/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((response: User[]) => {
        this.users = response;
    });
  }

  writePassword(pass: string): string {
    let res = '';
    for (let i = 0 ; i < pass.length ; i++){
      res += '*';
    }
    return res;
  }

}
