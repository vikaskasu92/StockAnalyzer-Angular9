import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { BestSearch } from '../model/bestSearch.model'

@Injectable()
export class StockInfoService{

    constructor(private http:HttpClient){}
    isTimeSeriesNotIntraday:boolean = false;
    returnedTimeSeries:string = "";
    fromDate = [];
    tickerName:BestSearch[] = [];

    getDataForTicker(ticker:string, timeSeries:string){
        this.getTimeSeries(timeSeries);
        let searchParams = new HttpParams();
        searchParams = searchParams.append('symbol',ticker);
        if(this.isTimeSeriesNotIntraday){
            searchParams = searchParams.append('interval',this.getTimeSeries(timeSeries));
            searchParams = searchParams.append('function','TIME_SERIES_INTRADAY');
        }else{
            searchParams = searchParams.append('function',this.getTimeSeries(timeSeries));
        }
         return this.http.get('https://www.alphavantage.co/query',{observe:'body',params: searchParams}).pipe(map( data => {return data[this.returnedTimeSeries]}));
    }

    getSymbolName(ticker:string){
        return this.http.get<BestSearch>("https://www.alphavantage.co/query",{observe:'body',params:{'function':'SYMBOL_SEARCH','keywords':ticker}}).pipe(map( responseData => { return responseData.bestMatches } ));
    }

    getTimeSeries(timeSeries:string){
        if(timeSeries === 'TIME_SERIES_INTRADAY_1'){
            this.returnedTimeSeries = "Time Series (1min)";
            this.isTimeSeriesNotIntraday = true;
            return '1min';
        }else if(timeSeries === 'TIME_SERIES_INTRADAY_5'){
            this.returnedTimeSeries = "Time Series (5min)";
            this.isTimeSeriesNotIntraday = true;
            return '5min'
        }else if(timeSeries === 'TIME_SERIES_DAILY_1'){
            this.returnedTimeSeries = "Time Series (Daily)";
            this.isTimeSeriesNotIntraday = false;
            this.getFromMonth(1);
            return 'TIME_SERIES_DAILY'
        }else if(timeSeries === 'TIME_SERIES_DAILY_3'){
            this.returnedTimeSeries = "Time Series (Daily)";
            this.isTimeSeriesNotIntraday = false;
            this.getFromMonth(3);
            return 'TIME_SERIES_DAILY'
        }else if(timeSeries === 'TIME_SERIES_DAILY_5'){
            this.returnedTimeSeries = "Time Series (Daily)";
            this.isTimeSeriesNotIntraday = false;
            this.getFromMonth(5);
            return 'TIME_SERIES_DAILY'
        }else if(timeSeries === 'TIME_SERIES_DAILY_12'){
            this.returnedTimeSeries = "Weekly Time Series";
            this.isTimeSeriesNotIntraday = false;
            this.getFromMonth(12);
            return 'TIME_SERIES_WEEKLY'
        }else if(timeSeries === 'TIME_SERIES_DAILY_60'){
            this.returnedTimeSeries = "Weekly Time Series";
            this.isTimeSeriesNotIntraday = false;
            this.getFromMonth(60);
            return 'TIME_SERIES_WEEKLY'     
        }

    }

    getFromMonth(reduceBy:number){
        let date = new Date();
        date.setMonth(date.getMonth() - reduceBy);
        let splitDate = this.splitIt(date);
        this.fromDate.push(splitDate[2]);
        this.fromDate.push(this.getMonth(splitDate));
        this.fromDate.push(splitDate[1]);
    }

    getMonth(splitDate){
        let beforeMonth = splitDate[0];
        if(beforeMonth.length === 1){
            beforeMonth = "0"+beforeMonth;
        }
        return beforeMonth;
    }

    splitIt(date:Date){
       return date.toLocaleDateString().split("/");
    }

    getCurrentSplitDate(currentDate:string){
       return currentDate.split("-");
    }
}