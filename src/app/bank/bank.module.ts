import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankRoutingModule } from './bank-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { AccountBalanceComponent } from './components/account-balance/account-balance.component';
import { FormsModule } from '@angular/forms';
import { AccountTransactionComponent } from './components/account-transaction/account-transaction.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { AddAccountComponent } from './components/add-account/add-account.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AccountsListComponent,
    AccountBalanceComponent,
    AccountTransactionComponent,
    AddPageComponent,
    AddAccountComponent,
  ],
  imports: [
    CommonModule,
    BankRoutingModule,
    FormsModule
  ],
  exports:[
    HomePageComponent,
    AccountsListComponent
  ]
})
export class BankModule { }
