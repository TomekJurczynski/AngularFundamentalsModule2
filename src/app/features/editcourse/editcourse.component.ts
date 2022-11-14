import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css']
})
export class EditcourseComponent implements OnInit {

  public editForm !: FormGroup;

  author = [''];

  constructor(private formBuilder: FormBuilder) { }

  // authordata = new FormGroup({
  //   authorName: new FormControl(''),
  // })

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      duration: ['', Validators.required, Validators.min],
      authorName: ['']
    })
  }

  onSubmit(login: any) {
    console.log(login);
  }

  addAuthor() {
    //this.author.push(val + ',');
    this.author.push(this.editForm.controls['authorName'].value + ',');
  }

  calculateTime(number: number) {
    var totalTimeInMinutes = number;
    var hour = Math.floor(totalTimeInMinutes / 60);
    var minutes = totalTimeInMinutes % 60;
    var hourString = hour.toString();
    var minutesString = minutes.toString();
    if (minutesString.length < 2) {
      minutesString = '0' + minutesString;
    }
    return `${hourString}:${minutesString} hours`;
  }

}
