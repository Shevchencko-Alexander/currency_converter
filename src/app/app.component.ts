import { Component } from '@angular/core';
import { CurrencyApiDataService } from './currency-api-data.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
})
export class AppComponent {
   title = 'currency_converter';
   currentJSON: any = [];

   base = 'USD';
   country2 = 'USD';
   result: string = '1';

   changeBase(a: string) {
      this.base = a;
   }

   toCountry(b: string) {
      this.country2 = b;
   }

   constructor(private currency: CurrencyApiDataService) {}

   convert() {
      this.currency.getCurrencyData(this.base).subscribe((data) => {
         this.currentJSON = data;

         if (this.country2 === 'USD') {
            this.result = this.currentJSON.rates.USD;
         }

         if (this.country2 === 'UAH') {
            this.result = this.currentJSON.rates.UAH;
         }

         if (this.country2 === 'EUR') {
            this.result = this.currentJSON.rates.EUR;
         }
      });
   }
}
