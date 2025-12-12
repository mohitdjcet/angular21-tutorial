import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeShortName',
})
export class PipeShortNamePipe implements PipeTransform {

  transform(fullName: string): string {
    const parts = fullName.split(' ');

    if (parts.length < 2) return fullName;

    const first = parts[0].charAt(0).toUpperCase();
    const last = parts[1];

    return `${first}. ${last}`
  }

}
