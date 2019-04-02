import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-assign',
  templateUrl: './service-assign.component.html',
  styleUrls: ['./service-assign.component.scss']
})
export class ServiceAssignComponent {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
