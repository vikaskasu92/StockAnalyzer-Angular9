import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StockNewsModel } from './stockNews.model';

@Injectable({providedIn:'root'})
export class StockNewsService{
    
    constructor(private http:HttpClient){}

    getStockNewsFromApi(ticker:string){
        return this.http.get<StockNewsModel>("http://newsapi.org/v2/everything",{params:{q:ticker},observe:'body'});
    }

}