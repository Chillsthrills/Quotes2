import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let currentdate = new Date();
    let dateinseconds = currentdate.getSeconds();
    return dateinseconds;
  }

}
