import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeInactive',
  standalone: false
})
export class ActiveInactivePipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? "Active" : "Inactive";
  }

}
