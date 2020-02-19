import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StockAnalyzerService{

    constructor(private http:HttpClient){}

    getDataForTicker(ticker:string){
        let searchParams = new HttpParams();
        searchParams = searchParams.append('function','TIME_SERIES_INTRADAY');
        searchParams = searchParams.append('symbol',ticker);
        searchParams = searchParams.append('interval','5min');
        searchParams = searchParams.append('apikey','DT7RMJ21B9IBYS9B');
        return this.http.get('https://www.alphavantage.co/query',
        {
            observe:'response',
            params: searchParams
        });
    }

}