import { Component, Input, OnInit } from '@angular/core';
import { BankService } from '../../services/bank.service';
import { BankAccount } from '../../interfaces/bank-account.interface';

@Component({
  selector: 'bank-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit {
  
  public list!: BankAccount[];

  constructor(private svc: BankService){  }

  ngOnInit(): void {
    this.getList()
  }


  public getList(): void{
    this.svc.getCuentas().subscribe( (resp) => {
      this.list = resp
    })
  }

  public delete(accountNumber: string): void{
    this.svc.deleteAccount(accountNumber)
      .subscribe( (resp) => {
        this.getList()
      })
  }
}
