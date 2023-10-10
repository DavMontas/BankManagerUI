import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { SharedModule } from './shared/shared.module';
import { BankModule } from './bank/bank.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    
    MatToolbarModule,
    MatButtonModule,
    
    BrowserModule,
    AppRoutingModule,
    
    SharedModule,
    BankModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
