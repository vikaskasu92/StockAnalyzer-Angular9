import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';

import { StockNewsService } from './stockNews.service';

@Component({
    selector:'app-stockNews',
    templateUrl:'./stockNews.component.html',
    styleUrls:['./stockNews.component.css']
})
export class StockNews implements OnInit{

    newsArticlesArray = [];
    constructor(private stockNewsService:StockNewsService, private route:ActivatedRoute){}
    ticker:string;
    isLoading:boolean = true;

    ngOnInit(){
        this.route.queryParams.subscribe( (params:Params) => {
            this.ticker = params['ticker'];
            this.getNewsForTicker(this.ticker);
        });
    }

    getNewsForTicker(ticker:string){
        setTimeout(()=>{
            this.stockNewsService.getStockNewsFromApi(ticker).subscribe( newsArticles => {
                for(let i=0; i<newsArticles.articles.length; i++){
                    this.newsArticlesArray.push(newsArticles.articles[i]);
                }
                this.isLoading = false;
            }); 
        },0);
    }

    moreInfo(url:string){
        window.open(url, "_blank");
    }

}