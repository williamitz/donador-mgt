import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'stlottery'})
export class StLotteryPipe implements PipeTransform {

    transform(vigent: boolean): any {
        return vigent ? 'Próximo' : 'Expiró;';
    }
}