import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { MainSearch } from './mainSearch/mainSearch.component';
import { StockInfo } from './stockInfo/stockInfo.component';


const appRoutes:Routes = [
    { path:"searchTicker", component:MainSearch },
    { path:"stockInfo", component:StockInfo }
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