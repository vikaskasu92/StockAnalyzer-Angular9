import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'replace'
})
export class Replace implements PipeTransform{
    
    transform(value:string):string{
        value.replace('<ul>','');
        value.replace('</ul>','');
        value.replace('<li>','');
        value.replace('</li>','');
        value.replace('<ul><li>','');
        value.replace('</li><li>','');
        return value;
    }


}