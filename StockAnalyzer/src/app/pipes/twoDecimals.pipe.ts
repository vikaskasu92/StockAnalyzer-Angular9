import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'twoDecimals'
})
export class TwoDecimals implements PipeTransform{

    transform(decimal:number):string{
       return decimal.toFixed(2);
    }

}