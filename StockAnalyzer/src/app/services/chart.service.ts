import { Injectable } from '@angular/core';
import { Chart } from 'chart.js';

@Injectable({providedIn:'root'})
export class ChartService{

    chart:any;

    getColorOfLine(tikerCloseData){
        let first = tikerCloseData[0];
        let last = tikerCloseData[tikerCloseData.length - 1];
        let color = "#bae755"
        if(+first > +last){
             color = "#FF0000";
        }
        return color;
     }
 
     drawChart(dataInput, lineColor){
         this.chart = new Chart('canvas', {
             type: 'line',
             data: {
               labels: dataInput,
               datasets: [{
                 data: dataInput,
                 fill: false,
                 borderColor: lineColor
             }]
         },
         options: {
             scales: {
                 yAxes: [{
                     stacked: false
                 }]
             },
             legend: {
                 display: false
             }
         }
     });
     }

}