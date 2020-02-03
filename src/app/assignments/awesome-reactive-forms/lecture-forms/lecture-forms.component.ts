import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-lecture-forms',
  templateUrl: './lecture-forms.component.html',
  styleUrls: ['./lecture-forms.component.scss']
})
export class LectureFormsComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signUpForm)
  }

  onAddHobby() {
    const control = new FormControl(null);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }
}
