import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService, AccountService]
})
export class NewAccountComponent {

  // ! NOTE: always provide all services
  constructor(private loggingService: LoggingService, private accountService: AccountService ) {
    this.accountService.statusUpdated.subscribe((status: string) => alert('New Status: ' + status))
  } 
  onCreateAccount(accountName: string, accountStatus: string) {
  
    this.accountService.addAccount(accountName, accountStatus)
    // this.loggingService.logStatusChange(accountStatus)
    // const service = new LoggingService()
    // service.logStatusChange(accountStatus)
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
