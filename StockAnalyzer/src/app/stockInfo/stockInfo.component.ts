import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params} from '@angular/router';
import { Chart } from 'chart.js';
import { StockAnalyzerService } from '../services/stockAnalyzer.service';
import { HttpClient } from '@angular/common/http';

@Component({
    templateUrl:"./stockInfo.component.html",
    styleUrls:["./stockInfo.component.css"],
    providers:[StockAnalyzerService]
})
export class StockInfo implements OnInit{
    
    currentTicker:string = '';
    timeSeries:string = "";

    constructor(private router:ActivatedRoute, private stockAnalyzerService:StockAnalyzerService,private http:HttpClient){}

    chart:any ;
    
    ngOnInit(){
        this.router.queryParams.subscribe((params:Params)=>{
          this.currentTicker = params['ticker'];
          this.timeSeries = params['timeSeries'];
          this.getStockDataOnTicker(this.currentTicker,this.timeSeries);
          this.drawChart();
        });
    }

    getStockDataOnTicker(ticker:string, timeSeries:string){
        this.stockAnalyzerService.getDataForTicker(ticker,timeSeries).subscribe(responseData => {
            console.log("Response : ",responseData);
        },error =>{
            console.log("Error Message : ",error.Message);
        });;
    }

    drawChart(){
        this.chart = new Chart('canvas', {
            type: 'line',
            data: {
              labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
              datasets: [{
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                borderColor: "#bae755"
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });
    }
    
}