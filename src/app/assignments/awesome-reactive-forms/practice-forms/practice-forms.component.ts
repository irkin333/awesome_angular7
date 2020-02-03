import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-practice-forms',
  templateUrl: './practice-forms.component.html',
  styleUrls: ['./practice-forms.component.scss']
})
export class PracticeFormsComponent implements OnInit {
  projectForm: FormGroup;
  statuses = ['Stable', 'Critical', 'Finished'];
  forbiddenProjectNames = ['Test'];

  constructor() { }

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectname': new FormControl(null, [Validators.required, this.forbiddenProjectName.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.projectForm.value)
  }

  forbiddenProjectName(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenProjectNames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true }
    }
    return null;
  }
}
