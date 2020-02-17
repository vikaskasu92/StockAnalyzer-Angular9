import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector:'app-stockExchange',
    templateUrl:'./stockExchange.component.html',
    styleUrls:['./stockExchange.component.css']
})
export class StockExchange implements OnInit{

    stockInfoPageShown:boolean = false;
    
    constructor(private route:ActivatedRoute){}

    ngOnInit(){
       this.route.queryParams.subscribe((params:Params) => {
        this.stockInfoPageShown = params['stockInfoPageShown'];
       });
    }

}