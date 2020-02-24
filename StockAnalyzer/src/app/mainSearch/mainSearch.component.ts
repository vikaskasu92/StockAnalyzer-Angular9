import { Component, ViewChild, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';

@Component({ 
    selector:'app-mainSearch',
    templateUrl:'./mainSearch.component.html',
    styleUrls:['./mainSearch.component.css']
})
export class MainSearch implements OnInit{

     @ViewChild('searchForm',{static:true}) searchForm:NgForm;
     stockInfoPageShown:boolean = true;
     addErrorClass:boolean = false;

     constructor(private router:Router){ }

     ngOnInit(){
     }

     onSubmit(){ 
        if(this.searchForm.valid){
            this.router.navigate(['/stockInfo'],{queryParams:{'ticker':this.searchForm.controls['ticker'].value,'stockInfoPageShown':this.stockInfoPageShown}});
        }
    }

}