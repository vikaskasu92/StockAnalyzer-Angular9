import { Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core'
import { NgForm } from '@angular/forms'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { StockAnalyzerService } from '../stockAnalyzer.service';

@Component({ 
    selector:'app-mainSearch',
    templateUrl:'./mainSearch.component.html',
    styleUrls:['./mainSearch.component.css']
})
export class MainSearch implements OnInit{

     @ViewChild('searchForm',{static:true}) searchForm:NgForm;
     stockInfoPageShown:boolean = true;

     constructor(private route:ActivatedRoute, private router:Router, private stockAnalyzerService:StockAnalyzerService){ }

     ngOnInit(){
        console.log(this.searchForm);
     }

     onSubmit(){ 
       this.router.navigate(['/stockInfo'],{queryParams:{'ticker':this.searchForm.controls['ticker'].value,'stockInfoPageShown':this.stockInfoPageShown}});
    }

}