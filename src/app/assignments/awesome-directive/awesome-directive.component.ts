import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awesome-directive',
  templateUrl: './awesome-directive.component.html'
})
export class AwesomeDirectiveComponent implements OnInit {
  testCondition: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
