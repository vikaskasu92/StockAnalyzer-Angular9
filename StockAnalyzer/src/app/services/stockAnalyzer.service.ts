import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StockAnalyzerService{

    constructor(private http:HttpClient){}
    isTimeSeriesNotIntraday:boolean = false;

    getDataForTicker(ticker:string, timeSeries:string){
        this.getTimeSeries(timeSeries);
        let searchParams = new HttpParams();
        searchParams = searchParams.append('function','TIME_SERIES_INTRADAY');
        searchParams = searchParams.append('symbol',ticker);
        if(this.isTimeSeriesNotIntraday){
            searchParams = searchParams.append('interval',this.getTimeSeries(timeSeries));
            searchParams = searchParams.append('function','TIME_SERIES_INTRADAY');
        }else{
            searchParams = searchParams.append('function',this.getTimeSeries(timeSeries));
        }
        searchParams = searchParams.append('apikey','DT7RMJ21B9IBYS9B');
        return this.http.get('https://www.alphavantage.co/query',
        {
            observe:'response',
            params: searchParams
        });
    }

    getTimeSeries(timeSeries:string){
        if(timeSeries === 'TIME_SERIES_INTRADAY_1'){
            this.isTimeSeriesNotIntraday = true;
            return '1min';
        }else if(timeSeries === 'TIME_SERIES_INTRADAY_5'){
            this.isTimeSeriesNotIntraday = true;
            return '5min'
        }else if(timeSeries === 'TIME_SERIES_DAILY_1'){
            this.isTimeSeriesNotIntraday = false;
            return 'TIME_SERIES_DAILY'
        }else if(timeSeries === 'TIME_SERIES_DAILY_3'){
            this.isTimeSeriesNotIntraday = false;
            return 'TIME_SERIES_DAILY'
        }else if(timeSeries === 'TIME_SERIES_DAILY_5'){
            this.isTimeSeriesNotIntraday = false;
            return 'TIME_SERIES_DAILY'
        }else if(timeSeries === 'TIME_SERIES_DAILY_12'){
            this.isTimeSeriesNotIntraday = false;
            return 'TIME_SERIES_WEEKLY'
        }else if(timeSeries === 'TIME_SERIES_DAILY_60'){
            this.isTimeSeriesNotIntraday = false;
            return 'TIME_SERIES_WEEKLY'
        }

    }

}