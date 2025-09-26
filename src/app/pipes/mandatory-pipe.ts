import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mandatory',
  standalone: false
})
export class MandatoryPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? "Mandatory" : "Optional";
  }

}
