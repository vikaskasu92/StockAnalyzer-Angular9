import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'twoDecimals'
})
export class TwoDecimals implements PipeTransform{
    
    transform(value:number):string{
       return value.toFixed(2);
    }

}