import { Injectable } from '@angular/core';
import { Chart } from 'chart.js';

@Injectable({providedIn:'root'})
export class ChartService{
    chart:any;

    getColorOfLine(tikerCloseData:any){
        let first = tikerCloseData[0];
        let last = tikerCloseData[tikerCloseData.length - 1];
        let color = "#093"
        if(+first > +last){
             color = "#FF0000";
        }
        return color;
     }
 
     drawChart(dataInput:any, lineColor:any){
         this.chart = new Chart('canvas', {
             type: 'line',
             data: {
               labels: dataInput,
               datasets: [{
                 data: dataInput,
                 fill: true,
                 borderColor: lineColor
             }]
         },
         options: {
             scales: {
                 yAxes: [{
                     stacked: false
                 }],
                 xAxes: [{
                    ticks: {
                        display: false //this will remove only the label
                    }
                }]
             },
             legend: {
                 display: false
             }
         }
     });
     }

}