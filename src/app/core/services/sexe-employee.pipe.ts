import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexeEmployee'
})
export class SexeEmployeePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
