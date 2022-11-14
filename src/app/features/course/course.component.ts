import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  isLoggedIn = true;
  logoutText = 'Logout';
  loginText = 'Login';
  username = 'User Name'
  infoTitle = 'Your List Is Empty';
  infoText = 'Please use ’Add New Course’ button to add your first course'
  infoButton = 'Add new course'

  constructor() { }

  ngOnInit(): void {
  }

}
