import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BankAccount } from '../interfaces/bank-account.interface';
import { Observable } from 'rxjs';
import { BankTransaction } from '../interfaces/bank-transaction.interface';

@Injectable({
  providedIn: 'root'
})
export class BankService{

  public url: string = 'https://localhost:7118/api/v1/BankAccount'
  constructor(private http: HttpClient) { }



  // addAccount(){
  //   this.http.post(`${this.url}add?amount=${this.amount}`, 
  //   { amount: this.amount }).subscribe( ( resp : any ) => {
  //       this.cuenta = resp
  //       this.msg = "Se ha añadido una nueva cuenta"
  //     });
  // }

  addAccount = (amount:number) => this.http.post(`${this.url}/add`, amount);

  getCuentas = (): Observable<BankAccount[]> => this.http.get<BankAccount[]>(`${this.url}/GetAll`);

  getByAccountNumber = (accountNumber: string): Observable<BankAccount> => this.http.get<BankAccount>(`${this.url}/GetByAccountNumber/${accountNumber}`);

  transacction = (request: BankTransaction) => this.http.post(`${this.url}/Transaction/`, request);

  deleteAccount = (accountNumber: string) => this.http.delete(`${this.url}/delete/${accountNumber}`);

}
