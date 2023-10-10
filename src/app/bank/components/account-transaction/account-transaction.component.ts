import { Component } from '@angular/core';
import { BankService } from '../../services/bank.service';
import { BankTransaction } from '../../interfaces/bank-transaction.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'bank-account-transaction',
  templateUrl: './account-transaction.component.html',
  styles: [
  ]
})
export class AccountTransactionComponent {


  constructor(private svc: BankService, private router:Router) { }

  public formRequest: BankTransaction = {
    accountFrom:'',
    accountTo: '',
    amount: 0
  }

  transaction(){
    if(this.formRequest.accountFrom == null || this.formRequest.accountTo ==null || this.formRequest.amount == 0) return;
    
    this.svc.transacction(this.formRequest).subscribe( (resp) => {
      this.router.navigate(['/']);
    });
    
  }
}
