import { Currency } from './../currency-api-data.service';
import { Component } from '@angular/core';
import { CurrencyApiDataService } from '../currency-api-data.service';

@Component({
   selector: 'app-converter',
   templateUrl: './converter.component.html',
   styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent {
   constructor(private currency: CurrencyApiDataService) {}

   converter = (
      targetCurrency: { id: number; value: string },
      secondCurrency: string,
      targetInput: string
   ) => {
      this.currency.getCurrencyData(targetCurrency.value).subscribe((data) => {
         this.currencyArray = data;

         switch (secondCurrency) {
            case 'USD':
               this.result =
                  this.currencyArray.rates!.USD * Number(targetInput);
               break;
            case 'UAH':
               this.result =
                  this.currencyArray.rates!.UAH * Number(targetInput);
               break;
            case 'EUR':
               this.result =
                  this.currencyArray.rates!.EUR * Number(targetInput);
               break;

            default:
               break;
         }

         if (targetCurrency.id === 1) {
            this.secondInput = this.result.toString();
         }

         if (targetCurrency.id === 2) {
            this.firstInput = this.result.toString();
         }
      });
   };

   currencyArray: Currency = {};

   firstCurrency = { id: 1, value: 'USD' };
   secondCurrency = { id: 2, value: 'USD' };

   firstInput = '1';
   secondInput = '1';

   result = 1;

   changeFirstCurrency(currencyValue: string) {
      this.firstCurrency.value = currencyValue;
      this.converter(
         this.firstCurrency,
         this.secondCurrency.value,
         this.firstInput
      );
   }

   changeSecondCurrency(currencyValue: string) {
      this.secondCurrency.value = currencyValue;
      this.converter(
         this.secondCurrency,
         this.firstCurrency.value,
         this.secondInput
      );
   }

   changeFirstInput() {
      this.converter(
         this.firstCurrency,
         this.secondCurrency.value,
         this.firstInput
      );
   }

   changeSecondInput() {
      this.converter(
         this.secondCurrency,
         this.firstCurrency.value,
         this.secondInput
      );
   }
}
