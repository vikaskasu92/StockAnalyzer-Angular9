import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'trimParagraph'
})
export class TrimParagraph implements PipeTransform{
    
    transform(value:string, lengthEnd:number):string{  
       return value.substring(0,lengthEnd) + '...';
    }

}