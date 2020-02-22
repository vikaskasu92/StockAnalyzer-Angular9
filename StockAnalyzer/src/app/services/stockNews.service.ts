import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

import { StockNewsModel } from '../model/stockNews.model';

@Injectable({providedIn:'root'})
export class StockNewsService{
    
    constructor(private http:HttpClient){}
    articles = [];

    getStockNewsFromApi(ticker:string){
        return this.http.get<StockNewsModel>("http://newsapi.org/v2/everything",{
            params:{q:ticker,apiKey:'85435614dd924fb59fa2e2660585decb'},
            observe:'body'
        });
    }

}