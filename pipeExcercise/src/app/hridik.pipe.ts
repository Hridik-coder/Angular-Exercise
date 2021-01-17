import {Pipe,PipeTransform} from '@angular/core';


@Pipe({name:'studentnamepipe'})
export class studentnamepipe implements PipeTransform{
 
    transform(data: any, value : any): any{
       
        var value1 = data.substr(0,7);
        value1= value1 +'...'
        return value1;
    }
}