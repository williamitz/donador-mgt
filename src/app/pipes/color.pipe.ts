import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'colord'})
export class ColorDinamycPipe implements PipeTransform {

  constructor( private doms: DomSanitizer ) {}

  transform(val: string): any {

    let style = `background-color: ${ val }`;
    console.log(style);
    return style;

    return this.doms.bypassSecurityTrustStyle( `background-color: ${ val }` );

  }
}
