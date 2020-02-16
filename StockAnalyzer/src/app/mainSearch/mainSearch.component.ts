import { Component, ViewChild, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';

@Component({ 
    selector:'app-mainSearch',
    templateUrl:'./mainSearch.component.html',
    styleUrls:['./mainSearch.component.css']
})
export class MainSearch implements OnInit{

     @ViewChild('searchForm',{static:true}) searchForm:NgForm;
     stockInfoPageShown:boolean = true;

     constructor(private route:ActivatedRoute, private router:Router){ }

     ngOnInit(){
        //console.log(this.searchForm);
     }

     onSubmit(){ 
       this.router.navigate(['/stockInfo'],{queryParams:{'ticker':this.searchForm.controls['ticker'].value,'stockInfoPageShown':this.stockInfoPageShown}});
    }

}