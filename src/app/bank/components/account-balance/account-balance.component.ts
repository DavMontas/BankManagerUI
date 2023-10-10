import { Component } from '@angular/core';
import { BankAccount } from '../../interfaces/bank-account.interface';
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'bank-account-balance',
  templateUrl: './account-balance.component.html',
  styles: [
  ]
})
export class AccountBalanceComponent {

  constructor(private svc: BankService) { }

  public account: BankAccount = {
    accountNumber: '',
    amount: 0,
  }

  public getAmount(accountNumber: string): void{
    if(accountNumber.length > 9 || accountNumber == null) throw new Error("AccountNumber is required")
    this.svc.getByAccountNumber(accountNumber).subscribe( (resp) => {
      this.account.amount = resp.amount;
      console.log(resp)
    })
  }
}
