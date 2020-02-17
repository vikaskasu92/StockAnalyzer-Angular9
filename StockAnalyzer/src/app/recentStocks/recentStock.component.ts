import { Component } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector:'app-recentStock',
    templateUrl:'./recentStock.component.html',
    styleUrls:['./recentStock.component.css']
})
export class RecentStocks{

    stockInfoPageShown:boolean = false;
    
    constructor(private route:ActivatedRoute){}

    ngOnInit(){
       this.route.queryParams.subscribe((params:Params) => {
        this.stockInfoPageShown = params['stockInfoPageShown'];
       });
    }

}