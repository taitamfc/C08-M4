import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customReveseString'
})
export class CustomReveseStringPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.split("").reverse().join("");
  }

}
