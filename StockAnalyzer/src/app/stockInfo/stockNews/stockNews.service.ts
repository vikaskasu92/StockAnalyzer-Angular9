import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StockNewsModel } from './stockNews.model';
import { environment } from '../../../environments/environment'

@Injectable({providedIn:'root'})
export class StockNewsService{
    
    constructor(private http:HttpClient){}

    getStockNewsFromApi(ticker:string){
        return this.http.get<StockNewsModel>(environment.newsApiURL,{params:{q:ticker},observe:'body'});
    }

}