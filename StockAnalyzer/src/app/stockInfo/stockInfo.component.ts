import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params} from '@angular/router';
import { StockInfoService } from '../services/stockInfo.service';
import { ChartService } from '../services/chart.service';

@Component({
    templateUrl:"./stockInfo.component.html",
    styleUrls:["./stockInfo.component.css"]
})
export class StockInfo implements OnInit{
    
    currentTicker:string = '';
    timeSeries:string = "";
    tikerCloseData = [];
    isLoading:boolean = true;
    finalTickerPrice:number;
    priceChange:number;

    constructor(private router:ActivatedRoute, 
        private stockInfoService:StockInfoService,
        private chartService:ChartService
    ){}
    
    ngOnInit(){
        this.router.queryParams.subscribe((params:Params)=>{
          this.currentTicker = params['ticker'];
          this.timeSeries = params['timeSeries'];
          this.getStockDataOnTicker(this.currentTicker,this.timeSeries);
        });
    }

    getStockDataOnTicker(ticker:string, timeSeries:string){
        this.stockInfoService.getDataForTicker(ticker,timeSeries).subscribe(responseData => {
            let fromDate = this.stockInfoService.fromDate;
            for (let key in responseData){
                let currentDate = this.stockInfoService.getCurrentSplitDate(key);
                if(currentDate[0] === fromDate[0] && currentDate[1] === fromDate[1] && currentDate[2] < fromDate[2]){
                    break;
                }
                this.tikerCloseData.unshift(responseData[key]["4. close"]);
            }
            this.finalTickerPrice = this.tikerCloseData[this.tikerCloseData.length - 1];
            let previousprice = this.tikerCloseData[this.tikerCloseData.length - 2];
            this.priceChange = (this.finalTickerPrice - previousprice)/previousprice;
            this.isLoading = false;
            setTimeout( () => {
                this.chartService.drawChart(this.tikerCloseData,this.chartService.getColorOfLine(this.tikerCloseData));
            },0)
               },error => {
            console.log("Error Message : ",error.Message);
        });;
    }
}