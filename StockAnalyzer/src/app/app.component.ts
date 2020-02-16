import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StockAnalyzer';
  navSearch:boolean = false;

  updateNavSearch(searchEnabled:boolean){
    this.navSearch = searchEnabled;
    console.log(searchEnabled);
  }

}
