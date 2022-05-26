import { Currency } from './../currency-api-data.service';
import { Component, OnInit } from '@angular/core';
import { CurrencyApiDataService } from '../currency-api-data.service';

@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
   constructor(private currency: CurrencyApiDataService) {}

   getTargetCurrency = (targetCurrency: string) => {
      this.currency.getCurrencyData(targetCurrency).subscribe((data) => {
         this.currencyArray = data;

         targetCurrency === this.USD
            ? (this.resultUSD = this.currencyArray.rates!.UAH)
            : (this.resultEUR = this.currencyArray.rates!.UAH);
      });
   };

   currencyArray: Currency = {};

   USD = 'USD';
   EUR = 'EUR';
   resultUSD = 0;
   resultEUR = 0;

   ngOnInit(): void {
      this.getTargetCurrency(this.USD);
      this.getTargetCurrency(this.EUR);
   }
}
