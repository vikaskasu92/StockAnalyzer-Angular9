import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params} from '@angular/router';
import { StockAnalyzerService } from '../services/stockAnalyzer.service';
import { HttpClient } from '@angular/common/http';
import { ChartService } from '../services/chart.service';

@Component({
    templateUrl:"./stockInfo.component.html",
    styleUrls:["./stockInfo.component.css"],
    providers:[StockAnalyzerService]
})
export class StockInfo implements OnInit{
    
    currentTicker:string = '';
    timeSeries:string = "";
    tikerCloseData = [];

    constructor(private router:ActivatedRoute, 
        private stockAnalyzerService:StockAnalyzerService,
        private http:HttpClient, 
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
        this.stockAnalyzerService.getDataForTicker(ticker,timeSeries).subscribe(responseData => {
            const data = responseData[this.stockAnalyzerService.returnedTimeSeries];
            let fromDate = this.stockAnalyzerService.fromDate;
            for (let key in data){
                let currentDate = this.stockAnalyzerService.getCurrentSplitDate(key);
                if(currentDate[0] === fromDate[0] && currentDate[1] == fromDate[1] && currentDate[2] < fromDate[2]){
                    break;
                }
                this.tikerCloseData.unshift(data[key]["4. close"]);
            }
            this.chartService.drawChart(this.tikerCloseData,this.chartService.getColorOfLine(this.tikerCloseData));
        },error =>{
            console.log("Error Message : ",error.Message);
        });;
    }

    
    
}