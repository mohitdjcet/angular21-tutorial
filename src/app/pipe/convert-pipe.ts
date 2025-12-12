import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {

  transform(amount: number, rate: number): number {
    return amount*rate;
  }

}
