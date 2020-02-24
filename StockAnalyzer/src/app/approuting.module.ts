import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { MainSearch } from './mainSearch/mainSearch.component';
import { StockInfo } from './stockInfo/stockInfo.component';
import { Error } from './shared/error/error.component'
import { InvalidTicker } from './shared/error/Invalid Ticker/invalidTicker.component';


const appRoutes:Routes = [
    { path:"", component:MainSearch, pathMatch:'full' },
    { path:"searchTicker", component:MainSearch },
    { path:"stockInfo", component:StockInfo },
    { path:"error", component:Error ,children:
      [
        { path:"invalidTicker",component:InvalidTicker }
      ]
    },
    { path:"**", component:StockInfo }
]

@NgModule({
    imports:[
      RouterModule.forRoot(appRoutes)  
    ],
    exports:[
     RouterModule
    ]
})
export class AppRoutingModule { }