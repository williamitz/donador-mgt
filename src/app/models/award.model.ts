export class AwardModel {
  pkAward: number;
  nameAward: string;

  constructor() {
    this.pkAward = 0;
    this.nameAward = '';
  }

  onReset() {
    this.pkAward = 0;
    this.nameAward = '';
  }
}
