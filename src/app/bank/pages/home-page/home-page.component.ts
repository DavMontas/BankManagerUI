import { Component } from '@angular/core';
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private svc: BankService){}


}
