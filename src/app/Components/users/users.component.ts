import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users: any = [];
  image: string = '';
  p: number = 0;
  totalUsers: any;
  loading: boolean = true;
  constructor(private _UsersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }
 
  getUsers() {
    this.loading = true;
    this._UsersService.getAllUsers().subscribe((response) => {
      this.users = response.data;
      this.loading = false;
    });
  }
}
