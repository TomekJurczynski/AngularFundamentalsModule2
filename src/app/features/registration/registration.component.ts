import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  // regArry: any = {};

  // email: string = '';
  // password: string = '';
  // name: string = '';

  public signupForm !: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required, Validators.maxLength],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(login: any) {
    console.log(login);
  }
}
