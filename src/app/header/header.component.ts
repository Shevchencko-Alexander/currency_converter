import { Component, OnInit } from '@angular/core';
import { CurrencyApiDataService } from '../currency-api-data.service';

@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
   currentJSON: any = [];

   USD = 'USD';
   EUR = 'EUR';
   resultUSD = '';
   resultEUR = '';

   constructor(private currency: CurrencyApiDataService) {}

   ngOnInit(): void {
      this.currency.getCurrencyData(this.USD).subscribe((data) => {
         this.currentJSON = data;

         this.resultUSD = this.currentJSON.rates.UAH;
      });

      this.currency.getCurrencyData(this.EUR).subscribe((data) => {
         this.currentJSON = data;

         this.resultEUR = this.currentJSON.rates.UAH;
      });
   }
}
