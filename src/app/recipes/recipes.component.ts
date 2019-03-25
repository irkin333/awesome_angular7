import { Component, OnInit } from '@angular/core';
import {logWarnings} from "protractor/built/driverProviders";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
