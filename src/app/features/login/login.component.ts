import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  regArry: any = {};

  email: string = '';
  password: string = '';

  // form: FormGroup;

  // constructor(private fb: FormBuilder) {
  //   this.form = fb.group({
  //     email: ["", [
  //       Validators.required
  //     ]],
  //     password: ["", Validators.required]
  //   });
  //  }

  ngOnInit(): void {
  }


  onSubmit(login: any) {
    console.log(login);
  }
}
