import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css'],
    providers:[]
})
export class Header implements OnInit, OnDestroy{

    @Input('showSearchOnHeaderInput')displaySearchOnNav:boolean = false;
    stockInfoPageShown:boolean = false;
    
    constructor(private route:ActivatedRoute){}

    ngOnInit(){
       this.route.queryParams.subscribe((params:Params) => {
        this.stockInfoPageShown = params['stockInfoPageShown'];
       });
    }

    ngOnDestroy(){
       
    }

   

}