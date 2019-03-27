import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() tabIsChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  setTab(tabName:string) {
    this.tabIsChanged.emit(tabName);
  }

}
