import { Component, OnInit } from '@angular/core';
import { AccountsService } from './services/accounts.service';

@Component({
  selector: 'app-service-example',
  templateUrl: './awesome-services.component.html',
  providers: [AccountsService]
})
export class AwesomeServicesComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }

  onAccountAdded($event) {
    console.log($event);
  }
}
