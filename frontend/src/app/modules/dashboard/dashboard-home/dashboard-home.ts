import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-home.html',
  styleUrls: ['./dashboard-home.css']
})
export class DashboardHome implements OnInit {

  userRole = '';
  userName = '';

  records = [
    {
      employee: 'Lokesh Kumar',
      department: 'Engineering',
      access: 'Admin',
      status: 'Active'
    },
    {
      employee: 'Rahul Sharma',
      department: 'HR',
      access: 'General User',
      status: 'Pending'
    }
  ];

  constructor(private router: Router){}

  ngOnInit(): void {

    const user:any = localStorage.getItem('user');

    const parsedUser = JSON.parse(user);

    this.userRole = parsedUser.role;
    this.userName = parsedUser.userId;

    this.records.unshift({
      employee: this.userName,
      department: 'Current Session',
      access: this.userRole,
      status: 'Active'
    });

  }

  addUser(){

    alert('Add User Feature Triggered');

  }

  editUser(){

    alert('Edit User Feature Triggered');

  }

  deleteUser(){

    alert('Delete User Feature Triggered');

  }

  logout(){

    localStorage.clear();

    this.router.navigate(['/']);

  }

}