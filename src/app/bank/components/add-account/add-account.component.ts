import { Component } from '@angular/core';
import { BankService } from '../../services/bank.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bank-add-account',
  templateUrl: './add-account.component.html',
  styles: [
  ]
})
export class AddAccountComponent {

  public amount: number = 0;

  constructor(private svc: BankService, private router: Router){}

  public createAccount(): void{
    this.svc.addAccount(this.amount)
    .subscribe( resp => {
      console.log(resp)
      this.router.navigate(['/'])
    })
  }
  
}
