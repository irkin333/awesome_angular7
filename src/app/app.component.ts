import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'awesome-app';
  activeTab: string = 'recipes';

  onNavigate(tabName: string) {
    this.activeTab = tabName;
  }
}
