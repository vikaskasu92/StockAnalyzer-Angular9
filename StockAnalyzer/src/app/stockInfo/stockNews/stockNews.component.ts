import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';

import { StockNewsService } from '../../services/stockNews.service';
import { StockNewsModel } from 'src/app/model/stockNews.model';

@Component({
    selector:'app-stockNews',
    templateUrl:'./stockNews.component.html',
    styleUrls:['./stockNews.component.css']
})
export class StockNews implements OnInit{

    newsArticlesArray = [];
    constructor(private stockNewsService:StockNewsService, private route:ActivatedRoute){}

    ngOnInit(){
        this.route.queryParams.subscribe( (params:Params) => {
            const ticker = params['ticker'];
            this.getNewsForTicker(ticker);
        });
    }

    getNewsForTicker(ticker:string){
        this.stockNewsService.getStockNewsFromApi(ticker).subscribe( newsArticles => {
            for(let i=0; i<newsArticles.articles.length; i++){
                this.newsArticlesArray.push(newsArticles.articles[i]);
            }
            console.log("responseData : ",this.newsArticlesArray);
        }); 
    }

}