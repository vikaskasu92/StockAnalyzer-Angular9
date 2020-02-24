import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { environment } from '../../environments/environment';

export class Intercept implements HttpInterceptor{
    intercept(req:HttpRequest<any>, next:HttpHandler){
        let updatedRequest:HttpRequest<any>;
        if(req.url.includes('www.alphavantage.co')){
            updatedRequest = req.clone({params: req.params.append('apikey',environment.alphaVantageApiKey)});
        }else if(req.url.includes('newsapi.org')){
            updatedRequest = req.clone({params: req.params.append('apikey',environment.newsApiURLApiKey)});
        }
        return next.handle(updatedRequest);

    }    
}