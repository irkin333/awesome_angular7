import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-awesome-reactive-forms',
  templateUrl: './awesome-reactive-forms.component.html',
  styleUrls: ['./awesome-reactive-forms.component.scss']
})
export class AwesomeReactiveFormsComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('female')
    });
  }

  onSubmit() {
    console.log(this.signUpForm)
  }
}
