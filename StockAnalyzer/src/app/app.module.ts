import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './approuting.module'

import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { MainSearch } from './mainSearch/mainSearch.component';
import { StockInfo } from './stockInfo/stockInfo.component';
import { Header } from './header/header.component';
import { StockAnalyzerService } from './stockAnalyzer.service';
import { StockNews } from './stockInfo/stockNews/stockNews.component';
import { RecentStocks } from './stockExchange/recentStocks/recentStock.component';
import { StockExchange } from './stockExchange/stockExchange.component';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    MainSearch,
    StockInfo,
    StockNews,
    RecentStocks,
    StockExchange
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [StockAnalyzerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
