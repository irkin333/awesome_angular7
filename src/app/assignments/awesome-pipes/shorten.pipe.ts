import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
    transform(value: string, limit: number) {
        limit = limit || 10;
        return value.substr(0, limit) + (value.length > limit ? '...' : '');
    }
}