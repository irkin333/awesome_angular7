import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awesome-td-forms',
  templateUrl: './awesome-td-forms.component.html',
  styleUrls: ['./awesome-td-forms.component.scss']
})
export class AwesomeTDFormsComponent implements OnInit {
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }

  constructor() { }

  ngOnInit() {
  }

  suggestUser(f) {
    const suggestedName = 'Superuser';

    /* set the whole form */
    // f.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   questionAnswer: '',
    //   secret: 'pet',
    //   gender: 'male'
    // });

    /* set specific form fields */
    f.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }

  onSubmit(f) {
    console.log(f);
    this.user.username = f.value.userData.username;
    this.user.email = f.value.userData.email;
    this.user.secretQuestion = f.value.secret;
    this.user.answer = f.value.questionAnswer;
    this.user.gender = f.value.gender;
  }

  onReset(f) {
    f.reset();
  }
}
