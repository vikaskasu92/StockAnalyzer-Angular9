import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './approuting.module'

import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { MainSearch } from './mainSearch/mainSearch.component';
import { StockInfo } from './stockInfo/stockInfo.component';
import { Header } from './header/header.component';
import { StockAnalyzerService } from './stockAnalyzer.service';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    MainSearch,
    StockInfo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule
  ],
  providers: [StockAnalyzerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
