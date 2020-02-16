import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, QueryParamsHandling } from '@angular/router';
import { Chart } from 'chart.js';
import { StockAnalyzerService } from '../stockAnalyzer.service';

@Component({
    templateUrl:"./stockInfo.component.html",
    styleUrls:["./stockInfo.component.css"],
    providers: [StockAnalyzerService]
})
export class StockInfo implements OnInit{
    
    currentTicker:String = '';

    constructor(private router:ActivatedRoute, private stockAnalyzerService:StockAnalyzerService){}

    chart:any ;
    
    ngOnInit(){
        this.router.queryParams.subscribe((params:Params)=>{
          this.currentTicker = params['ticker'];
          this.drawChart();
        });
    }

    getStockDataOnTicker(ticker:String){
        
    }

    drawChart(){
        this.chart = new Chart('canvas', {
            type: 'line',
            data: {
              labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
              datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    }
    
}