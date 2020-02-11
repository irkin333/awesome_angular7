import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'filterBy',
    //setting for pipe to rerun each time when anything changes
    //pure: false
})
export class FilterPipe implements PipeTransform {
    transform(value: any, filterString: string, propName: string) {
        if(!value.length || !filterString) {
            return value;
        }
        const resultArray = [];
        for(const item of value) {
            if(item[propName] === filterString) {
                resultArray.push(item);
            }
        }
        return resultArray;
    }
}