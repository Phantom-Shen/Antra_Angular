import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short',
})
export class ShortPipe implements PipeTransform {
  shortLength: number = 12;
  transform(value: any, args?: any): any {
    return value.split(' ').splice(0, this.shortLength).join(' ') + ' ... ';
  }
}
