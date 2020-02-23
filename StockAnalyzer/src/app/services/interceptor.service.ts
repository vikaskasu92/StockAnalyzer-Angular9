import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Header } from '../header/header.component';

export class Intercept implements HttpInterceptor{
    intercept(req:HttpRequest<any>, next:HttpHandler){
        let updatedRequest:HttpRequest<any>;
        if(req.url.includes('www.alphavantage.co')){
            updatedRequest = req.clone({params: req.params.append('apikey','DT7RMJ21B9IBYS9B')});
        }else if(req.url.includes('newsapi.org')){
            updatedRequest = req.clone({params: req.params.append('apikey','85435614dd924fb59fa2e2660585decb')});
        }
        return next.handle(updatedRequest);

    }    
}