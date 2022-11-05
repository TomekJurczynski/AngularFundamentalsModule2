import { Component, OnInit, Input } from '@angular/core';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  isLoggedIn = true;
  logoutText = 'Logout';
  loginText = 'Login';
  username = 'User Name'
  infoTitle = 'Your List Is Empty';
  infoText = 'Please use ’Add New Course’ button to add your first course'
  infoButton = 'Add new course'

  buttonText = 'SHOW COURSE';
  iconDelete = faTrash;
  iconEdit = faEdit;

  constructor() { }

  ngOnInit(): void {
  }

}
