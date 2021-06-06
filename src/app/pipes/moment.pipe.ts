import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({name: 'momentp'})
export class MomentPipe implements PipeTransform {

  transform(value: string, format = 'event'): String {

    // console.log('date event', value);
    let dayWeek =  moment( value ).format( 'ddd' );
    const dayMonth =  moment( value ).format( 'D' );
    let month =  moment( value ).format( 'MMMM' );
    const time =  moment( value ).format( 'hh:mm a' );

    if (format === 'event') {

      dayWeek = dayWeek.substr(0, 1).toUpperCase() +  dayWeek.substr(1);

      return `${dayWeek} ${dayMonth} de ${month}, ${time}`;
    }

    if (format === 'eventShort') {
      let month =  moment( value ).format( 'MMM' );
      dayWeek = dayWeek.substr(0, 1).toUpperCase() +  dayWeek.substr(1);

      return `${dayWeek} ${dayMonth} ${month} ${time}`;
    }

    if (format === 'eventDate') {
      return moment( value ).format( 'D MMM' );
    }

    if (format === 'eventTime') {
      return moment( value ).format( 'hh:mm a' );

    }

    if (format = 'date') {
      let date = moment(value).format('ddd D MMMM YYYY');
      return date.substr(0, 1).toUpperCase() +  date.substr(1);
    }
    return moment( value ).fromNow();
    // return '';
  }
}
