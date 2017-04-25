import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';
import { UserService } from '../shared/user.service';
import {IUser} from "../shared/model/iuser";
import {FirebaseObjectObservable} from "angularfire2";

@Component({
  selector: 'app-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.css']
})
export class DebtsComponent implements OnInit {
  user: FirebaseObjectObservable<IUser>;
  constructor(public userService: UserService) {
    this.user = userService.user;
  }
  ngOnInit() {
  }

}
