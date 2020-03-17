import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awesome-animations',
  templateUrl: './awesome-animations.component.html',
  styleUrls: ['./awesome-animations.component.scss']
})
export class AwesomeAnimationsComponent implements OnInit {
  list = ['Milk', 'Sugar', 'Bread'];

  constructor() { }

  onAdd(item) {
    this.list.push(item);
  }

  ngOnInit(): void {
  }
}
