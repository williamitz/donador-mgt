export class TypeLotteryModel {
  pkTypeLottery: number;
  nameType: string;
  nEvents: number;

  constructor() {
    this.pkTypeLottery = 0;
    this.nameType = '';
    this.nEvents = 0;
  }

  onReset() {
    this.pkTypeLottery = 0;
    this.nameType = '';
    this.nEvents = 0;
  }
}
