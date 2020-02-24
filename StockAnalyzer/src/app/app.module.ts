import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './approuting.module'

import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { MainSearch } from './mainSearch/mainSearch.component';
import { StockInfo } from './stockInfo/stockInfo.component';
import { Header } from './header/header.component';
import { StockInfoService } from './stockInfo/stockInfo.service';
import { StockNews } from './stockInfo/stockNews/stockNews.component';
import { RecentStocks } from './stockExchange/recentStocks/recentStock.component';
import { StockExchange } from './stockExchange/stockExchange.component';
import { Error } from './shared/error/error.component'
import { InvalidTicker } from './shared/error/Invalid Ticker/invalidTicker.component';
import { DropDownToggle } from './shared/directives/dropDownToggle.directive';
import { TwoDecimals } from './shared/pipes/twoDecimals.pipe';
import { Intercept } from './services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    MainSearch,
    StockInfo,
    StockNews,
    RecentStocks,
    StockExchange,
    Error,
    InvalidTicker,
    DropDownToggle,
    TwoDecimals
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [StockInfoService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:Intercept,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
