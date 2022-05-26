import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CurrencyValue {
   UAH: number;
   USD: number;
   EUR: number;
}

export interface Currency {
   base?: string;
   date?: string;
   motd?: { msg: string; url: string };
   rates?: CurrencyValue;
   success?: boolean;
}

@Injectable({
   providedIn: 'root',
})
export class CurrencyApiDataService {
   constructor(private http: HttpClient) {}

   getCurrencyData(currency: string): Observable<Currency> {
      let url = `https://api.exchangerate.host/latest?base=${currency}`;
      return this.http.get<Currency>(url);
   }
}
