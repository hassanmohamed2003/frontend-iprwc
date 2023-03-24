import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.interface";
import {BASE_URL} from "../app.component";

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit{


  constructor(private http: HttpClient) { }
  users: User[]=[];
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get<User[]>(BASE_URL + '/api/v1/user').pipe()
      .subscribe(user => {
          this.users = user;
        }
      )
  }

}
